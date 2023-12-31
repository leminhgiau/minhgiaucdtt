<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     *php artisan migrate
     * @return void
     */
    public function up():void
    {
        Schema::create('db_category',function(Blueprint $table){
            $table->id();
            $table->string("name");
            $table->string("slug");
            $table->unsignedInteger('sort_order')->default(1);
            $table->unsignedInteger('parent_id')->default(0);
            $table->string("description");
            $table->string("image")->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('update_by')->nullable();
            $table->timestamps();
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
        Schema::dropIfExists('db_category');
    }
};
