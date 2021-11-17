<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Order;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
            $order = new Order;
            $order->table_nr = "first";
            $order->user_id = 1;
    }
}
