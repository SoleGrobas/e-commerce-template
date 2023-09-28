<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'price', 'discount', 'stock','image', 'size'];

    public function orders(){
        return $this->belongsToMany(Order::class, 'order_details', 'product_id', 'order_id')
        ->withPivot('quantity');
    }

    public function categories(){
        return $this->belongsToMany(Category::class, 'product_categories', 'product_id', 'category_id'); 
    }
}
