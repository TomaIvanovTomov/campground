<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\TestMail;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();
        $user = $this->create($request->all());
        $this->guard()->login($user);
        return response()->json([
            'user' => $user,
            'message' => 'registration successful'
        ], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            auth()->user();
            $user = Auth::user();
            $userFields = new \stdClass();
            $userFields->id = $user->id;
            $userFields->first_name = $user->first_name;
            $userFields->last_name = $user->last_name;
            $userFields->email = $user->email;
            $userFields->phone = $user->phone;
            $userFields->region = $user->region;
            return response()->json([
                'user' => $userFields,
                'message' => 'Login successful'], 200);
        } else {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged Out'], 200);
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'region' => $data['region'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'region' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:15'],
            'password' => ['required', 'string', 'min:6'],
        ]);
    }

    public function recover(Request $request)
    {
        $validator = $this->validateEmail($request->all());
        if ($validator->fails()) {
            return response()->json([
               'message' => $validator->errors()
            ]);
        }

        $details = [
            'title' => "my title",
            'body' => 'this is body'
        ];

        $details['new_pass'] = substr(str_shuffle(str_repeat("0123456789abcdefghijklmnopqrstuvwxyz", 5)), 0, 5);
        Mail::to($request->all()['email'])->send(new TestMail($details));

        if (!Mail::failures()) {

            User::where("email", $request->all()['email'])->update([
                "password" => Hash::make($details['new_pass'])
            ]);

            return response()->json([
                'message' => 'Check your email for your new password.',
                'type' => 'success',
            ]);
        } else {
            return response()->json([
                'message' => 'Something went wrong. Please, try again.',
                'type' => 'error'
            ]);
        }
    }

    public function validateEmail($data)
    {
        return Validator::make($data, [
            'email' => ['required', 'email']
        ]);
    }

    protected function guard()
    {
        return Auth::guard('web');
    }
}
