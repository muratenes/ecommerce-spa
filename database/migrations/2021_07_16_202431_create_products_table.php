<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->string('title', 90);
            $table->string('slug', 110);
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(1);
            $table->string('image', 100)->nullable();
            $table->json('tags')->nullable();
            $table->unsignedSmallInteger('qty')->default(1);

            // price columns
            $table->unsignedFloat('price')->nullable();
            $table->unsignedFloat('price_discount')->nullable();

            // Other columns
            $table->decimal('buying_price')->nullable();
            $table->string('spot', 255)->nullable();
            $table->string('code', 50)->nullable();
            $table->json('properties')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();

            // CARGO PRICE
            $table->unsignedFloat('cargo_price')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
