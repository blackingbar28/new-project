<?php

namespace App\Http\Controllers;

use App\Libs\FileUpload;
use App\Models\Film;
use App\Models\ActorFilm;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function index()
    {
        $list = Film::with('links')->get([
            'id',
            'category_id',
            'name',
            'nation',
            'image',
            'length',
            'resolution',
            'slug',
        ]);

        return $this->responseSuccess('', $list);
    }

    public function store(Request $request)
    {
        $uploadFile = new FileUpload();
        $path = $uploadFile->uploadFile($request->file('image'));

        $data = $request->only('category_id', 'name', 'image', 'length', 'resolution', 'slug', 'nation');
        $data['image'] = $path;

        Film::create($data);

        return $this->responseSuccess('');
    }

    public function update(Request $request, $filmId)
    {
        $data = $request->only('category_id', 'name', 'image', 'length', 'resolution', 'slug', 'nation');

        $film = Film::find($filmId);
        $film->update($data);

        return $this->responseSuccess('');
    }

    public function destroy($filmId)
    {
        $film = Film::find($filmId);
        $film->delete();

        return $this->responseSuccess('');
    }

    public function upload(Request $request, $filmId)
    {
        $film = Film::find($filmId);
        $uploadFile = new FileUpload();
        $path = $uploadFile->uploadVideo($request->file('video'));

        $film->links()->create([
           'link' => $path
        ]);

        return $this->responseSuccess('');
    }

    public function addActor(Request $request, $filmId)
    {
        $actorID = $request->input('actor_id');
        $attribute = [
            'film_id' => $filmId,
            'actor_id' => $actorID
        ];
        ActorFilm::create($attribute);

        return $this->responseSuccess('');
    }
}