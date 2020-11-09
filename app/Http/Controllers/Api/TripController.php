<?php

namespace App\Http\Controllers\Api;

use App\Trip;
use App\TripLeg;
use App\TripReview;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TripController extends Controller
{
    public function save(Request $request)
    {
        $legs = $request->all()['legs'];
        $trip_data = $request->all()['trip'];
        $validator = $this->validateTrip($trip_data);
        if ($validator->fails()) {
            response()->json([
                "message" => json_encode($validator->errors())
            ]);
        }

        $trip_data['start_date'] = explode('T', $trip_data['start_date'])[0];
        $trip_data['end_date'] = explode('T', $trip_data['end_date'])[0];

        if ($request->all()['trip']['id']) {
            Trip::where("id", $request->all()['trip']['id'])->update($trip_data);
            if ($legs) {
                foreach ($legs as $leg) {
                    $leg['start_date'] = explode('T', $leg['start_date'])[0];
                    $leg['end_date'] = explode('T', $leg['end_date'])[0];
                    TripLeg::where("id", $leg['id'])->update([
                        'destination' => $leg['place'],
                        'start_date' => $leg['start_date'],
                        'end_date' => $leg['end_date']
                    ]);
                }
            }
        } else {
            $trip = Trip::create($trip_data);
            if ($trip && $legs && !is_null($legs[0]['place'])) {
                foreach ($legs as $leg) {

                    $leg['trip_id'] = $trip->id;

                    $legsValidator = $this->validateLeg($leg);
                    if ($legsValidator->fails()) {
                        response()->json([
                            "message" => json_encode($legsValidator->errors())
                        ]);
                        break;
                    }

                    $leg['destination'] = $leg['place'];
                    $leg['start_date'] = $leg['startingDate'];
                    $leg['end_date'] = $leg['endingDate'];
                    unset($leg['place']);
                    unset($leg['startingDate']);
                    unset($leg['endingDate']);
                    $leg['start_date'] = explode('T', $leg['start_date'])[0];
                    $leg['end_date'] = explode('T', $leg['end_date'])[0];

                    TripLeg::create($leg);
                }
            }
        }
    }

    public function get($trip_id)
    {
        $trip = Trip::find($trip_id);
        $trip->legs = $trip->tripLegs;
        return json_encode($trip);
    }

    protected function validateTrip(array $data)
    {
        return Validator::make($data, [
            'start' => ['required', 'string', 'max:255'],
            'end' => ['required', 'string', 'max:255'],
            'start_date' => ['required', 'string'],
            'end_date' => ['required', 'string'],
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
        ]);
    }

    protected function validateLeg(array $data)
    {
        return Validator::make($data, [
            'trip_id' => ['required', 'integer'],
            'place' => ['required', 'string'],
            'startingDate' => ['required', 'string'],
            'endingDate' => ['required', 'string']
        ]);
    }

    public function getUserTrips($user_id)
    {
        $out = [];
        $trips = Trip::where("user_id", $user_id)->get();
        $user = User::find($user_id);
        if ($trips) {
            foreach ($trips as $k => $trip) {

                $out[$k] = [
                    'id' => $trip->id,
                    'user' => $user->first_name . " " . $user->last_name,
                    'title' => $trip->name,
                    'description' => $trip->description,
                    'startingPoint' => $trip->start,
                    'startingDate' => date("d.m.Y", strtotime($trip->start_date)),
                    'upcoming' => strtotime($trip->start_date) >= time(),
                    'bookingID' => "NF234234234",
                    'legs' => []
                ];
                if ($tripLegs = TripLeg::where('trip_id', $trip->id)->get()) {
                    foreach ($trip->tripLegs as $leg) {
                        $rating = TripReview::where("trip_leg_id", $leg->id)->avg("rating");
                        $out[$k]['legs'][] = [
                            'place' => $leg->destination,
                            'review' => round($rating, 1),
                            'address' => $leg->destination
                        ];
                    }
                }
            }
        }
        return json_encode($out);
    }

    public function delete(Request $request)
    {
        Trip::where("id", $request->all()['trip_id'])->delete();
    }
}
