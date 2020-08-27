<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Site;
use App\SiteType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SiteTypeController extends Controller
{
    public function save(Request $request)
    {
        $validator = $this->validateType($request->all());
        if ($validator->fails()) {
            return response()->json([
                "message" => json_encode($validator->errors())
            ]);
        }

        if ($s = SiteType::create($request->all())) {
            $code = 200;
            $message = "Site type created successfully.";
            $id = $s->id;
        } else {
            $code = 422;
            $message ="Something went wrong. Please, try again.";
            $id = 0;
        }

        return response()->json([
            'message' => $message,
            'id' => $id
        ], $code);

    }

    public function edit(Request $request)
    {
        $validator = $this->validateType($request->all());
        if ($validator->fails()) {
            return response()->json([
                "message" => json_encode($validator->errors())
            ]);
        }
        $data = $request->all();
        if (SiteType::where('id', $data['id'])->update([
            'title' => $data['title'],
            'price' => $data['price'],
            'rv' => $data['rv'],
            'pax' => $data['pax']
        ])) {
            $siteType = SiteType::select(["id", "title", "pax", "price", "rv"])->where("id", $data['id'])->get();
            $siteType->sites = Site::where("site_id", $data['id'])->get();
            return response()->json([
                'message' => "Site type successfully updated",
                'type' => 'success',
                'site' => $siteType,
                'sites' => $siteType->sites
            ], 200);
        } else {
            return response()->json([
                'message' => "Something went wrong. Please, try again.",
                'type' => 'error',
            ], 200);
        }
    }

    public function validateType(Array $data)
    {
        return Validator::make($data, [
            'property_id' => ['integer'],
            'title' => ['required', 'max:255'],
            'price' => ['required', 'numeric'],
            'pax' => ['required', 'integer'],
            'rv' => ['required', 'integer'],
        ]);
    }

    public function delete(Request $request)
    {
        if (SiteType::where("id", $request->all()['id'])->delete()) {
            return response()->json([
                'message' => "Site type successfully deleted.",
                'type' => 'success'
            ]);
        } else {
            return response()->json([
                'message' => "Something went wrong. Please, try again.",
                'type' => 'error'
            ]);
        }
    }

    public function getAll($property_id)
    {
        $types = SiteType::where("property_id", $property_id)->get();
        if ($types) {
            foreach ($types as $type) {
                $type->sites = Site::select([
                    'id',
                    'name',
                    'fifth_wheel as wheel',
                    'rv_length as siteRV',
                    'rate_per_night as priceNight',
                    'seven_discount as weekDiscount',
                    'thirty_discount as monthDiscount',
                    'class_a as classA',
                    'class_b as classB',
                    'class_c as classC',
                    'tent',
                    'popup',
                    'travel_trailer as travelTrailer',
                    'sales_tax as salesTax',
                    'state_tax as stateTax',
                    'country_tax as countryTax',
                    'max_occupancy as sitePax',
                ])
                ->where("site_id", $type->id)->get();
            }
        }
        return response()->json($types);
    }
}
