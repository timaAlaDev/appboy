<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder 
{
    public function run() {
        // создать 4 пользователей сайта
        User::factory()->times(4)->create();
    }
}