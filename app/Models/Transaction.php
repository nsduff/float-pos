<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Bill;

class Transaction extends Model
{
    use HasFactory;

    public function bill()
    {
        return $this->hasOne(Bill::class);
    }
}
