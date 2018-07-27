<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilmOverviewTalbe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('film_overview', function (Blueprint $table) {
            $table->increments('id');
            $table->smallInteger('category_id');
            $table->string('name');
            $table->string('nation')->nullable();
            $table->string('year')->nullable();
            $table->string('resolution')->nullable();
            $table->string('language')->nullable();
            $table->string('slug')->nullable();
            $table->smallInteger('watch_number')->default(0);
            $table->text('content')->nullable();
            $table->smallInteger('type');
            $table->string('idmb')->nullable();
            $table->string('trailer_id')->nullable();
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
