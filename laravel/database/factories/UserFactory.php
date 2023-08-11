<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'mobile_no' => fake()->randomNumber(9),
            'role_id' => null, // Assuming the role_id can be null
            'avatar' => null,
            'status' => $this->faker->boolean(80) ? 1 : 0, // Randomly set status as 1 (80% chance) or 0 (20% chance)
            'remember_token' => Str::random(10),
        ];
    }
}
