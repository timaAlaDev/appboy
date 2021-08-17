<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix( 'v1' )->namespace( 'Api' )->group( function() {
    // PROJECT
        Route::get(  'projects',        'ProjectController@get');
        Route::post( 'projects/edit ',  'ProjectController@update');
        Route::post( 'projects',        'ProjectController@create');
        Route::get(  'projects/{id}',   'ProjectController@getById');
    // #END# PROJECT
    
    // PROJECT REWARD 
        Route::post('reward',   'ProjectRewardController@create');
        Route::get( 'reward',   'ProjectRewardController@getByProjectId');
    //#END# PROJECT REWARD

    // PROJECT PAYMENT
        Route::post('project_payment',  'ProjectPaymentController@create');
    // #END# PROJECT PAYMENT

    // CITY
        Route::get(     'city',         'CityController@get');
        Route::post(    'city',         'CityController@create');
        Route::put(     'city/{id}',    'CityController@update');
        Route::delete(  'city/{id}',    'CityController@delete');
    // #END# CITY

});