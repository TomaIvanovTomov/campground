<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    protected $table = "sites";

    protected $fillable = ['name', 'site_type_id', 'number', 'rv_length', 'description', 'fifth_wheel',
        'class_a', 'class_b', 'class_c', 'popup', 'tent', 'toy_hauler', 'travel_trailer', 'max_occupancy',
        'rate_per_night', 'seven_discount', 'thirty_discount', 'sales_tax', 'state_tax', 'country_tax', 'other_tax', 'active'];

    public function siteType()
    {
        return $this->belongsTo(SiteType::class);
    }
}
