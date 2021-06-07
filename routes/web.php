<?php

use Illuminate\Support\Facades\Route;

Route::get('verify_user', 'Api\UserController@verifyEmail')->name('verifyUser');

Route::get('/{query}', function () {
    return view('app');
})->where('query', "^((?!api).)*$");
