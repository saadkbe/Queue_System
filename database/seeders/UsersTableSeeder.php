<?php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'email' => 'saad@gmail.com',
                'password' => Hash::make('saad'),
            ],
            [
                'email' => 'hiba@gmail.com',
                'password' => Hash::make('hiba'),
            ],
            // add more users here as needed
        ];

        // Loop through the $users array and create new User models
        foreach ($users as $user) {
            User::create($user);
        }
    }
}
