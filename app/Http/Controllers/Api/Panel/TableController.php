<?php

namespace App\Http\Controllers\Api\Panel;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Yajra\DataTables\Facades\DataTables;

class TableController extends Controller
{
    public function categories()
    {
        return DataTables::of(
            Category::all()
        )->make();
    }
}
