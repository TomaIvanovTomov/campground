<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Accounting extends Model
{
    protected $fillable = ['invoice', 'start_date', 'end_date', 'issue_date', 'due_date', 'amount', 'status'];

    protected $table = "accountings";
}
