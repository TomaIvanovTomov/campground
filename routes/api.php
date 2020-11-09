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
        Route::post('/update-user', 'UserController@updateUser');
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
    Route::get("/get-plan-city/{q}", "AxiosController@getPlanCity");

    Route::get("/getProperty/{id}", "PropertyController@get");
    Route::get("/get-single/{id}", "PropertyController@getSingle");
    Route::get("/get-single-booking/{id}", "PropertyController@getSingleBooking");
    Route::post("/set-information", "PropertyController@saveInformation");
    Route::post("/set-taxes", "PropertyController@saveTaxes");
    Route::get("/get-top-properties", "PropertyController@getTopProperties");
    Route::get("/get-property/{id}", "PropertyController@get");
    Route::get("/get-properties/{userId}", "PropertyController@getUserProperties");
    Route::get("/get-properties", "PropertyController@getAll");

    Route::post("/set-site-type", "SiteTypeController@save");
    Route::post("/edit-site-type", "SiteTypeController@edit");
    Route::post("/delete-site-type", "SiteTypeController@delete");
    Route::get("/get-site-types/{property_id}", "SiteTypeController@getAll");
    Route::get("/get-calendar-entries/{property_id}", "SiteTypeController@listCalendarTypes");

    Route::post("/search-reservations", "ReservationController@searchReservation");
    Route::get("/get-reservations", "ReservationController@getReservations");

    Route::get("/get-accountings", "AccountingController@getAccountings");
    Route::post("/search-accountings", "AccountingController@searchAccounting");

    Route::post("/update-status", "SiteController@updateStatus");
    Route::post("/add-site", "SiteController@save");
    Route::post("/edit-site", "SiteController@edit");
    Route::post("/delete-site", "SiteController@delete");

    Route::post("/add-payment", "PaymentPolicyController@create");
    Route::get("/get-payment-info/{id}", "PaymentPolicyController@get");

    Route::get("/get-reviews", "TestimonialController@getTestimonials");

    Route::post("/save-trip", "TripController@save");
    Route::post("/delete-trip", "TripController@delete");
    Route::get("/edit-trip/{trip_id}", "TripController@get");
    Route::get("/get-user-trips/{user_id}", "TripController@getUserTrips");

    Route::get("/get-trip-data-and-legs/{trip_id}", "TripLegController@getTripAndLegs");
    Route::post("/set-review", "TripLegController@setReview");

    Route::post("/add-leg-image", "TripLegImageController@addImages");

    Route::post("/booking", "BookingController@save");
});
