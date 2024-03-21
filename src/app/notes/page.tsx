import Note from "@/app/class/NoteClass";
import NoteToolbar from "@/app/components/notes/NoteToolbar";
import NotesCollection from "@/app/components/notes/NoteCollection";
import AddButton from "@/app/components/UI/AddButton";
import NoteDiv from "@/app/components/notes/NoteDiv";
import db from "@/app/db";

async function fetchNotes(): Promise<Note[]>{
	const [query] = await db.query("SELECT * FROM tbl_notes");
	return query as Note[];
}

export default async function NotesPage() {

    const notes:Note[] = await fetchNotes();

    return (
        <main className="mt-32">
            <h1 className="text-center text-3xl my-8">Notes</h1>
			<NoteToolbar notes={notes}/>
            <div className="mx-32 ml-64">
			<div className="flex flex-wrap gap-32">
				{notes.map((note) => (
					<NoteDiv key={note.id} note={note}/>
				))}
				<AddButton />
			</div>
			</div>
        </main>
    );
}