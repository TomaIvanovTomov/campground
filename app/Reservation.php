<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = ['traveler', 'site', 'start_date', 'end_date', 'booking_date', 'guests', 'price', 'commission'];

    protected $table = "reservations";
}
