<?php

namespace App\Http\Controllers\Api\Panel;

use App\Http\Controllers\Api\ApiController;
use App\Http\Resources\CategoryResource;
use App\Models\Category;

class CategoryController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }


    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Category
     */
    public function show(Category $category)
    {
        return $category;
    }
}
