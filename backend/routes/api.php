<?php

use App\Http\Controllers\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('news', [NewsController::class, 'findAll']);
Route::post('news', [NewsController::class, 'create']);
Route::get('news/{news}', [NewsController::class, 'findOneOrFail']);
Route::put('news/{news}', [NewsController::class, 'update']);
Route::delete('news/{news}', [NewsController::class, 'delete']);
