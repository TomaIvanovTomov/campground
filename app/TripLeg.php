<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TripLeg extends Model
{
    protected $table = "trip_legs";

    protected $fillable = ['trip_id', 'destination', 'start_date', 'end_date', 'image'];

    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }

    public function images()
    {
        return $this->hasMany(TripLegImage::class);
    }

    public function review()
    {
        return $this->hasOne(Testimonial::class);
    }
}
