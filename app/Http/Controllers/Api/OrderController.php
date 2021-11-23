<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;


class OrderController extends Controller
{
    public function orders()
    {
        $orders = Order::with('items')->orderBy('created_at')->get();
        return $orders;
    }

    public function store(Request $request){
        // ensure that order has name and item(s)
         $this->validate($request, [
            'table_name' => 'required',
            'items' => 'required|array|min:1'
         ]);

    
        $order = new Order;
        $order->table_name = $request->table_name;
        $order->user_id = Auth::id();
        $order->save();
        //conect orders and items_order
        $order->items()->attach($request->items);
        return $order;
    }

}
