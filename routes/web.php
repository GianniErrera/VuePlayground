<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/vue', function () {
    return view('index');
});

Route::get('/modal', function () {
    return view('modal');
});

Route::get('/tabs', function () {
    return view('tabs');
});

Route::get('/coupon', function () {
    return view('coupon');
});


Route::get('/events', function () {
    return ["birthday", "Easter", "Bank holyday"];
});
