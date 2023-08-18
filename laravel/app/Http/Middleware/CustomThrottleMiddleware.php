<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CustomThrottleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, $maxRequests = 60, $decayMinutes = 1)
    {
        return app(ThrottleRequests::class, [
            'maxAttempts' => $maxRequests,
            'decayMinutes' => $decayMinutes,
        ])->handle($request, $next);
    }


}
