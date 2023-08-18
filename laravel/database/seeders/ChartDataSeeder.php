<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChartDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\ChartData::create([
            'label' => 'Bhavnagar',
            'value' => 32785,
        ]);
    
        \App\Models\ChartData::create([
            'label' => 'Ahmadabad',
            'value' => 61484,
        ]);
    
        \App\Models\ChartData::create([
            'label' => 'Surat',
            'value' => 72514,
        ]);
    
        \App\Models\ChartData::create([
            'label' => ' Rajkot',
            'value' => 19641,
        ]);

        \App\Models\ChartData::create([
            'label' => 'Una',
            'value' => 98154,
        ]);
    
        \App\Models\ChartData::create([
            'label' => 'Amareli',
            'value' => 45128,
        ]);
    
        // Add more data as needed
    }
    
}
