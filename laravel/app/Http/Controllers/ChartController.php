<?php

namespace App\Http\Controllers;

use App\Models\ChartData;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    public function getChartData()
    {
        $chartData = ChartData::all(); // Fetch data from the database

        $labels = $chartData->pluck('label')->toArray();
        $data = $chartData->pluck('value')->toArray();

        $dataForChart = [
            'labels' => $labels,
            'data' => $data,
        ];

        return response()->json($dataForChart);
    }
}
