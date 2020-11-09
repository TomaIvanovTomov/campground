<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TripLegImage extends Model
{
    protected $table = "legs_images";

    protected $fillable = ['image', 'trip_leg_id', 'created_at', 'update_at'];

    public function tripLeg()
    {
        return $this->belongsTo(TripLeg::class);
    }
}
