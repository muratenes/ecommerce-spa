<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// categories
Route::resource('categories', \App\Http\Controllers\Api\CategoryController::class)->only(['index', 'show']);

Route::group(['namespace' => 'Api'], function () {
    // products
    Route::group(['prefix' => 'products'], function () {
        Route::get('{product:slug}', [\App\Http\Controllers\Api\ProductController::class, 'show']);
        Route::get('getProductsByCategory/{category:slug}', [\App\Http\Controllers\Api\ProductController::class, 'getProductsByCategory']);
    });
});

