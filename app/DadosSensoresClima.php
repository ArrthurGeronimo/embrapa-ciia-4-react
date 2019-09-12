<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class DadosSensoresClima extends Model
{
    protected $fillable = [
        'campoqualquer'
    ];

    protected $table = 'dados_sensores_de_clima';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];
    protected $dateFormat = 'U';

}
