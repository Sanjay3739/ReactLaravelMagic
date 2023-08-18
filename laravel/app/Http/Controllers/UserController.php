<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('query');
        $rowsPerPage = $request->input('rowsPerPage');

        $users = User::with('permissions', 'role')
            ->select('id', 'first_name', 'last_name', 'email', 'mobile_no', 'status', 'avatar', 'role_id')
            ->where('first_name', 'LIKE', "%{$query}%")
            ->orWhere('last_name', 'LIKE', "%{$query}%")
            ->orWhere('email', 'LIKE', "%{$query}%")
            ->orWhere('mobile_no', 'LIKE', "%{$query}%")
            ->paginate($rowsPerPage);

        return response()->json($users);
    }
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|unique:users',
            'password' => 'required|min:6|max:10',
            'status' => 'required',
            'avatar' => 'nullable',
            'mobile_no' => 'required|max:10|min:10',
            'role_id' => 'required',
            'is_view' => 'nullable',
            'is_create' => 'nullable',
            'is_delete' => 'nullable',
            'is_edit' => 'nullable',

        ]);

        $user = new User();
        $user->first_name = $validatedData['first_name'];
        $user->last_name = $validatedData['last_name'];
        $user->email = $validatedData['email'];
        $user->password = bcrypt($validatedData['password']);
        $user->status = $validatedData['status'];
        $user->role_id = $validatedData['role_id'];
        $user->mobile_no = $validatedData['mobile_no'];

        if ($request->hasFile('avatar')) {
            // $avatarPath = $request->file('avatar')->store('avatars', 'public');
            // $user->avatar = $avatarPath;
            $user->avatar = $request->file('avatar')->store('avatars', 'public');
        }
        $user->save();

        $permission = new Permission();
        $permission->user_id = $user->id;
        $permission->is_view = $validatedData['is_view'];
        $permission->is_create = $validatedData['is_create'];
        $permission->is_delete = $validatedData['is_delete'];
        $permission->is_edit = $validatedData['is_edit'];
        $permission->save();
        return response()->json(['message' => 'User created successfully'], 201);
    }


    public function show($id)
    {
        // Find the user with the given $id along with their role and permission data
        $user = User::with('permissions', 'role')->find($id);

        // Check if the user exists
        if (!$user) {
            // If the user is not found, return a 404 response with an error message
            return response()->json(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
        }

        // If the user is found, return the user data along with their role and permission data in JSON format with a 200 status code
        return response()->json($user, Response::HTTP_OK);
    }



    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        // Delete the user's avatar from storage if it exists
        if ($user->avatar) {
            Storage::delete('public/' . $user->avatar);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted successfully'], 200);
    }

    // public function update(Request $request, $id)
    // {
    //     // Find the user by ID
    //     $user = User::findOrFail($id);

    //     if (!$user) {
    //         return response()->json(['message' => 'User not found'], 404);
    //     }

    //     // Update user attributes
    //     $user->first_name = $request->input('first_name');
    //     $user->last_name = $request->input('last_name');
    //     $user->email = $request->input('email');
    //     $user->mobile_no = $request->input('mobile_no');
    //     $user->status = $request->input('status');
    //     $user->address = $request->input('address');
    //     $user->birthday = $request->input('birthday');
    //     $user->location = $request->input('location');
    //     $user->gender = $request->input('gender');
    //     $user->occupation = $request->input('occupation');
    //     $user->what_you_like = $request->input('what_you_like');

    //     // Handle password update if provided
    //     if ($request->has('password')) {
    //         $user->password = bcrypt($request->input('password'));
    //     }

    //     // Handle avatar upload if provided
    //     if ($request->hasFile('avatar')) {
    //         $user->avatar = $request->file('avatar')->store('avatars', 'public');

    //     }

    //     // Save the updated user
    //     $user->save();

    //     // Update user permissions
    //     $permissions = Permission::updateOrCreate(
    //         ['user_id' => $user->id],
    //         [
    //             'is_view' => $request->input('is_view'),
    //             'is_delete' => $request->input('is_delete'),
    //             'is_create' => $request->input('is_create'),
    //             'is_edit' => $request->input('is_edit'),
    //         ]
    //     );
    //     $permissions->save();
    //     return response()->json(['message' => 'User and permissions updated successfully']);
    // }
    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'mobile_no' => 'required|string|max:15',
            'status' => 'required|in:0,1',
            'address' => 'nullable|string|max:255',
            'birthday' => 'nullable|date',
            'location' => 'nullable|string|max:255',
            'gender' => 'nullable|string|in:Male,Female,Other,Not Specified',
            'occupation' => 'nullable|string|max:255',
            'what_you_like' => 'nullable|string|max:255',
            'password' => 'nullable|string|min:6',
            'avatar' => 'nullable|max:2048',
            'is_view' => 'nullable|boolean',
            'is_delete' => 'nullable|boolean',
            'is_create' => 'nullable|boolean',
            'is_edit' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Find the user by ID
        $user = User::findOrFail($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Update user attributes
        $user->first_name = $request->input('first_name');
        $user->last_name = $request->input('last_name');
        $user->email = $request->input('email');
        $user->mobile_no = $request->input('mobile_no');
        $user->status = $request->input('status');
        $user->address = $request->input('address');
        $user->birthday = $request->input('birthday');
        $user->location = $request->input('location');
        $user->gender = $request->input('gender');
        $user->occupation = $request->input('occupation');
        $user->what_you_like = $request->input('what_you_like');

        // Handle password update if provided
        if ($request->has('password')) {
            $user->password = bcrypt($request->input('password'));
        }

        // Handle avatar upload if provided
        if ($request->hasFile('avatar')) {
            $user->avatar = $request->file('avatar')->store('avatars', 'public');
        }

        // Save the updated user
        $user->save();

        // Update user permissions
        $permissions = Permission::updateOrCreate(
            ['user_id' => $user->id],
            [
                'is_view' => $request->input('is_view'),
                'is_delete' => $request->input('is_delete'),
                'is_create' => $request->input('is_create'),
                'is_edit' => $request->input('is_edit'),
            ]
        );
        $permissions->save();
        return response()->json(['message' => 'User and permissions updated successfully']);
    }


}
