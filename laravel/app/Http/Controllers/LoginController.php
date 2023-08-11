<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SebastianBergmann\CodeCoverage\BranchAndPathCoverageNotSupportedException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password', 'role');

        $role = Role::find($credentials['role']);

        // Attempt login with the email and password
        if (Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']])) {
            $user = Auth::user();
            $token = $user->createToken('AuthToken')->accessToken;

            // Check if the user has the specified role
            if ($user->role_id === $role->id) {
                // Login successful for the specified role
                return response()->json([
                    'user' => $user,
                    'token' => $token,
                    'role' => $role,
                    'name' => $user->name,
                ], 200);

            } else {
                // Role mismatch, unauthorized access
                return response()->json(['error' => 'Unauthorized access'], 401);
            }
        } else {
            // Invalid credentials
            return response()->json(['error' => 'Invalid Credentials'], 401);
        }
    }

}
