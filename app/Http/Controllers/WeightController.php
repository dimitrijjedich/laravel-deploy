<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WeightController extends Controller
{
    public function index()
    {
        $weights = Auth::user()->weights()->orderBy('measured_at', 'desc')->get();
        return Inertia::render('Weight/Weight', ['weights' => $weights]);
    }

    public function create()
    {
        return Inertia::render('Weight/WeightCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'weight' => 'required|numeric|min:0',
            'measured_at' => 'required|date_format:Y-m-d\TH:i',
        ]);

        Auth::user()->weights()->create([
            'weight' => $request->weight,
            'measured_at' => Carbon::parse($request->measured_at),
        ]);

        return redirect()->route('weight.index');
    }
}
