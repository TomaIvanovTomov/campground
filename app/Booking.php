<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = "bookings";

    protected $fillable = [
        'user_id',
        "title",
        "first_name",
        "last_name",
        "email",
        "phone",
        "address1",
        "address2",
        "city",
        "state",
        "zip",
        "rv_type",
        "rv_length",
        "rv_slides",
        "guest_first_name",
        "guest_last_name",
        "request"
    ];
}
