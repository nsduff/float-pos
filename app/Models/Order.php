<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Item;
use App\Models\Bill;
use App\Models\User;

class Order extends Model
{
    use HasFactory;

    
    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function bill()
    {
        return $this->hasOne(Bill::class);
    }
    
}
