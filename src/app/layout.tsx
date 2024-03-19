import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextNotes",
	description: "A NextJS app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={inter.className}>
			<header className="flex h-16 bg-slate-800 items-center">
				<div className="h-full w-20 mx-8">
					<Image src="/ruinformatique.gif" alt="Ruinformtique logo" width={60} height={60} unoptimized/>
				</div>
				<nav>
					<ul className="flex gap-x-32 mx-8">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/notes">Notes</a>
						</li>
					</ul>
				</nav>
			</header>
			{children}
		</body>
		</html>
	);
}
