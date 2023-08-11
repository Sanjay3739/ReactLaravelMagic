<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query');
        $rowsPerPage = $request->input('rowsPerPage');

        $permissions = Permission::select('id', 'name','description')
            ->where('name', 'LIKE', "%{$query}%")
            ->orderBy('id', 'desc');
        $permissions = $permissions->paginate($rowsPerPage);

        return response()->json($permissions);
    }
}
