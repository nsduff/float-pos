<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

use App\Models\Item;

use App\Models\Category;

use File;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {


        DB::table('items')->truncate();
        DB::table('categories')->truncate();


        $json = File::get('database/data/menu.json');

        $data = json_decode($json);


        // 18.11.21 FIGURE OUT HOW TO SEED 
        // NAMES AND CATEGORY_IDs
        
        foreach($data as $d) {
            $category = new Category;
            $category->name = $d->category;
            $category->save();

            foreach($d->items as $i) {
            $item = new Item;
            $item->name = $i;
            $item->category_id = $category->id;
            $item->price = random_int(20, 200);
            $item->save(); 
            }
        }

        // $d->categories = $category;




        // $item = new Item;

        // $item->name = $name;
        
        // $item->price = random_int(20, 200);

        // $item->save();

    }
    
}