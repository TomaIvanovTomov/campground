<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\PaymentPolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentPolicyController extends Controller
{
   public function create(Request $request)
   {
       $data = $request->all();
       $validator = $this->validatePayment($request->all());
       if ($validator->fails()) {
           return response()->json([
               "message" => json_encode($validator->errors())
           ]);
       }

       $data['standard_rate'] = $data['standard_rate'] == true ? 1 : null;

       $pp = PaymentPolicy::create($data);

       if ($pp) {
           return response()->json([
               'message' => 'Record saved successfully.',
               'type' => 'success'
           ]);
       } else {
           return response()->json([
               'message' => 'Something went wrong. Please, try again.',
               'type' => 'error'
           ]);
       }

   }

   public function validatePayment($data)
   {
       return Validator::make($data, [
           'property_id' => ['required', 'integer'],
           'rate_name' => ['required', 'string', 'max:255'],
           'invoice_name' => ['required', 'string', 'max:255'],
           'deposit' => ['required', 'string', 'max:255'],
           'cancellation' => ['required', 'numeric'],
           'pet' => ['required', 'numeric'],
           'guest' => ['required', 'numeric'],
           'standard_rate' => ['required'],
       ]);
   }
}
