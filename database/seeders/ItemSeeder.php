<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

use App\Models\Item;

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

        $json = File::get('database/data/menu.json');

        $data = json_decode($json);


        // 18.11.21 FIGURE OUT HOW TO SEED 
        // NAMES AND CATEGORY_IDs
        
        foreach($data->items as $name) {

        $item = new Item;

        $item->name = $name;
        
        $item->price = random_int(20, 200);

        $item->save();

    }
    }
}