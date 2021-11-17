<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Item;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $snacks = ["fries", "nuts", "chlebicek", "mozarella sticks", "nachos", "hot dog"];

        foreach($snacks as $snack) {
        
        $item = new Item;

        $item->name = $snack;

        $item->price = random_int(5, 20);

        $item->category_id = 1;

        $item->save();
    }
    }
}