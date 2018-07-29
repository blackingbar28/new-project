<?php

namespace App\Http\Controllers;

use App\Models\Trailer;
use Illuminate\Http\Request;

class TrailerController extends Controller
{
    public function index()
    {
        $list = Trailer::all(['id', 'name', 'link']);
dd($list);
        return $this->responseSuccess('', $list);
    }

    public function store(Request $request)
    {
        $data = $request->only('link', 'name');

        Trailer::create($data);

        return $this->responseSuccess('');
    }

    public function update(Request $request, $trailerId)
    {
        $data = $request->only('link', 'name');

        $trailer = Trailer::find($trailerId);
        $trailer->update($data);

        return $this->responseSuccess('');
    }

    public function destroy(Request $request, $trailerId)
    {
        $trailer = Trailer::find($trailerId);
        $trailer->delete();

        return $this->responseSuccess('');
    }
}