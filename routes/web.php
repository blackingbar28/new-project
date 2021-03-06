<?php

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

//Route::get('/', function () {
//    return view('welcome');
//});
//
//Auth::routes();
//
//Route::get('/home', 'HomeController@index')->name('home');
//
//Route::get('auth/steam', 'AuthController@redirectToSteam')->name('auth.steam');
//Route::get('auth/steam/handle', 'AuthController@handle')->name('auth.steam.handle');
//
//Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::any('{all}', function () {
    return view('index');
})->where(['all' => '.*']);