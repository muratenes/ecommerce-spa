<?php

namespace App\Http\Controllers\Api\Panel;

use App\Http\Controllers\Api\ApiController;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

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

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'title' => 'required|max:50|min:2',
            'slug' => 'required|max:70|min:2',
            'short_description' => 'nullable|max:255'
        ]);
        $category->update($validated);

        return $this->success();
    }
}
