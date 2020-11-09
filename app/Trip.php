<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $table = "trips";

    protected $fillable = [
        'user_id', 'start', 'end', 'start_date', 'end_date', 'name', 'description'
    ];

    public function tripLegs()
    {
        return $this->hasMany(TripLeg::class);
    }

}
