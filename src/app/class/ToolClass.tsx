export default class Tool {
	content: JSX.Element;
	clickHandler: () => void;

	constructor(content: JSX.Element, clickHandler: () => void)
	{
		this.content = content;
		this.clickHandler = clickHandler;
	}
}