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

Route::group(['prefix' => 'v1'], function() {
    Route::group(['middleware' => 'auth:sanctum'], function(){
        Route::get('/user', 'UserController@getUser');
        Route::post('/user/updatePassword', 'UserController@updatePassword');
    });

    Route::post('/login', 'AuthController@login');
    Route::post('/register', 'AuthController@register');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/recover-password', 'AuthController@recover');

    Route::get("/dashboard", "DashboardController@index");

    Route::get("/countries", "AxiosController@getCountries");
    Route::get("/states/{id}", "AxiosController@getStates");
    Route::get("/cities/{id}", "AxiosController@getCities");

    Route::get("/getProperty/{id}", "PropertyController@get");
    Route::post("/set-information", "PropertyController@saveInformation");
    Route::post("/set-taxes", "PropertyController@saveTaxes");

    Route::post("/set-site-type", "SiteTypeController@save");
    Route::post("/edit-site-type", "SiteTypeController@edit");
    Route::post("/delete-site-type", "SiteTypeController@delete");
    Route::get("/get-site-types/{property_id}", "SiteTypeController@getAll");

    Route::post("/search-reservations", "ReservationController@searchReservation");

    Route::post("/search-accountings", "AccountingController@searchAccounting");

    Route::post("/add-site", "SiteController@save");
    Route::post("/edit-site", "SiteController@edit");
    Route::post("/delete-site", "SiteController@delete");

    Route::post("/add-payment", "PaymentPolicyController@create");
});
