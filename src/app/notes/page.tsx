import dynamic from 'next/dynamic';
import Note from "./NoteClass";
import Loading from './loading';

async function fetchNotes(): Promise<Note[]>{
    const res = await fetch("http://localhost:3000/api/v1/notes/", {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as Note[];
}

const DynamicNoteToolbar = dynamic(() => import('./NoteToolbar'), { ssr: false, loading: () => <Loading /> });
const DynamicNoteCollection = dynamic(() => import('./NoteCollection'), { ssr: false, loading: () => <Loading /> });
const DynamicNewNote = dynamic(() => import('./NewNote'), { ssr: false, loading: () => <Loading /> });

export default async function NotesPage() {

    const notes:Note[] = await fetchNotes();

    return (
        <main>
			<DynamicNewNote />
            <h1 className="text-center text-3xl my-8">Notes</h1>
           	<DynamicNoteToolbar notes={notes} />
            <div className="container mx-auto"><DynamicNoteCollection notes={notes} /></div>
        </main>
    );
}