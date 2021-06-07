<?php

namespace App\Http\Resources;

use \App\Models\ProjectReward;
use \App\Models\ProjectPayment;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray($request)
    {
        $reword_count       =   ProjectReward::where(   'project_id' ,  $this['id'] )->get()->count();
        $collected_money    =   ProjectPayment::where(  'project_id' ,  $this['id'] )->sum('sum');
        return [
            'id'                    =>  $this['id'],
            'user_id'               =>  $this['user_id'],
            'image'                 =>  $this['image'],
            'title'                 =>  $this['title'],
            'short_description'     =>  $this['short_description'],
            'city_id'               =>  $this['city_id'],
            'sum_of_money'          =>  $this['sum_of_money'],
            'collected money'       =>  $collected_money,
            'reword_count'          =>  $reword_count,
            'closed_at'             =>  $this['closed_at'],
            'video_or_animation'    =>  $this['video_or_animation'],
            'detail_description'    =>  $this['detail_description'],
            'number_of_rewards'     =>  $this['number_of_rewards'],
            'author'                =>  $this['author'],
            'author_last_name'      =>  $this['author_last_name'],
            'author_patronymic'     =>  $this['author_patronymic'],
            'author_city_id'        =>  $this['author_city_id'],
            'iin'                   =>  $this['iin'],
            'phone'                 =>  $this['phone'],
            'document'              =>  $this['document'],
        ];
    }
}
