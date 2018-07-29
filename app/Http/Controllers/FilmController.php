<?php

namespace App\Http\Controllers;

use App\Libs\FileUpload;
use App\Models\Film;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function index()
    {
        $list = Film::all([
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
        dd($path);

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
}