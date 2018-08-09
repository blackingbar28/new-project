<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Film;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function listFilm(Request $request)
    {
        $page = $request->input('page');
        $category = $request->input('category');
        $isExistsCategory = Category::where('slug', $category)->first();

        if (!$isExistsCategory) {
            return $this->responseError('', [], 404);
        }

        $columns = [
            'films.name',
            'films.image',
            'films.length',
            'films.resolution',
            'films.slug',
            'films.nation',
            'categories.slug as category',
        ];

        $films = Film::join('categories', 'categories.id', 'films.category_id')
            ->where('films.category_id', $isExistsCategory->id)
            ->orderBy('films.created_at', 'desc')
            ->paginate(6, $columns, 'page', $page);

        return $this->responseSuccess('', $films);
    }
}
