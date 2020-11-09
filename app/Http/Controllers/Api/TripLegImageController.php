<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\TripLeg;
use App\TripLegImage;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TripLegImageController extends Controller
{
    public function addImages(Request $request)
    {
        if ($request->all()['image']) {
            $path = Storage::disk("public")->put('leg_photos', $request->all()['image']);
            TripLegImage::create([
                'trip_leg_id' => $request->all()['leg_id'],
                'image' => $path
            ]);
        }
    }
}
