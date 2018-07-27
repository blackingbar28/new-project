<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Overview extends Model
{

    protected $table = 'film_overview';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id',
        'name',
        'nation',
        'year',
        'resolution',
        'language',
        'slug',
        'watch_number',
        'content',
        'type',
        'type',
        'trailer_id',
        'image',
        'episodes',
        'idmb',
    ];
}
