import NewNote from '../components/notes/NewNote';
import dynamic from 'next/dynamic';

const DynamicNewNote = dynamic(() => import('../components/notes/NewNote'), { ssr: false, loading: () => <p>Loading...</p>});

export default function Test() {
	return (
		<div>
			<h1>Test</h1>
			<DynamicNewNote />
		</div>
	);
}