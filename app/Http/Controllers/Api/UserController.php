<?php

namespace App\Http\Controllers\Api;

use \Illuminate\Support\Facades\Mail;
use \App\Mail\UserMail;
use \App\Models\User;
use Illuminate\Http\Request;
use \App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'name'      =>  'required',
            'email'     =>  'required|unique:users,email',
            'password'  =>  'required'
        ];

        $messages = [
            'email.unique'=>'Email занят',
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        // $code   =   \Str::random(30);
        $code = 1111;

        Mail::to($request['email'])->send( new UserMail( $request['email'] , $code )  );

        \Cache::put($request['email'],[
            'name'      =>  $request['name'],
            'password'  =>  $request['password'],
            'email'     =>  $request['email'],
            'code'      =>  $code
        ]);

        return response()->json ( [ 'response' => "send mail code to +$request->email"] , 200 );
    }

    public function verifyEmail(Request $request)
    {
        $rules = [
            'email' =>  'required',
            'code'  =>  'required'
        ];

        $messages = [
            // empty
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $data   =   \Cache::get($request['email']);

        if( $data['code']   !=  $request['code'] )
        {
            return response()->json('Неправильный код',400);
        }

        $user   =   new User;
        $user->name     =   $data['name'];
        $user->email    =   $data['email'];
        $user->password =   bcrypt( $data['password'] );
        $user->save();

        header("Location: http://freelance.lar/");
    }

    public function login(Request $request)
    {
        $rules = [
            'email'         =>  'required|exists:users,email',
            'password'      =>  'required',
        ];
    
        $messages = [
            'phone.required'    =>  'Введите номер телефона',
        ];
    
        $validator = $this->validator($request->all(),$rules,$messages);
    
        //Проверяем данные на наличие ошибок
        if( $validator->fails() )
        {
            return response()->json( $validator->errors()->first(), 400 , [ 'charset' => 'utf-8' ] , JSON_UNESCAPED_UNICODE );
        }

        $user = User::where( 'email' , $request->email )->first();

        if( !\Hash::check( $request->password , $user->password ) )
        {
            return response()->json( 'Неверные данные' , 400 , [ 'charset' => 'utf-8' ] , JSON_UNESCAPED_UNICODE );
        }

        return response()->json(  $user  ,200 , [ 'charset' => 'utf-8' ] , JSON_UNESCAPED_UNICODE );
    }

    public function edit(Request $request)
    {
        $rules = [
            'id'    =>  'required|exists:users,id',
        ];

        $messages = [
            // 
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $user   =   User::where( 'id' , $request->id )->first();

        $user->name     =   $reqeust->name  ?? $user->name;

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
