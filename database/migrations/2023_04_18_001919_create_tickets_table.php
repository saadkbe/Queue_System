<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    public function up()
{
    Schema::create('tickets', function (Blueprint $table) {
        $table->id();
        $table->string('agency');
        $table->string('service_type');
        $table->boolean('isValid')->default(true);
        $table->timestamps();
    });
}

    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
