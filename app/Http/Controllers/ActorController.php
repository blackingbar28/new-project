<?php

namespace App\Http\Controllers;

use App\Libs\FileUpload;
use App\Models\Actor;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function index()
    {
        $list = Actor::all([
            'id',
            'name',
            'avatar',
            'nation',
            'height',
            'history',
            'born_date',
        ]);

        return $this->responseSuccess('', $list);
    }

    public function store(Request $request)
    {
        $uploadFile = new FileUpload();
        $path = $uploadFile->uploadFile($request->file('avatar'), 'avatar');

        $data = $request->only('name', 'nation', 'height', 'history', 'born_date');
        $data['avatar'] = $path;

        Actor::create($data);

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