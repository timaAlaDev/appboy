<?php

namespace App\Http\Controllers\Api;

use \App\Models\User;
use \App\Models\ProjectPayment;
use Illuminate\Http\Request;
use \App\Http\Controllers\Controller;

class ProjectPaymentController extends Controller
{
    public function create(Request $request)
    {
        $rules = [
            'user_id'       =>  'required|exists:users,id',
            'project_id'    =>  'required|exists:projects,id',
            'reward_id'     =>  'required|exists:project_rewards,id',
            'sum'           =>  'required|numeric'
        ];

        $messages = [
            //
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $user   =   User::where( 'id' , $request->user_id )->first();

        $user_wallet_balance    =   (int)$user->wallet - (int)$request->sum;

        if( $user_wallet_balance < 0 )
        {
            return response()->json( 'Недостаточно средств на счету' , 400 , ['charset'=>'utf-8'], JSON_UNESCAPED_UNICODE );
        }

        // CREATE PAYMENT
            $project_payment    =   new ProjectPayment;
            $project_payment->user_id       =   $request->user_id;
            $project_payment->project_id    =   $request->project_id;
            $project_payment->reward_id     =   $request->reward_id;
            $project_payment->sum           =   $request->sum;
            $project_payment->save();
        // #END# CREATE PAYMENT

        // USER
            $user->wallet   =   $user_wallet_balance;
            $user->save();
        // #END# USER
        
        return response()->json( $project_payment , 200 );
    }
}
