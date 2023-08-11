<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Permission extends Model
{
    use SoftDeletes, HasFactory;

    protected $table = 'user_permission';

    protected $fillable = [
        'user_id',
        'page_name',
        'is_view',
        'is_delete',
        'is_create',
        'is_edit',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }

}
