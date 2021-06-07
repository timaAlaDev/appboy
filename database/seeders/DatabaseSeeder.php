<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->command->info('Таблица пользователей загружена данными!');

        $this->call(PostTableSeeder::class);
        $this->command->info('Таблица постов блога загружена данными!');
    }
}
