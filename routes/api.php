<?php

use Illuminate\Support\Facades\Route;

Route::post('user/register',        'Api\UserController@register');
Route::post('user/login',           'Api\UserController@login');

Route::prefix( 'v1' )->namespace( 'Api' )->group( function() {
    // PROJECT
        Route::get(  'projects',        'ProjectController@get');
        Route::post( 'projects',        'ProjectController@create');
        Route::post( 'projects/edit ',  'ProjectController@update');
        Route::get(  'projects/{id}',   'ProjectController@getById');
    // #END# PROJECT
    
    // PROJECT REWARD 
        Route::post('reward',   'ProjectRewardController@create');
        Route::get( 'reward',   'ProjectRewardController@getByProjectId');
    //#END# PROJECT REWARD

    // PROJECT PAYMENT
        Route::post('project_payment',  'ProjectPaymentController@create');
    // #END# PROJECT PAYMENT

    // USER
        Route::post('user/edit',    'UserController@edit');
    // #END# USER
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
