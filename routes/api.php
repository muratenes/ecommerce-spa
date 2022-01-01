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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'panel'], function () {
    Route::get('productsx', [\App\Http\Controllers\Api\ProductController::class, 'index']);
    // Auth
    Route::group(['prefix' => 'auth'], function () {
        Route::post('register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
        Route::post('login', [\App\Http\Controllers\Api\AuthController::class, 'login']);
        Route::post('me', [\App\Http\Controllers\Api\AuthController::class, 'me'])->middleware('auth:sanctum');
        Route::delete('logout', [\App\Http\Controllers\Api\AuthController::class, 'logout'])->middleware('auth:sanctum');
    });

    // Auth Required Routes
    Route::group(['middleware' => 'auth:sanctum'], function () {
        // categories
        Route::resource('categories', App\Http\Controllers\Api\Panel\CategoryController::class)->only(['index', 'show', 'update', 'store']);

        // products
        Route::group(['prefix' => 'products'], function () {
            Route::get('', [\App\Http\Controllers\Api\ProductController::class, 'index'])->name('panel.products.index');
            Route::get('{product:slug}', [\App\Http\Controllers\Api\ProductController::class, 'show']);
            Route::get('getProductsByCategory/{category:slug}', [\App\Http\Controllers\Api\ProductController::class, 'getProductsByCategory']);
        });

        // tables
        Route::group(['prefix' => 'tables'], function () {
            Route::get('categories', [\App\Http\Controllers\Api\Panel\TableController::class, 'categories']);
        });
    });
});

