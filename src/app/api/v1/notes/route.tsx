// app/api/route.tsx 👈🏽

import { NextResponse } from "next/server";
import db from "@/app/db";

// To handle a GET request to /api
export async function GET(request: Request) {
	try {
		const [result] = await db.execute("SELECT * FROM tbl_notes");
		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An error occurred" }, { status: 500 });
	}
}

// To handle a POST request to /api
export async function POST(request: Request) {
	try {
		const { title, content, date } = request.body;
		await db.execute("INSERT INTO tbl_notes (title, content, date) VALUES (?, ?, ?)", [title, content, date]);
		return NextResponse.json({ message: "Note added" }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An error occurred" }, { status: 500 });
	}
}

// Same logic to add a `PATCH`, `DELETE`...