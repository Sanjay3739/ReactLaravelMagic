<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\OccupationController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ResetPasswordAPIController;
use App\Http\Controllers\ForgotPasswordAPIController;








/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [RegistrationController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::resource('users', UserController::class);
Route::resource('roles', RoleController::class);
Route::resource('occupation', OccupationController::class);
Route::resource('permissions', PermissionController::class);
Route::get('country', [CountryController::class, 'index']);
Route::get('/getUser', [DashboardController::class, 'getUsersAllData']); //getAllUser.. get-users
Route::get('/getRole', [DashboardController::class, 'getRolesAllData']);
Route::get('/getOccupation', [DashboardController::class, 'getOccupationAllData']);
Route::get('/getPermission/{userId}', [DashboardController::class, 'getUserPermissions']);


Route::get('password/reset/{token}', [ResetPasswordAPIController::class, 'showResetForm'])->name('password.reset');
Route::post('password/reset', [ResetPasswordAPIController::class, 'reset']);
Route::post('password/email', [ForgotPasswordAPIController::class, 'sendResetLinkEmail'])->name('password.email');
