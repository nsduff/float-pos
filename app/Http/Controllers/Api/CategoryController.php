<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\Item;

class CategoryController extends Controller
{
    //

    public function categories()
    {
        $category = Category::orderBy('name', 'asc')->get();

        return $category;
    }

    public function items()
    {
        $items = Item::orderBy('name')->get();
        return $items;
    }
}
