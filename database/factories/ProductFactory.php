<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        Product::truncate();
        $title = $this->faker->sentence;

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->realText,
            'is_active' => true,
            'image' => $this->faker->imageUrl,
            'tags' => $this->faker->words,
            'qty' => $this->faker->numberBetween(2,1000),
            'price' => $price = $this->faker->randomFloat(2, 20, 1000),
            'price_discount' => $this->faker->randomFloat(2, 5, $price),
            'buying_price' => $this->faker->randomFloat(2, 0, $price - 15),
            'spot' => $this->faker->text(255),
            'code' => $this->faker->numberBetween(10000,99999),
        ];
    }
}
