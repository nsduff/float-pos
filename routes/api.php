<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Category;

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

// Route::get('/orders', 'App\Http\Controllers\Api\OrderController@index');

Route::get('/categories', 'App\Http\Controllers\Api\CategoryController@categories');
Route::post('/categories', 'App\Http\Controllers\Api\CategoryController@storeCategories');

Route::get('/items', 'App\Http\Controllers\Api\CategoryController@items');
Route::post('/items', 'App\Http\Controllers\Api\CategoryController@storeItems');

Route::get('/orders', 'App\Http\Controllers\Api\OrderController@orders');
Route::post('/orders', 'App\Http\Controllers\Api\OrderController@store');