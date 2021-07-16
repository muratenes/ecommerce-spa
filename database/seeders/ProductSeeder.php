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
        for ($i = 0; $i < 40; $i++) {
            $productName = $faker->sentence(random_int(2, 4));
            $price = random_int(10, 130);
            $category = Category::inRandomOrder()->first();

            $slug = \Illuminate\Support\Str::slug($productName);
            $imageName = $slug . '.jpg';
            Storage::put('public/products/' . $imageName, file_get_contents(
                'https://source.unsplash.com/random/400x600?sig=incrementingIdentifie'
            ));

            $product = Product::create([
                'title' => $productName,
                'slug' => $slug,
                'description' => $faker->sentence(100),
                'price' => $price, //$faker->randomFloat(2, 10, 100),
                'image' => $imageName,
                'qty' => random_int(0, 25),
                'category_id' => $category->id,
            ]);
        }
    }
}
