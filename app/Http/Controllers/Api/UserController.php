<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        return $request->user();
    }

    public function updatePassword(Request $request)
    {
        if (auth()->user()->id == $request->id) {
            $this->passwordValidator($request->all())->validate();
            if (Hash::check($request->oldPassword, auth()->user()->password)) {
                $user = User::find($request->id);
                if ($user){
                    $user->update([
                        'password' => Hash::make($request->newPassword)
                    ]);
                    return $user;
                }
            }
        }
        return response()->json(['error' => 'You are not authorized for that action']);
    }

    protected function passwordValidator(array $data)
    {
        return Validator::make($data, [
            'id' => ['required'],
            'oldPassword' => ['required', 'string', 'min:6'],
            'newPassword' => ['required', 'string', 'min:6']
        ]);
    }
}
