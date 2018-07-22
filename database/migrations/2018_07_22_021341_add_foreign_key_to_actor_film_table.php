<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeyToActorFilmTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('actor_film', function (Blueprint $table) {
            $table->foreign('overview_id', 'actor_film_ibfk_1')->references('id')->on('film_overview')->onUpdate('RESTRICT')->onDelete('CASCADE');
            $table->foreign('actor_id', 'actor_film_ibfk_2')->references('id')->on('actors')->onUpdate('RESTRICT')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('actor_film', function (Blueprint $table) {
            $table->dropForeign('actor_film_ibfk_1');
            $table->dropForeign('actor_film_ibfk_2');
        });
    }
}
