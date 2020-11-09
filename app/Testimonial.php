<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $table = "testimonials";

    protected $fillable = ['created_at', 'updated_at', 'review', 'image', 'name'];

}
