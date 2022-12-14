<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminLogoutController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $request->admin()->tokens()->where("id", $request->admin()->currentAccessToken()->id)->delete();
        return response()->json([
             "messages" => "You are logout"
        ]);
    }
}
