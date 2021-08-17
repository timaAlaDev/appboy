<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->text('title')->nullable();
            $table->text('recomended')->nullable();
            $table->text('category')->nullable();
            $table->text('image')->nullable();
            $table->text('short_description')->nullable();
            $table->bigInteger('city_id')->nullable();
            $table->string('sum_of_money')->nullable();
            $table->date('closed_at')->nullable();
            $table->text('video_or_animation')->nullable();
            $table->text('detail_description')->nullable();
            $table->integer('number_of_rewards')->nullable();
            $table->string('author')->nullable();
            $table->string('author_last_name')->nullable();
            $table->string('author_patronymic')->nullable();
            $table->bigInteger('author_city_id')->nullable();
            $table->string('iin')->nullable();
            $table->string('phone')->nullable();
            $table->text('document_front')->nullable();
            $table->text('document_back')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
