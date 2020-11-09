<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TripReview extends Model
{
    protected $table = "trip_reviews";

    protected $fillable = ['trip_leg_id', 'name', 'title', 'description', 'rating', 'created_at', 'updated_at'];

    public function tripLeg()
    {
        return $this->belongsTo(TripLeg::class);
    }
}
