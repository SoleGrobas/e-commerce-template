<?php

namespace App\Http\Controllers\Api;
use App\Models\Order;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
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
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $order = Order::find($id);
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
        $order = Order::destroy($id);
        return $order;
    }
}
