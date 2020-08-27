<?php

namespace App\Http\Controllers\Api;

use App\Property;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function saveInformation(Request $request)
    {
        $validator = $this->validateInformation($request->all());
        if ($validator->fails()) {
            response()->json([
                "message" => json_encode($validator->errors())
            ]);
        }
        $property = Property::create($request->all());
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

    public function saveTaxes(Request $request)
    {
        $validator = $this->validateTaxes($request->all());
        if ($validator->fails()) {
            response()->json([
                "message" => json_encode($validator->errors())
            ]);
        }
        Property::where("id", $request->property_id)->update([
            'sales_tax_percentage' => $request->sales_tax_percentage,
            'sales_tax' => $request->sales_tax,
            'country_tax_percentage' => $request->country_tax_percentage,
            'country_tax' => $request->country_tax,
            'other_tax_percentage' => $request->other_tax_percentage,
            'other_tax' => $request->other_tax,
            'state_tax_percentage' => $request->state_tax_percentage,
            'state_tax' => $request->state_tax,
        ]);
        return response()->json([
            'message' => "Property updated successfully."
        ], 200);
    }

    protected function validateTaxes(array $data)
    {
        return Validator::make($data, [
            'property_id' => ['required'],
            'sales_tax_percentage' => ['integer'],
            'sales_tax' => ['numeric'],
            'country_tax_percentage' => ['integer'],
            'country_tax' => ['numeric'],
            'other_tax_percentage' => ['integer'],
            'other_tax' => ['numeric'],
            'state_tax_percentage' => ['integer'],
            'state_tax' => ['numeric'],
        ]);
    }

    public function get($id)
    {
        var_dump(4444444444444);die;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function destroy(Property $property)
    {
        //
    }
}
