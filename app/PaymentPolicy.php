<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentPolicy extends Model
{
    protected $table = "payments_policies";

    protected $fillable = ['property_id', 'rate_name', 'invoice_name', 'deposit', 'cancellation', 'pet', 'guest', 'standard_rate'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
