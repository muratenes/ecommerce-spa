<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use App\Models\Product;

class ProductController extends ApiController
{
    public function index(Product $product)
    {
        return Product::all();
    }

    public function show(Product $product)
    {
        return $product;
    }

    /**
     * get products by category
     *
     * @param Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProductsByCategory(Category $category)
    {
        return $this->success([
            'products' => Product::where(['category_id' => $category->id, 'is_active' => true])->paginate()
        ]);
    }

}
