'use client';

import Tool from "@/app/class/ToolClass";

export default function Toolbar({ tools }: { tools: Tool[] }) {

	return (
	<nav className="fixed left-8 top-32 bg-slate-700 rounded-2xl my-auto h-fit w-fit overflow-hidden">
		<ul className="flex flex-col gap-x-4">
			{
				tools.map((tool, id) =>
				{
					return (<li key={id} className="hover:animate-sizeup hover:bg-slate-500 py-4 px-8 cursor-pointer font-semibold" onClick={tool.clickHandler}>
						{tool.content}
					</li>)
				})
			}
		</ul>
	</nav>
	);
}