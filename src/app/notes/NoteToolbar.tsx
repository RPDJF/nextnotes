'use client';

import Note from "./NoteClass";

function NoteToolbar({ notes }: { notes: Note[]}) {
	const saveHandler = () => {
		let newNotes: Note[] = [];
		const notesElements = document.getElementsByClassName("note");

		if (notesElements === undefined || notesElements.length === 0)
			return;
		Array.from(notesElements).forEach((note, idx) => {
			console.log(note, idx, notes[idx]);
			const title = note.querySelector("input").value;
			const content = note.querySelector("textarea").value;
			let date;
			if (idx < notes.length && title === notes[idx].title && content === notes[idx].content)
				date = notes[idx].date;
			else
				date = new Date().toISOString().split("T")[0];
			newNotes.push(new Note(newNotes.length, title, content, date));
		});
		console.log(newNotes);
	}

	const reloadHandler = () => {
		location.reload();
	}

	const exportHandler = () => {
		const content = JSON.stringify(notes);
		const blob = new Blob([content], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "notes.json";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	return (
	<nav className="fixed left-8 top-32 bg-slate-700 rounded-2xl my-auto h-fit w-fit overflow-hidden">
		<ul className="flex flex-col gap-x-4">
			<li className="flex gap-x-4 items-center hover:animate-sizeup hover:bg-slate-500 py-4 px-8 cursor-pointer font-semibold" onClick={saveHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
					<path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
				</svg>
				<p className="select-none">Save</p>
			</li>
			<li className="flex gap-x-4 items-center hover:animate-sizeup hover:bg-slate-500 py-4 px-8 cursor-pointer font-semibold" onClick={reloadHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
					<path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z"/>
					<path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z"/>
				</svg>
				<p className="select-none">Reload</p>
			</li>
			<li className="flex gap-x-4 items-center hover:animate-sizeup hover:bg-slate-500 py-4 px-8 cursor-pointer font-semibold" onClick={exportHandler}>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
					<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
				</svg>
				<p className="select-none">Export</p>
			</li>
		</ul>
	</nav>
	);
}


export default NoteToolbar;