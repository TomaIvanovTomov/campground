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

    public function updateUser(Request $request)
    {
        $data = $request->all()['user'];
        $user = User::find($data['id']);
        if (Hash::check($data['old_password'], $user->password)) {
            $user->password = Hash::make($data['new_password']);
            $user->first_name = $data['first_name'];
            $user->last_name = $data['last_name'];
            $user->phone = $data['phone'];
            $user->region = $data['region'];
            $user->save();
            return json_encode([
                'user' => $user,
                'message' => "Data updated successfully!"
            ]);
        } else {
            return json_encode([
                'user' => "",
                'message' => "Data updated successfully!"
            ]);
        }
    }

}
