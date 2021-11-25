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
        $category = Category::orderBy('name')->get();

        return $category;
    }

    public function storeCategories(Request $request)
    {
      
        $category = new Category;
        $category->name = $request->name;
        $category->save();
        return $category;
    }

    
    

    public function items()
    {
        $items = Item::orderBy('name')->get();
        return $items;
    }



     public function storeItems(Request $request)
    {
        $items = new Item;
        $items->name = $request->name;
        $items->price = $request->amount;
        $items->category_id = $request->category_id;
        $items->save();
        return $items;
    }

}
