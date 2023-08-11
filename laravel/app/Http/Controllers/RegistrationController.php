<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'mobile_no' => 'required|min:10|max:10',
            'role_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $user = User::create([

            'first_name' =>  $request->first_name,
            'last_name' =>  $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'mobile_no' =>  $request->mobile_no,
            'role_id' =>  $request->role_id,
        ]);
        return response()->json(['user' => $user], 201);
    }
}
