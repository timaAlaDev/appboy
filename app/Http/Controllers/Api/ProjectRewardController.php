<?php

namespace App\Http\Controllers\Api;

use \App\Models\ProjectReward;
use Illuminate\Http\Request;
use \App\Http\Controllers\Controller;

class ProjectRewardController extends Controller
{
    public function create(Request $request)
    {
        $rules = [
            'project_id'    =>  'required|exists:projects,id',
            'name'          =>  'required',
            'image'         =>  'required',
            'cost'          =>  'required|numeric',
            'description'   =>  'required',
            'how_to_get'    =>  'required',
            'date_sending'  =>  'required'
        ];

        $messages = [
            //
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $project_reward =   new ProjectReward;
        $project_reward->project_id     =   $request->project_id;
        $project_reward->name           =   $request->name;
        if( isset( $request->image ) )
        {
            $project_reward->image  =   $this->uploadFile($request->image,'rewards');
        }
        $project_reward->cost           =   $request->cost;
        $project_reward->description    =   $request->description;
        $project_reward->how_to_get     =   $request->how_to_get;
        $project_reward->date_sending   =   $request->date_string;
        $project_reward->save();

        return response()->json( $project_reward , 200 );
    }

    public function getByProjectId(Request $request)
    {
        $rules = [
            'project_id'    =>  'required|exists:projects,id'
        ];

        $messages = [
            //
        ];

        $validator = $this->validator($request->all(),$rules,$messages);

        if ($validator->fails()) {
            return response()->json($validator->errors()->first(),400,['charset'=>'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $project_rewards    =   ProjectReward::where( 'project_id' , $request->project_id )->get();

        return response()->json( $project_rewards , 200 );
    }
}
