<?php

namespace App\Http\Controllers;

use App\Models\Occupation;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getUsersAllData()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function getRolesAllData()
    {
        $roles = Role::all();
        return response()->json($roles);
    }
    public function getOccupationAllData()
    {
        $occupation = Occupation::all();
        return response()->json($occupation);
    }
    public function getUserPermissions($userId)
    {
        $permissions = Permission::where('user_id', $userId)->get();
        return response()->json($permissions);
    }


}
