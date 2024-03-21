'use client';

export default function ContactUsForm() {
	return (
		<form className="animate-fade-up absolute top-0 bottom-0 left-0 right-0 w-fit h-fit m-auto flex flex-col gap-y-4 bg-slate-700 rounded-2xl p-10">
			<h2 className="text-2xl text-center">Contact Us</h2>
			<div className="flex-1 flex gap-x-4">
				<input className="bg-slate-600 rounded-md border-none px-4 py-2" type="text" id="firstname" name="firstname" placeholder="First name"/>
				<input className="bg-slate-600 rounded-md border-none px-4 py-2" type="text" id="lastname" name="lastname" placeholder="Last name"/>
			</div>
			<div className="flex-1 flex gap-x-4">
				<input className="bg-slate-600 rounded-md border-none px-4 py-2" type="email" id="email" name="email" placeholder="Email"/>
				<input className="bg-slate-600 rounded-md border-none px-4 py-2" type="tel" id="phone" name="phone" placeholder="Phone"/>
			</div>
			<div className="flex-1 flex gap-x-4 w-full">
				<textarea className="w-full h-48 bg-slate-600 rounded-md border-none px-4 py-2 resize-none" id="message" name="message" placeholder="Message"></textarea>
			</div>
			<div className="ml-auto w-fit">
				<button className="bg-slate-800 hover:bg-slate-900 duration-100 hover:animate-sizeup px-12 py-2 rounded-xl" type="submit">Send</button>
			</div>
		</form>
	);
}