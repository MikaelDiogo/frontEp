<?php

namespace App\Http\Controllers;

use App\Models\news;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function findAll()
    {
        return news::all();
    }

    public function findOneOrFail(Request $request, news $news)
    {
        return $news;
    }

    public function create(Request $request)
    {
        $news = news::create($request->all());

        return $news;
    }

    public function update(Request $request, news $news)
    {
        $news->update($request->all());

        return response()->json($news, 200);
    }

    public function delete(news $news)
    {
        $news->delete();


        return response()->json(null, 204);
    }
}
