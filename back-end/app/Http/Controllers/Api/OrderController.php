<?php

namespace App\Http\Controllers\Api;
use App\Models\Order;
use App\Models\User;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with('user', 'product', 'order_details')->get();
        return $orders;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $order = new Order();
        $order->user_id = $request->user_id;
        $order->total_ammount = $request->total_ammount;
        $order->shipping_address = $request->shipping_address;
        $order->order_status = $request->order_status;
        $order->payment = $request->payment;
        $order->delivery = $request->delivery;
        $order->comments = $request->comments;

        $order->save();

        $order->products()->attach($request->input('product_ids'), ['quantity' => $request->input('quantities')]);
        return response()->json(['message' => 'Order created successfully'], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $order = Order::with('user', 'products')->find($id);
        return $order;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            
            $order = Order::findOrFail($id);
    
            $order->user_id = $request->input('user_id');
            $order->total_ammount = $request->input('total_ammount');
            $order->shipping_address = $request->input('shipping_address');
            $order->order_status = $request->input('order_status');
            $order->payment = $request->input('payment');
            $order->delivery = $request->input('delivery');
            $order->comments = $request->input('comments');
            
            $order->save();
    
            return $order;
        } catch (\Exception $e) {
            return response()->json(['error' => 'No se pudo actualizar la orden'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();

          
            $order = Order::findOrFail($id);

            
            $order->order_details()->delete();

            
            $order->delete();

            DB::commit();

            return response()->json(['message' => 'Order deleted successfully'], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to delete order'], 500);
        }
    }

}
