<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\Item;

class CategoryController extends Controller
{
    //

    public function index()
    {
        $category = Category::all();

        return $category;
    }

    // public function show()
    // {
    //     $item = Item::all();
    //     return $item;
    // }
}
