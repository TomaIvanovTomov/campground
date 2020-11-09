<?php

namespace App\Http\Controllers\Api;

use App\Testimonial;
use App\Trip;
use App\TripLeg;
use App\TripReview;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TripLegController extends Controller
{
    public function getTripAndLegs($trip_id)
    {
        $trip = Trip::find($trip_id);
        $user = User::find($trip->user_id);
        $legs = TripLeg::where("trip_id", $trip_id)->get();
        $out = [
            'reviewModal' => false,
            'id' => $trip_id,
            'user' => "$user->first_name $user->last_name",
            'description' => $trip->description,
            'startingPoint' => $trip->start,
            'startingDate' => date("d.m.Y", strtotime($trip->start_date)),
            'upcoming' => true,
            "bookingID" => 'NF234234234',
            'legs' => [],
            'title' =>$trip->name
        ];

        if ($legs) {
            foreach ($legs as $leg) {
                $review = TripReview::where("trip_leg_id", $leg->id)->first();
                $images = [];
                if ($leg->images) {
                    foreach ($leg->images as $image) {
                        $images[] = asset("storage/$image->image");
                    }
                }
                $out['legs'][] = [
                    'id' => $leg->id,
                    'place' => $leg->destination,
                    'review' => $review ? $review->rating : "",
                    'reviewDescription' => "",
                    'description' => $review ? $review->description : "",
                    'address' => $trip->start,
                    'images' => $images
                ];
            }
        }
        return json_encode($out);
    }

    public function setReview(Request $request)
    {
        TripReview::create([
            'trip_leg_id' => $request->all()['leg_id'],
            'description' => $request->all()['description'],
            'rating' => $request->all()['rating'],
            'name' => $request->all()['name'],
        ]);
    }
}
