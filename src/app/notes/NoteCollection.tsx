'use client';

import { useState } from 'react';
import Note from "./NoteClass";
import NewNote from "./NewNote";

export default function NotesCollection({ notes }: { notes: Note[] }) {
	const addHandler = () => {
		return (NewNote(true));
	};
	return (
		<div className="flex flex-wrap gap-32">
		{notes.map((note) => (
			<article key={note.id} className="note bg-slate-600 rounded-xl w-96 h-96 p-4">
			<div className="h-full flex flex-col justify-between">
				<h2 className="text-xl"><p>{note.title}</p></h2>
				<div className="h-[80%] overflow-auto">
				<p className="break-words resize-none">{note.content}</p>
				</div>
				<div>
				<p>Last update: {note.date}</p>
				</div>
			</div>
			</article>
		))}
		<div className="w-96 h-96 flex justify-center items-center">
			<div className="hover:animate-sizeup cursor-pointer" onClick={addHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" viewBox="0 0 16 16">
				<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
				<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
			</svg>
			</div>
		</div>
		</div>
	);
}
