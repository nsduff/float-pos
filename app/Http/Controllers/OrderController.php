<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Item;

class OrderController extends Controller
{
    public function index()
    {

        $users = User::all();
        $items = Item::all();

        

        return view('order', compact('users', 'items'));
    }
}
