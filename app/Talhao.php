<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talhao extends Model
{
    protected $fillable = [
        'fazenda_id', 'nome'
    ];

    protected $table = 'talhao';

    public function fazenda()
    {
        return $this->belongsTo('App\Fazenda');
    }
}
