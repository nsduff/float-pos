<?php

use Illuminate\Support\Facades\Route;

use Laravel\Fortify\Fortify;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'App\Http\Controllers\HomeController@index')->name('home')->middleware('auth');

Route::get('/order', 'App\Http\Controllers\OrderController@index')->name('order')->middleware('auth');