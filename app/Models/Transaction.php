<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Bill;
use App\Models\PaymentType;
use App\Models\User;

class Transaction extends Model
{
    use HasFactory;

    public function bill()
    {
        return $this->hasOne(Bill::class);
    }

    public function paymentType()
    {
        return $this->hasOne(PaymentType::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
