<?php

namespace App\Http\Controllers\Api;

use App\Booking;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function save(Request $request)
    {
        $data = $request->all()['data'];
        $data['user_id'] = $request->all()['user_id'];
        var_dump($data);die;
        Booking::create($data);
    }
}
