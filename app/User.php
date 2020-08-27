<?php

namespace App;


use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = ["first_name", "last_name", "email", "region", "phone", "password"];

    public function properties()
    {
        $this->hasMany(Property::class);
    }
}
