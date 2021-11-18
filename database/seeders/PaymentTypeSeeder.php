<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;


use App\Models\PaymentType;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('payment_types')->truncate();


        $payments = ["cash", "credit", "debit"];

        foreach ($payments as $payment) {
            $type = new PaymentType;
            $type->name = $payment;
            $type->save();
        }
    }
}
