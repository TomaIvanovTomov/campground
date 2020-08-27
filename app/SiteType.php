<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SiteType extends Model
{
    protected $table = "site_types";

    protected $fillable = ["sites", "title", "rv", "property_id", "pax", "price", "sites"];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function getSitesAttribute()
    {
        return $this->attributes['sites'];
    }

    public function setSitesAttribute($value)
    {
        $this->attributes['sites'] = $value;
    }
}
