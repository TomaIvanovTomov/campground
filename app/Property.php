<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    public static $saveRules = [
        "name" => ['required|string|max:255'],
        "image" => ['required|string|max:255'],
        "email" => ['required|unique:properties|string|max:255'],
        "website" => ['string|max:255'],
        "fax" => ['string|max:255'],
        "phone" => ['required|string|max:255'],
        "check_in" => ['required|string|max:255'],
        "check_out" => ['required|string|max:255'],
        "address" => ['required|string|max:255'],
        "zip" => ['required|string|max:255'],
        "lat" => ['required|string|max:255'],
        "long" => ['required|string|max:255'],
        "sales_tax_percentage" => ['required|numeric'],
        "sales_tax" => ['required|numeric'],
        "country_tax_percentage" => ['required|numeric'],
        "country_tax" => ['required|numeric'],
        "state_tax_percentage" => ['required|numeric'],
        "state_tax" => ['required|numeric'],
        "other_tax_percentage" => ['required|numeric'],
        "other_tax" => ['required|numeric'],
    ];

    protected $fillable = [
        "name", "image", "email", "website", "fax", "phone", "check_in", "check_out",
        "address", "country", "state", "city", "zip", "lat", "long", "sales_tax_percentage",
        "sales_tax", "country_tax_percentage", "country_tax", "state_tax_percentage", "state_tax",
        "other_tax_percentage", "other_tax", "user_id", "step"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
