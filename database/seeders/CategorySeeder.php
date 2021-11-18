<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;


use App\Models\Category;

use File;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();

        $json = File::get('database/data/menu.json');

        $data = json_decode($json);

        

        foreach($data as $item) {
        
        $category = new Category;

        $category->name = $item->category;

        $category->save();
    }
}
}