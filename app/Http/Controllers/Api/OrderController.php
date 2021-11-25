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

        $item_comments = $request->item_comments;

        $items = [];
        foreach($request->items as $item_id) 
        {
            $items[$item_id] = [
                "item_comments" => null
            ];
        }
        foreach($item_comments as $comment) 
        {
            if ($comment["comments"]){
                $items[$comment["item_id"]]
                 = [
                     "item_comments" => trim(join("\n\n", $comment["comments"]))
                 ];
            }
        }
        // dd($items);
        $order = new Order;
        $order->table_name = $request->table_name;
        $order->user_id = Auth::id();
        $order->paid = false;
        $order->save();
        //connect orders and items_order
        $order->items()->attach($items);

        //ND -- COMMENTS DON'T POST. FIX LATER
        // $order->items()->attach($request->item_comments);
        return $order;
    }

}
