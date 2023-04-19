<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('admins')->insert([
            [
                'email' => 'admin@gmail.com',
                'password' => bcrypt('admin123')
            ],
            [
                'email' => 'rabie@gmail.com',
                'password' => bcrypt('rabie123')
            ],
        ]);
    }
}
