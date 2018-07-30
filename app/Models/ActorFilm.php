<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActorFilm extends Model
{

    protected $table = 'actor_film';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'film_id',
        'actor_id',
    ];
}
