<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name', 16)->nullable();
            $table->string('last_name', 16)->nullable();
            $table->string('email', 128)->unique();
            $table->string('password', 255);
            $table->timestamp('email_verified_at')->nullable();
            $table->bigInteger('mobile_no');
            $table->unsignedBigInteger('role_id')->nullable();
            $table->foreign('role_id')->references('id')->on('roles');
            $table->string('avatar', 2048)->nullable();
            $table->tinyInteger('status')->default(1);
            $table->date('birthday')->nullable();
            $table->string('what_you_like', 255)->nullable();
            $table->string('occupation', 128)->nullable();
            $table->string('gender', 128)->nullable();
            $table->string('location', 128)->nullable();
            $table->string('address', 255)->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
