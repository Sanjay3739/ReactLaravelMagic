<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $roles = [
            'Admin',
            'User',
            'Customer',
            'Moderator',
            'Manager',
            'Support',
            'Editor',
            'Analyst',
            'Salesperson',
            'Developer',
            'Tester',
            'Designer',
            'Marketing',
            'Intern',
            'Volunteer',
            'Consultant',
            'Trainer',
            'Coordinator',
            'Supervisor',
        ];

        $databaseData = [];

        foreach ($roles as $role) {
            $data = [
                'name' => $role,
                'status' => rand(0, 1) // Generate random 0 or 1
            ];
            $databaseData[] = $data;
        }

        Role::insert($databaseData);
    }
}
