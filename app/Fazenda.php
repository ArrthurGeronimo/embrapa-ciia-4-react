<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fazenda extends Model
{
    protected $fillable = [
        'user_id', 'nome'
    ];

    protected $table = 'fazenda';

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function talhoes()
    {
        return $this->hasMany('App\Talhao');
    }
}
