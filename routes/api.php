<?php

use Illuminate\Http\Request;

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

Route::post('login', 'AuthenticationController@login');

Route::get('list-films', 'HomeController@listFilm');
Route::get('film', 'HomeController@getFilm');
Route::get('actor', 'HomeController@getActors');
Route::get('list-hot-films', 'HomeController@listHotVideoByCategory');
Route::get('film-by-actor', 'HomeController@getFilmByActor');
Route::get('search', 'HomeController@search');

Route::group(['middleware' => 'jwt'], function () {
    Route::resource('trailers', 'TrailerController');
    Route::resource('overviews', 'OverviewController');
    Route::resource('categories', 'CategoryController');
    Route::post('films/{id}/upload', 'FilmController@upload');
    Route::post('films/{id}/addLink', 'FilmController@addLink');
    Route::delete('films/{id}/removeLink/{linkId}', 'FilmController@removeLink');
    Route::post('films/{id}/addActor', 'FilmController@addActor');
    Route::resource('films', 'FilmController');
    Route::resource('actors', 'ActorController');
});
