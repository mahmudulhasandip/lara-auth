<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiLoginController extends Controller
{

    public function apiLogin(){
        return view('api_login');
    }
}
