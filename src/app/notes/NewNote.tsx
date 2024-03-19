'use client';

import { useState } from 'react';

export default function NewNote() {
	const [showComponent, setShowComponent] = useState(false);

	const handleCancel = () => {
		setShowComponent(false); // Call the function passed from the parent component to update its state
	};

	return  showComponent ? (
	  <div className="z-50 absolute top-0 left-0 right-0 bottom-0 h-full w-full backdrop-blur-sm">
		<div className="w-96 h-96 fixed top-0 bottom-0 left-0 right-0 m-auto bg-slate-600 rounded-2xl p-4">
		  <h1 className="text-center text-2xl mb-8">New Note</h1>
		  <form className="h-[80%] w-full flex flex-col justify-between">
			<input className="bg-slate-500 border-none rounded-md resize-none w-full p-2" placeholder="title" type="text" id="title" />
			<div className="h-[60%] w-full">
			  <textarea className="bg-slate-500 border-none rounded-md resize-none h-full w-full p-2" placeholder="content" id="content" />
			</div>
			<div className="flex justify-center gap-x-4">
			  <button className="bg-slate-500 rounded-md px-4 py-2 w-full flex gap-x-2 justify-center items-center" type="submit"><svg className="h-min w-min" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/></svg><p>Save</p></button>
			  <button className="bg-slate-500 rounded-md px-4 py-2 w-full flex gap-x-2 justify-center items-center" onClick={handleCancel} type="reset"><svg  className="h-min w-min" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg><p>Cancel</p></button>
			</div>
		  </form>
		</div>
	  </div>
	) : null;
  }
  