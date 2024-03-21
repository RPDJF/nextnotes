import Note from "@/app/class/NoteClass";

export default function NoteDiv({note}: {note: Note})
{
	return (
		<article key={note.id} className="animate-flip-up bg-slate-600 rounded-xl w-96 h-96 p-4">
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
	)
}