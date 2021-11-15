<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Order;

class OrderController extends Controller
{
    //

    public function index()
    {
        return(
            [
                "Order1",
                "Order2",
                "Order3"
            ]
            );
    }
}
