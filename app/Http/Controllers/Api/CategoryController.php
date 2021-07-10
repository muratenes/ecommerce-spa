<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
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
