<?php

namespace App\Http\Controllers\Api;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->email = $request->email;
        $user->email_verified_at = $request->email_verified_at;
        $user->password = $request->password;
        $user->phone = $request->phone;
        $user->billing_address = $request->billing_address;
        $user->province = $request->province;
        $user->role = $request->role;
        $user->status = $request->status;

        $user->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     */
   

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        try {
            
            $user = User::findOrFail($id);
    
            $user->name = $request->input('name');
            $user->surname = $request->input('surname');
            $user->email = $request->input('email');
            $user->email_verified_at = $request->input('email_verified_at');
            $user->password = $request->input('password');
            $user->phone = $request->input('phone');
            $user->billing_address = $request->input('billing_address');
            $user->province = $request->input('province');
            $user->role = $request->input('role');
            $user->status = $request->input('status');
            
            $user->save();
    
            return $user;
        } catch (\Exception $e) {
            return response()->json(['error' => 'No se pudo actualizar la información del usuario'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $userr = User::destroy($id);
        return $user;
    }
}
