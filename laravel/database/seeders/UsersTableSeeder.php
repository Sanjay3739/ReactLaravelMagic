<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $roleIds = [1, 2]; // Assuming the role IDs for 'admin' and 'user' are 1 and 2 respectively

        $faker = \Faker\Factory::create();

        foreach (range(1, 100) as $index) {
            $roleId = $roleIds[array_rand($roleIds)];

            User::create([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'mobile_no' => $faker->randomNumber(9),
                'role_id' => $roleId,
                'avatar' => null,
                'status' => rand(0, 1) ,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
