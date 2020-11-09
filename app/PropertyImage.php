<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PropertyImage extends Model
{
    protected $table = "property_images";

    protected $fillable = ['property_id', 'image','created_at','updated_at'];
}
