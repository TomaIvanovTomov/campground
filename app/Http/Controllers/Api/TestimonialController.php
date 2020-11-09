<?php

namespace App\Http\Controllers\Api;

use App\Testimonial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TestimonialController extends Controller
{
    public function getTestimonials()
    {
        return Testimonial::inRandomOrder()->limit(6)->get()->toJson();
    }

}
