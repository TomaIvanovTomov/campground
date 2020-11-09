<?php

namespace App\Http\Controllers\Api;

use App\City;
use App\Country;
use App\PaymentPolicy;
use App\Property;
use App\PropertyImage;
use App\PropertyTax;
use App\SiteType;
use App\State;
use App\Site;
use App\TripReview;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Framework\Constraint\Count;
use stdClass;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    public function saveInformation(Request $request)
    {
        $validator = $this->validateInformation($request->all()['property']);
        if ($validator->fails()) {
            response()->json([
                "message" => json_encode($validator->errors())
            ]);
        }

        if ($request->all()['property_id']) {
            Property::where("id", $request->all()['property_id'])
                ->update($request->all()['property']);
            $property = Property::where("id", $request->all()['property_id'])->first();
        } else {
            $property = Property::create($request->all()['property']);
        }

        return response()->json([
            "id" => $property->id
        ], 200);
    }

    protected function validateInformation(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'website' => ['string', 'max:255'],
            'phone' => ['required', 'string'],
            'fax' => ['required', 'string'],
            'check_in' => ['required', 'string'],
            'check_out' => ['required', 'string'],
            'country' => ['required', 'integer'],
            'state' => ['required', 'integer'],
            'city' => ['required', 'integer'],
            'zip' => ['required', 'string'],
            'lat' => ['required', 'string', 'max:255'],
            'long' => ['required', 'string', 'max:255'],
            'user_id' => ['required', 'integer'],
        ]);
    }

    public function getUserProperties($userId)
    {
        $props = Property::where("user_id", $userId)->get();

        foreach ($props as $p) {
            $p->policies = PaymentPolicy::where("property_id", $p->id)->first();
            $p->sites = SiteType::where("property_id", $p->id)->get();
            foreach ($p->sites as $st) {
                $st->sites = Site::where("site_type_id", $st->id)->get();
            }
        }

        return ["properties" => $props];
    }

    public function saveTaxes(Request $request)
    {
        $taxes = $request->all()['taxes'];

        if ($taxes) {
            foreach ($taxes as $tax) {
                if (PropertyTax::where(
                    [
                        'property_id' => $request->all()['property'],
                        'name' => $tax['name'],
                        'price' => $tax['value'],
                    ]
                )->first()) {
                    continue;
                }
                PropertyTax::create([
                    "property_id" => $request->all()['property'],
                    "name" => $tax['name'],
                    'price' => $tax['value']
                ]);
            }
        }

        return response()->json([
            'message' => "Property updated successfully."
        ], 200);
    }

    public function getTopProperties()
    {
        $properties = Property::inRandomOrder()->limit(3)->get();
        $props = [];
        foreach ($properties as $p) {
            $country = Country::select("name")->where("id", $p->country)->first();
            $city = City::select("name")->where("id", $p->city)->first();
            $p->country = $country->name;
            $p->city = $city->name;
            $tax = PropertyTax::all()->first();
            $image = PropertyImage::where("property_id", $p->id)->first();
            if ($tax) {
                $p->rate_name = $tax->name;
                $p->price = 3 * (float)$tax->price;
                $p->price .= "$";
                $p->image = asset('storage/' . $image->image);
            }
            $props[] = $p;
        }
        return response()->json([
            'props' => $props
        ]);
    }

    public function getSingle($id)
    {
        $prop = Property::where("id", $id)->first();
        $review = 4;
        $description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dignissim lorem. Pellentesque sagittis consequat porta. Sed finibus tellus in dictum ultrices. Nulla lobortis urna non finibus dapibus. Nunc tristique justo a tortor blandit finibus non nec quam. Phasellus porttitor, massa id malesuada dictum, sapien arcu vulputate libero, vitae efficitur mauris nulla vitae nisl. Sed pharetra ultricies ex, quis imperdiet diam porta ac. Nunc finibus mi nunc. Nunc tincidunt, augue sed lobortis tempor, ipsum metus maximus sapien, a condimentum dolor quam a felis.";
        $siteTypes = SiteType::where("property_id", $id)->get();
        $siteTypesInfo = [];
        if ($siteTypes) {
            foreach ($siteTypes as $siteType) {
                $sites = Site::where("site_type_id", $siteType->id)->get();
                $sitesInfo = [];
                if ($sites) {
                    foreach ($sites as $site) {
                        $sitesInfo[] = [
                            'valuePerNight' => $siteType->price,
                            'name' => $site->name,
                            'description' => 'Cancellation Charges',
                            'charges' => 0,
                            'occupants' => $site->max_occupancy,
                            "sitesNames" => [
                                ["value" => 'Site 1', 'label' => 'Site 1'],
                                ["value" => 'Site 2', 'label' => 'Site 2'],
                                ["value" => 'Site 3', 'label' => 'Site 3']
                            ]
                        ];
                    }
                }
                $siteTypesInfo[] = [
                    'title' => $siteType->title,
                    'sites' => $sitesInfo
                ];
            }
        }

        $siteT = SiteType::where("property_id", $id)->first();
        $date = date("d.m.Y", time()) . " - " . date("d.m.Y", time() + 86400);

        $images = PropertyImage::where("property_id", $id)->get();
        $imagesOut = [];
        if ($images) {
            foreach ($images as $image) {
                $imagesOut[] = asset("storage/".$image->image);
            }
        }

        return json_encode([
            'property' => [
                'id' => $prop->id,
                'name' => $prop->title,
                'review' => $review,
                'address' => $prop->address,
                'description' => $description,
                "checkIn" => $prop->check_in,
                "checkOut" => $prop->check_out,
                "policies" => [
                    "checkIn" => $prop->check_in,
                    "checkOut" => $prop->check_out,
                    "minimumAge" => 18,
                    "parking" => [
                        'Paid private parking available on-site.',
                        'The carges are $120 per day.',
                        'Reservation: Reservation needed.'
                    ],
                    "cancellation" => 'Cancellation and prepayment policies vary according to site type. Please check the site conditions when selecting your site above.',
                    "paymentDescription" => 'Above cards are accepted and phone number and address are required.'
                ],
                "siteTypes" => $siteTypesInfo
            ],
            'bookInfo' => [
                'price' => $siteT->price,
                'title' => $siteT->title,
                'date' => $date,
                'guests' => 2
            ],
            'images' => $imagesOut
        ]);
    }

    public function getSingleBooking($id)
    {
        $prop = Property::where("id", $id)->first();
        $siteT = SiteType::where("property_id", $id)->first();
        $date = date("d.m.Y", time()) . " - " . date("d.m.Y", time() + 86400);

        return json_encode([
            'property' => [
                'id' => $id,
                'title' => $prop->name,
                'review' => 4,
                'bookable' => true,
                'location' => $prop->address,
                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dignissim lorem. Pellentesque sagittis consequat porta. Sed finibus tellus in dictum ultrices. Nulla lobortis urna non finibus dapibus. Nunc tristique justo a tortor blandit finibus non nec quam. Phasellus porttitor, massa id malesuada dictum, sapien arcu vulputate libero, vitae efficitur mauris nulla vitae nisl. Sed pharetra ultricies ex, quis imperdiet diam porta ac. Nunc finibus mi nunc. Nunc tincidunt, augue sed lobortis tempor, ipsum metus maximus sapien, a condimentum dolor quam a felis."
            ],
            'bookInfo' => [
                'price' => $siteT->price,
                'title' => $siteT->title,
                'date' => $date,
                'guests' => 2
            ],
        ]);
    }

    public function get($id)
    {
        $prop = Property::where('id', $id)->first();
        $country = Country::where("id", $prop->country)->first();
        $state = State::where("id", $prop->state)->first();
        $city = City::where("id", $prop->city)->first();
        $taxes = PropertyTax::select("name", "price as value")->where("property_id", $id)->get();

        return [
            'property' => $prop,
            'country' => $country,
            'state' => $state,
            'city' => $city,
            'taxes' => $taxes,
        ];
    }

    public function getAll()
    {
        $out = [];
        $properties = Property::all();
        if ($properties) {
            foreach ($properties as $property) {
                $image = PropertyImage::where("property_id", $property->id)->first();
                $count_reviews = count($property->reviews);
                $country = Country::where("id", $property->country)->first();
                $city = City::where("id", $property->city)->first();
                $rating = TripReview::where("property_id", $property->id)->avg('rating');
                $excellents = TripReview::where(["property_id" => $property->id, 'rating' => 5])->count();
                $obj = new stdClass();
                $obj->id = $property->id;
                $obj->title = $property->name;
                $obj->bookable = true;
                $obj->location = "{$country->name}, {$city->name}";
                $obj->reviews = $count_reviews;
                $obj->review = $rating;
                $obj->excellents = $excellents;
                $obj->image = asset("storage/$image->image");
                $out[] = $obj;
            }
        }
        return json_encode($out);
    }
}
