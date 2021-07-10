<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = json_decode(file_get_contents(database_path('seeders/files/categories.json'), true), true);

        foreach ($categories as $category) {
            $parentCategory = Category::updateOrCreate([
                'title' => $category['title'],
            ],[
                'slug'  => Str::slug($category['title']),
            ]);
//            if (isset($category['children'])) {
//                foreach ($category['children'] as $child) {
//                    $parent->sub_categories()->create(array_merge($child, [
//                        'slug' => Str::slug("{$parent->title} {$child['title']}"),
//                    ]));
//                }
//            }
        }
    }
}
