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

    public function bill()
    {
        return $this->hasMany(Bill::class);
    }

    public function items()
    {
        return $this->belongsToMany(Item::class, "items_order");
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}
