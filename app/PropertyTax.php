<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PropertyTax extends Model
{
    protected $table = "property_taxes";
    protected $fillable = ['property_id', 'name', 'price'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
