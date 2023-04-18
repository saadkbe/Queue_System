<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
    $validatedData = $request->validate([
        'agency' => 'required',
        'serviceType' => 'required',
    ]);

    // Insert the data into the tickets table
    $ticket = new Ticket();
    $ticket->agency = $validatedData['agency'];
    $ticket->service_type = $validatedData['serviceType'];
    $ticket->save();

    // Return a success response
    return response()->json(['message' => 'Ticket created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
