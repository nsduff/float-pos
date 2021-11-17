<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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

        $payments = ["cash", "credit", "debit"];

        foreach ($payment as $payment) {
            $type = new PaymentType;
            $type->name = $pay;
            $type->save();
        }
    }
}
