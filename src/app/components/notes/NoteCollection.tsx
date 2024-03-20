'use client';

import Note from "@/app/class/NoteClass";
import NewNote from "@/app/components/notes/NewNote";
import NoteDiv from "@/app/components/notes/NoteDiv"
import AddButton from "@/app/components/UI/AddButton";

export default function NotesCollection({ notes }: { notes: Note[] }) {
	const addHandler = () => {
		console.log("Added new note");
		<NewNote/>
	};
	return (
		<div className="flex flex-wrap gap-32">
			{notes.map((note) => (
				<NoteDiv key={note.id} note={note}/>
			))}
			<AddButton clickHandler={addHandler}/>
		</div>
	);
}
