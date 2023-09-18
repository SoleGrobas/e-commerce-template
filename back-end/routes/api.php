<?php



use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

use App\Http\Controllers\Api\OrderController;

Route::controller(ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});











Route::controller(OrderController::class)->group(function () {
    Route::get('/orders', 'index');
    Route::post('/order', 'store');
    Route::get('/order/{id}', 'show');
    Route::put('/order/{id}', 'update');
    Route::delete('/order/{id}', 'destroy');
})
?>