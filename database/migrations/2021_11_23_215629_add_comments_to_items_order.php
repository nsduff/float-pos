<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCommentsToItemsOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('items_order', function(Blueprint $table) {
            $table->string('item_comments')->nullable();
            $table->boolean('paid')->default(false);
    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('items_order', function(Blueprint $table) {
             $table->dropColumn('item_comments');
        });
    }
}
