export default class Note {
	id: number;
	title: string;
	content: string;
	date: any;

	constructor(id: number, title: string, content: string, date: any) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.date = date;
	}
}