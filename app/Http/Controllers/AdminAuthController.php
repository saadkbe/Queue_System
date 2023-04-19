<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $admin = Auth::guard('admin')->attempt($credentials);

        if ($admin) {
            return response()->json(['message' => 'Successfully logged in']);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
}
