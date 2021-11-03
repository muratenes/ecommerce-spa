<?php

namespace Tests\Unit\Panel;


use App\Models\Category;
use Illuminate\Support\Str;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_can_create_category()
    {
        $data = [
            'title' => $title = $this->faker->word,
            'slug' => Str::slug($title),
            'short_description' => $this->faker->text(255),
            'image' => $this->faker->imageUrl,
        ];
        $category = Category::first();

        $response = $this->actingAs($this->user)
            ->put('/api/panel/categories/' . $category->id, $data);

        $response->assertOk()
            ->assertJsonPath('status', true)
            ->assertJsonStructure($this->schemas['success']);
    }
}
