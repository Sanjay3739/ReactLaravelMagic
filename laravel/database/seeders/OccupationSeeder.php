<?php

namespace Database\Seeders;

use App\Models\Occupation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OccupationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


    public function run(): void
    {
        $occupationNames = [


            'Software Engineer    '    ,    
           ' Mechanical Engineer '   ,                
           ' civil Engineer      '   ,        
           ' Scientist           '  ,     
           ' Cricketer           '  , 
           ' Entrepreneur    ',
          ' Gamer      '      ,
          ' Doctor              '  ,                                         
           ' Cooking             '  ,   
           ' Waiter              '  ,   
           ' Doorman             '  , 
           ' Secretary           '  ,  
           ' Soldier             ',
           ' Electrician         ' ,
           ' Nurse               '  ,  
           'Train conductor      '  , 
           ' Dentist             '   , 
           ' Paramedic           '   , 
           ' Repairman    ' ,   
          ' Businessman       ' ,         
           ' Thrift Shopping     '  ,            
            'Scientist',
            'Reporter',
            'Construction worker',
            'Professor',
            'Police officer',
            'Postman',
            'Photographer',
            'Pilot',
            'Catholic nun',
            'Painter',
            'Mechanic',
            'Magician',
            'Lifeguard',
            'Lunchroom supervisor',
            'Clown',
            'Housekeeper',
            'Gardener',
            'Geisha',
            'Footballer',
            'Forest ranger',
            'Builder',
            'Foreman',
            'Farmer',
            'Flight attendant',
            'Fireman',
            'Engineer',
            'Carpenter',
            'Architect',
            'Boxer',
            'Cameraman',
            'Detective',
            'Journalist',
            'Housewife',
            'Diver',
            'Pope',
            'Priest',
            'Salesman'
        ];

        $databaseData = [];

        foreach ($occupationNames as $occupationName) {
            $data = [
                'name' => $occupationName,
                'status' => rand(0, 1) 
            ];
            $databaseData[] = $data;
        }

        Occupation::insert($databaseData);
    }

  
      

}