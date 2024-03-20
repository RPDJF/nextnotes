import dynamic from "next/dynamic";
import Note from "@/app/class/NoteClass";
import Loading from "@/app/components/UI/loading";
import Error from "@/app/components/UI/error";

async function fetchNotes(): Promise<Note[]>{
    const res = await fetch("http://localhost:3000/api/v1/notes/", {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as Note[];
}

const DynamicNoteToolbar = dynamic(() => import("@/app/components/notes/NoteToolbar"), { ssr: false, loading: () => <Loading /> });
const DynamicNoteCollection = dynamic(() => import("@/app/components/notes/NoteCollection"), { ssr: false, loading: () => <Loading /> });

export default async function NotesPage() {

    const notes:Note[] = await fetchNotes();

    return (
        <main className="mt-32">
            <h1 className="text-center text-3xl my-8">Notes</h1>
           	<DynamicNoteToolbar notes={notes} />
            <div className="mx-64"><DynamicNoteCollection notes={notes} /></div>
        </main>
    );
}