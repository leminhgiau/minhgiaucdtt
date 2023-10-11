<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up():void
    {
        Schema::create('db_menu', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('link');
            $table->unsignedInteger('table_id');
            $table->string('type');
            $table->timestamps();
            $table->unsignedInteger('create_by')->default(1);
            $table->unsignedInteger('update_by')->nullable();
            $table->unsignedTinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_menu');
        $table->id();
        $table->string("name");
        $table->string("link");
        $table->unsignedInteger('sort_order');
        $table->unsignedInteger('table_id');
        $table->unsignedInteger('parent_id');
        $table->string("type");
        $table->string("description");
        $table->unsignedInteger('created_by');
        $table->unsignedInteger('update_by')->nullable();
        $table->timestamps();
        $table->unsignedTinyInteger('status')->default(2);
}
};
