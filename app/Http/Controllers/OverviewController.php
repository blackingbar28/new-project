<?php

namespace App\Http\Controllers;

use App\Models\Overview;
use Illuminate\Http\Request;

class OverviewController extends Controller
{
    public function index()
    {
        $list = Overview::all(['id', 'category_id', 'name', 'nation', 'year', 'resolution', 'language', 'slug', 'content', 'type', 'idmb', 'trailer_id', 'image', 'episodes']);

        return $this->responseSuccess('', $list);
    }

    public function store(Request $request)
    {
        $data = $request->only('category_id', 'name', 'nation', 'year', 'resolution', 'language', 'slug', 'content', 'type', 'idmb', 'trailer_id', 'image', 'episodes');

        dd(Overview::create($data));

        return $this->responseSuccess('');
    }

    public function update(Request $request, $overviewId)
    {
        $data = $request->only('category_id', 'name', 'nation', 'year', 'resolution', 'language', 'slug', 'content', 'type', 'idmb', 'trailer_id', 'image', 'episodes');

        $overview = Overview::find($overviewId);
        $overview->update($data);

        return $this->responseSuccess('');
    }

    public function destroy($overviewId)
    {
        $overview = Overview::find($overviewId);
        $overview->delete();

        return $this->responseSuccess('');
    }
}