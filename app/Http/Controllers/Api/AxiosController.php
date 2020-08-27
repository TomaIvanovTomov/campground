<?php

namespace App\Http\Controllers\Api;

use App\City;
use App\Country;
use App\State;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AxiosController extends Controller
{
    public function getCountries()
    {
        return Country::select("id as value", "name as label")->get()->toJson();
    }

    public function getStates($id)
    {
        return State::select("id as value", "name as label")->where("country_id", "=", $id)->get()->toJson();
    }

    public function getCities($id)
    {
        return City::select("id as value", "name as label")->where("state_id", "=", $id)->get()->toJson();
    }
}
