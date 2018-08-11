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
        $columns = [
            'films.name',
            'films.image',
            'films.length',
            'films.resolution',
            'films.slug',
            'films.nation',
            'categories.slug as category',
        ];

        $isExistsCategory = Category::where('slug', $category)->first();
        if (!$isExistsCategory) {
            return $this->responseError('', [], 404);
        }
        $films = Film::join('categories', 'categories.id', 'films.category_id')
            ->where('films.category_id', $isExistsCategory->id)
            ->orderBy('films.created_at', 'desc')
            ->paginate(6, $columns, 'page', $page);

        return $this->responseSuccess('', $films);
    }

    public function listHotVideoByCategory(Request $request)
    {
        $category = $request->input('category');
        $columns = [
            'films.name',
            'films.image',
            'films.length',
            'films.slug',
            'categories.slug as category',
        ];

        if ($category == 'all') {
            $films = Film::join('categories', 'categories.id', 'films.category_id')
                ->orderBy('films.created_at', 'desc')
                ->limit(10)
                ->take(10)
                ->get($columns);

            return $this->responseSuccess('', $films);
        }

        $isExistsCategory = Category::where('slug', $category)->first();
        $films = Film::join('categories', 'categories.id', 'films.category_id')
            ->where('films.category_id', $isExistsCategory->id)
            ->orderBy('films.created_at', 'desc')
            ->limit(10)
            ->take(10)
            ->get($columns);

        return $this->responseSuccess('', $films);
    }

    public function getFilm(Request $request)
    {
        $filmName = $request->only('name');
        $with['links'] = function ($query) {
            return $query->select([
               'links.link as file',
               'links.label',
               'links.film_id',
            ]);
        };
        $film = Film::with($with)->where('slug', $filmName)->first(['id', 'name', 'image']);
        if ($film->links->count()) {
            foreach ($film->links as $link) {
                unset($link->film_id);
            }
        }

        return $this->responseSuccess('', $film);
    }
}
