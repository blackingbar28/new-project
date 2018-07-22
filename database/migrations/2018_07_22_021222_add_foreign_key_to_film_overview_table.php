<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeyToFilmOverviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('film_overview', function (Blueprint $table) {
            $table->foreign('category_id', 'film_overview_ibfk_1')->references('id')->on('categories')->onUpdate('RESTRICT')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('film_overview', function (Blueprint $table) {
            $table->dropForeign('film_overview_ibfk_1');
        });
    }
}
