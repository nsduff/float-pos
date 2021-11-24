<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Bill;
use App\Models\Category;
use App\Models\Order;


class Item extends Model
{
    use HasFactory;


    public function bill()
    {
        return $this->belongsTo(Bill::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function order()
    {
        return $this->belongsToMany(Order::class, "items_order");
    }
}
