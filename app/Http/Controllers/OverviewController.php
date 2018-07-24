<?php

namespace App\Http\Controllers;

use App\Models\Overview;
use Illuminate\Http\Request;

class OverviewController extends Controller
{
    public function index()
    {
        $list = Overview::all(['id', 'name', 'link']);

        return $this->responseSuccess('', $list);
    }

    public function store(Request $request)
    {
        $data = $request->only('link', 'name');

        Overview::create($data);

        return $this->responseSuccess('');
    }

    public function update(Request $request, $trailerId)
    {
        $data = $request->only('link', 'name');

        $trailer = Overview::find($trailerId);
        $trailer->update($data);

        return $this->responseSuccess('');
    }

    public function destroy(Request $request, $trailerId)
    {
        $trailer = Overview::find($trailerId);
        $trailer->delete();

        return $this->responseSuccess('');
    }
}