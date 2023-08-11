<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Passport\HasApiTokens;

class Role extends Model
{
    use SoftDeletes, HasFactory;

    protected $table = 'roles';

    protected $fillable = [
        'name',
        'status',
        'permissions',


    ];


    public function users()
    {
        return $this->hasMany(User::class, 'role_id');
    }

}

