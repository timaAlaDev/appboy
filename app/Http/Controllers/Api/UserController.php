<?php

namespace App\Http\Controllers\Api;

use \Illuminate\Support\Facades\Mail;
use \App\Mail\UserMail;
use \App\Mail\UserPasswordMail;
use \App\Models\User;
use Illuminate\Http\Request;
use \App\Http\Controllers\Controller;


class UserController extends Controller
{

    public function edit(Request $request)
    {
        $rules = [
            'id'        =>  'required|exists:users,id',
            'city_id'   =>  'exists:cities,id'
        ];

        $messages = [
            // 
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $user   =   User::where( 'id' , $request->id )->first();

        $user->name         =   $request->name      ?? $user->name;
        $user->city_id      =   $request->city_id   ?? $user->city_id;
        $user->telephone    =   $request->telephone ?? $user->telephone;

        if( $request->image )
        {
            if( \File::exists( $user->image ) )
            {
                \File::delete( $user->image );
            }

            $user->image = $this->uploadFile($request->image,'users');
        }

        if( isset( $request->password_old ) && isset( $request->password_new ) )
        {
            if( !\Hash::check( $request->password_old , $user->password ) )
            {
                return response()->json( 'Неверный пароль' , 400 , [ 'charset' => 'utf-8' ] , JSON_UNESCAPED_UNICODE );
            }
            
            $user->password = bcrypt($request->password_new);
        }

        $user->save();

        return response()->json(  $user  ,200 , [ 'charset' => 'utf-8' ] , JSON_UNESCAPED_UNICODE );
    }

}
