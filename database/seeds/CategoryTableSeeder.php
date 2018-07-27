<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Action',
                'slug' => 'action',
            ],
            [
                'name' => 'Adventure',
                'slug' => 'adventure',
            ],
            [
                'name' => 'Comedy',
                'slug' => 'comedy',
            ],
            [
                'name' => 'Sci-Fi',
                'slug' => 'science-fiction',
            ],
            [
                'name' => 'Romance',
                'slug' => 'romance',
            ],
            [
                'name' => 'Horror',
                'slug' => 'horror',
            ],
            [
                'name' => 'Supernatural',
                'slug' => 'super-natural',
            ],
            [
                'name' => 'Mystery',
                'slug' => 'mystery-natural',
            ],
        ];

        DB::table('categories')->insert($categories);
    }
}
