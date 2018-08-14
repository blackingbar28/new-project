<?php

namespace App\Http\Controllers;

use App\Models\Actor;
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
            'films.view_number',
            'categories.slug as category',
        ];

        $isExistsCategory = Category::where('slug', $category)->first();
        if (!$isExistsCategory && $category != 'all') {
            return $this->responseError('', [], 404);
        }

        $films = Film::join('categories', 'categories.id', 'films.category_id');
        if ($isExistsCategory) {
            $films = $films->where('films.category_id', $isExistsCategory->id);
        }

        $films = $films->orderBy('films.created_at', 'desc')
            ->paginate(6, $columns, 'page', $page);

        return $this->responseSuccess('', $films);
    }

    public function listHotVideoByCategory(Request $request)
    {
        $category = $request->input('category');
        $currentFilm = $request->input('current_film') ?? 'none';
        $columns = [
            'films.name',
            'films.image',
            'films.length',
            'films.slug',
            'films.view_number',
            'categories.slug as category',
        ];
        $isExistsCategory = Category::where('slug', $category)->first();

        $films = Film::join('categories', 'categories.id', 'films.category_id');

        if ($isExistsCategory) {
            $films = $films->whereNotIn('films.slug', [$currentFilm])
                ->where('films.category_id', $isExistsCategory->id);
        }

        $films = $films->orderBy('films.view_number', 'desc')
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

        $film = Film::with($with)->where('slug', $filmName)->first(['id', 'name', 'image', 'view_number']);
        if (!$film) {
            return $this->responseError('', [], 404);
        }
        $film->view_number = $film->view_number + 1;
        $film->save();
        if ($film->links->count()) {
            foreach ($film->links as $link) {
                unset($link->film_id);
            }
        }
        $film->actors = $film->actors();

        return $this->responseSuccess('', $film);
    }

    public function getActors()
    {
        $columns = [
            'name',
            'avatar',
            'nation',
            'born_date',
            'slug',
        ];

        $actors = Actor::orderBy('created_at', 'desc')->get($columns);
        return $this->responseSuccess('', $actors);
    }

    public function getFilmByActor(Request $request)
    {
        $actorInput = $request->input('actor');
        $actor = Actor::where('slug', $actorInput)->first(['id', 'name', 'avatar', 'nation', 'slug']);
        if (!$actor) {
            return $this->responseError('', [], 404);
        }

        $columns = [
            'films.name',
            'films.image',
            'films.length',
            'films.slug',
            'categories.slug as category',
        ];

        $films = Film::join('actor_film', 'actor_film.film_id', 'films.id')
            ->join('categories', 'categories.id', '=', 'films.category_id')
            ->where('actor_film.actor_id', $actor->id)
            ->orderBy('films.created_at', 'desc')
            ->get($columns);

        return $this->responseSuccess('', $films);
    }

    public function search(Request $request)
    {
        $searchText = $request->input('search');

        $columns = [
            'films.name',
            'films.image',
            'films.length',
            'films.resolution',
            'films.slug',
            'films.nation',
            'films.view_number',
            'categories.slug as category',
        ];

        $films = Film::join('categories', 'categories.id', 'films.category_id')
            ->where(\DB::raw('LOWER(films.name)'), 'LIKE', '%' . strtolower($searchText) . '%')
            ->get($columns);

        return $this->responseSuccess('', $films);
    }
}
