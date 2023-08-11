<?php

namespace App\Http\Controllers;

use App\Models\Occupation;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class OccupationController extends Controller
{

    public function index(Request $request)
    {
        $query = $request->input('query');
        $rowsPerPage = $request->input('rowsPerPage');

        $occupation = Occupation::select('id', 'name', 'status')
            ->where('name', 'LIKE', "%{$query}%")
            ->orderBy('id', 'desc');
        $occupation = $occupation->paginate($rowsPerPage);

        return response()->json($occupation);
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'status' => 'required',
        ]);

        $occupationStore = new Occupation();
        $occupationStore->name = $validatedData['name'];
        $occupationStore->status = $validatedData['status'];

        $occupationStore->save();
        return response()->json(['message' => 'Role created successfully'], 201);
    }

    public function destroy($id)
    {
        $occupationDelete = Occupation::find($id);

        if (!$occupationDelete) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $occupationDelete->delete();
        return response()->json(['message' => 'Role deleted successfully'], 200);
    }

    public function show($id)
    {
        $occupationShow = Occupation::find($id);
        if (!$occupationShow) {
            return response()->json(['message' => 'Role not found'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($occupationShow, Response::HTTP_OK);
    }

   

    public function update(Request $request, $id)
    {
        $occupationUpdate = Occupation::find($id);

        if (!$occupationUpdate) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $validator = \Illuminate\Support\Facades\Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'status' => 'required|boolean',
           
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $data = $request->only([
            'name',
            'status',
        ]);

        $occupationUpdate->update($data);
        return response()->json(['message' => 'Role profile updated successfully']);
    }

    
}