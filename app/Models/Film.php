<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{

    protected $table = 'films';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id',
        'name',
        'nation',
        'image',
        'length',
        'resolution',
        'language',
        'slug'
    ];
}
