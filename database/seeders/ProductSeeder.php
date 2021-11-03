<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Generator $faker)
    {
        Product::factory(30)->create();
    }
}
