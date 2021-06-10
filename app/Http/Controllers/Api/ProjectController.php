<?php

namespace App\Http\Controllers\Api;

use \App\Http\Resources\ProjectResource;
use App\Models\Projects;
use Illuminate\Http\Request;
use \App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function create(Request $request)
    {
        $project    =   new Projects;

        $project->user_id               =   $request->user()->id            ?? null;

        if( $request->image )
        {
            $project->image = $this->uploadFile($request->image,'projects');
        }
        $project->title                 =   $request->title                 ?? null;
        $project->short_description     =   $request->short_description     ?? null;
        $project->city_id               =   $request->city_id               ?? null;
        $project->sum_of_money          =   $request->sum_of_money          ?? null;
        $project->closed_at             =   $request->closed_at             ?? null;
        if( $request->video_or_animation )
        {
            $project->video_or_animation = $this->uploadFile($request->video_or_animation,'video_or_animation');
        }
        $project->detail_description    =   $request->detail_description    ?? null;
        $project->author                =   $request->author                ?? null;
        $project->author_last_name      =   $request->author_last_name      ?? null;
        $project->author_patronymic     =   $request->author_patronymic     ?? null;
        $project->author_city_id        =   $request->author_city_id        ?? null;
        $project->iin                   =   $request->iin                   ?? null;
        $project->phone                 =   $request->phone                 ?? null;
        if( $request->document )
        {
            $project->document = $this->uploadFile($request->document,'document');
        }
        $project->save();

        return response()->json( new ProjectResource( $project ) , 200 );
    }

    public function update(Request $request)
    {
        $project    =   Projects::where( 'id' , $request->project_id )->first();

        if( $request->image )
        {
            if( \File::exists( $project->image ) )
            {
                \File::delete( $project->image );
            }

            $project->image = $this->uploadFile($request->image,'projects');
        }
        $project->title                 =   $request->title                 ?? ( $project->title             ?? null );
        $project->short_description     =   $request->short_description     ?? ( $project->short_description ?? null );
        $project->city_id               =   $request->city_id               ?? $project->city_id;
        $project->sum_of_money          =   $request->sum_of_money          ?? $project->sum_of_money;
        $project->closed_at             =   $request->closed_at             ?? $project->closed_at;
        if( $request->video_or_animation )
        {
            if( \File::exists( $project->video_or_animation ) )
            {
                \File::delete( $project->video_or_animation );
            }

            $project->video_or_animation = $this->uploadFile($request->video_or_animation,'video_or_animation');
        }
        $project->detail_description    =   $request->detail_description    ?? $project->detail_description;
        $project->author                =   $request->author                ?? $project->author;
        $project->author_last_name      =   $request->author_last_name      ?? $project->author_last_name;
        $project->author_patronymic     =   $request->author_patronymic     ?? $project->author_patronymic;
        $project->author_city_id        =   $request->author_city_id        ?? $project->author_city_id;
        $project->iin                   =   $request->iin                   ?? $project->iin;
        $project->phone                 =   $request->phone                 ?? $project->phone;
        if( $request->document )
        {
            if( \File::exists( $project->document ) )
            {
                \File::delete( $project->document );
            }

            $project->document = $this->uploadFile($request->document,'document');
        }
        $project->update();

        return response()->json( $project , 200 );
    }

    public function get(Request $request)
    {
        $projects   =   Projects::all();

        return response()->json( ProjectResource::collection( $projects ) , 200 );
    }

    public function getByUserId(Request $request)
    {
        $projects   =   Projects::where( 'user_id' , $user->id );
    }

    public function getById(Request $request, $id)
    {
        $project    =   Projects::where( 'id', $id)->first();

        return response()->json( new ProjectResource( $project ) , 200 );
    }
}