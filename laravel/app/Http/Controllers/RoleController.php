<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query');
        $rowsPerPage = $request->input('rowsPerPage');

        $roles = Role::select('id', 'name', 'status')
            ->where('name', 'LIKE', "%{$query}%")
            ->orderBy('id', 'desc');
        $roles = $roles->paginate($rowsPerPage);
        return response()->json($roles);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'status' => 'required',

        ]);

        $roles = new Role();
        $roles->name = $validatedData['name'];
        $roles->status = $validatedData['status'];


        $roles->save();
        return response()->json(['message' => 'Role created successfully'], 201);
    }

    public function destroy($id)
    {
        $roles = Role::find($id);

        if (!$roles) {
            return response()->json(['message' => 'Role not found'], 404);
        }
        $roles->delete();
        return response()->json(['message' => 'Role deleted successfully'], 200);
    }

    public function show($id)
    {
        $roles = Role::find($id);
        if (!$roles) {
            return response()->json(['message' => 'Role not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($roles, Response::HTTP_OK);
    }



    public function update(Request $request, $id)
    {
        $roles = Role::find($id);

        if (!$roles) {
            return response()->json(['message' => 'Role not found'], 404);
        }
        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'status' => 'required|boolean',
        ]);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $data = $request->only([
            'name',
            'status',
        ]);

        $roles->update($data);

        return response()->json(['message' => 'Role profile updated successfully']);
    }
}
