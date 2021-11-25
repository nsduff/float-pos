<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;


class OrderController extends Controller
{
    public function orders()
    {
        $orders = Order::with('items')->orderBy('created_at')->get();
        return $orders;
    }

    public function store(Request $request){


        $order = new Order;
        $order->table_name = $request->table_name;
        $order->user_id = 1;
        $order->save();
        //conect orders and items_order
        $order->items()->attach($request->items);
        return $order;
    }

}
