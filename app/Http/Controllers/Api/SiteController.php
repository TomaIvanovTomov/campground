<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Site;
use App\SiteType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SiteController extends Controller
{
    public function save(Request $request)
    {
        $validator = $this->validateSite($request->all());
        if ($validator->fails()) {
            return response()->json([
                "message" => $validator->errors(),
                'type' => 'error'
            ]);
        }

        $error = false;
        $sites = json_decode($request->all()['sites']);
        foreach ($sites as $site) {
            if (!Site::create([
                'name' => $site->name,
                'site_id' => $request->all()['site_id']
            ])) {
                $error = true;
                break;
            }
        }

        if (!$error) {
            $code = 200;
            $message = "Sites created successfully.";
            $sites = Site::where("site_id", $request->all()['site_id'])->get()->toJson();
            $type = 'success';
        } else {
            $code = 422;
            $message ="Something went wrong. Please, try again.";
            $sites = [];
            $type = 'error';
        }

        return response()->json([
            'message' => $message,
            'sites' => $sites,
            'type' => $type
        ], $code);

    }

    public function edit(Request $request)
    {
        $data = $request->all()['data'];
        $update = Site::where("id", $request->all()['id'])->update([
            'name' => $data['name'],
            'fifth_wheel' => $data['wheel'],
            'rv_length' => $data['siteRV'],
            'max_occupancy' => $data['sitePax'],
            'rate_per_night' => $data['priceNight'],
            'seven_discount' => $data['weekDiscount'],
            'thirty_discount' => $data['monthDiscount'],
            'class_a' => $data['classA'],
            'class_b' => $data['classB'],
            'class_c' => $data['classC'],
            'popup' => $data['popup'],
            'tent' => $data['tent'],
            'travel_trailer' => $data['travelTrailer'],
            'sales_tax' => $data['salesTax'],
            'state_tax' => $data['stateTax'],
            'country_tax' => $data['countryTax'],
            'other_tax' => $data['otherTax'],
            'toy_hauler' => $data['toy'],
        ]);

        if ($update) {
            return response()->json([
                'site' => Site::where("id", $request->all()['id'])->get(),
                'type' => "success",
                'message' => "Site updated successfully."
            ]);
        } else {
            return response()->json([
                'type' => "error",
                'message' => "Something went wrong. Please, try again."
            ]);
        }

    }

    public function delete(Request $request)
    {
        if (Site::where("id", $request->all()['id'])->delete()) {
            return response()->json([
                'type' => 'success',
                'message' => 'Site successfully deleted.'
            ]);
        } else {
            return response()->json([
                'type' => 'error',
                'message' => 'Something went wrong. Please, try again.'
            ]);
        }
    }

    public function validateSite(Array $data)
    {
        return Validator::make($data, [
            'site_id' => ['required', 'integer'],
            'count' => 'integer|between:1,5',
            'sites' => ['required']
        ]);
    }
}
