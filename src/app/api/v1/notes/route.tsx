// app/api/route.tsx 👈🏽

import { NextResponse } from "next/server";
import type { NextApiRequest } from "next";
import mysql from "mysql2/promise";


// To handle a GET request to /api
export async function GET(request: Request) {
	try {
		const db = await mysql.createConnection({
			host: "127.0.0.1",
			user: "root",
			password: "password",
			port: 3306,
			database: "db_nextnotes",
		});
	
		const [result] = await db.execute("SELECT * FROM tbl_notes");
		await db.end();
		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An error occurred" }, { status: 500 });
	}
}

// To handle a POST request to /api
/*export async function POST(request: Request | NextApiRequest) {
	try {
		const db = await mysql.createConnection({
			host: "127.0.0.1",
			user: "root",
			password: "password",
			port: 3306,
			database: "db_nextnotes",
		});

		const { title, content, date } = request.body;
		await db.execute("INSERT INTO tbl_notes (title, content, date) VALUES (?, ?, ?)", [title, content, date]);
		await db.end();
		return NextResponse.json({ message: "Note added" }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An error occurred" }, { status: 500 });
	}
}*/

// Same logic to add a `PATCH`, `DELETE`...