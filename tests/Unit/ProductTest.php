<?php

namespace Tests\Unit;


use App\Models\Category;
use App\Models\User;
use Database\Seeders\CategorySeeder;
use Database\Seeders\ProductSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;


    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_can_list_product()
    {
        $this->seed(UserSeeder::class);
        $this->seed(ProductSeeder::class);
        $this->seed(CategorySeeder::class);


        $user = User::first();
        $response = $this->actingAs($user)
            ->get('/api/panel/products');

        $response->assertStatus(200);
    }

    /**
     * A basic product create unit test example.
     *
     * @return void
     */
    public function test_can_list_products_by_category()
    {
        $category = Category::first();

        $response = $this
            ->actingAs($this->user)
            ->get("/api/panel/products/getProductsByCategory/" . $category->slug);

        $this->schemas['success']['data'] = array('products');


        $response->assertOk()
            ->assertJsonPath('status', true)
            ->assertJsonStructure($this->schemas['success']);
    }
}
