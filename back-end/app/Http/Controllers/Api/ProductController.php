<?php

namespace App\Http\Controllers\Api;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return $products;
    }

   

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product= new Product();
        $product->title = $request->title;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount = $request->discount;
        $product->stock = $request->stock;
        $product->image = $request->image;
        $product->size = $request->size;

        $product->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

   
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    try {
        // Primero, intentamos encontrar el producto en la base de datos
        $product = Product::findOrFail($id);

        // Luego, actualizamos los campos del producto con los valores de la solicitud
        $product->title = $request->input('title');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->discount = $request->input('discount');
        $product->stock = $request->input('stock');
        $product->image = $request->input('image');
        $product->size = $request->input('size');

        // Guardamos los cambios en la base de datos
        $product->save();

        // Devolvemos el producto actualizado como respuesta
        return $product;
    } catch (\Exception $e) {
        // Maneja cualquier excepción que pueda ocurrir, por ejemplo, si el producto no se encuentra
        return response()->json(['error' => 'No se pudo actualizar el producto'], 500);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::destroy($id);
        return $product;
    }
}


