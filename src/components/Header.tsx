import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const LINKS = [
	{ label: "About", href: "#about" },
	{ label: "Work", href: "#work" },
	{ label: "Projects", href: "#projects" },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-300",
				scrolled
					? "border-border bg-background/85 backdrop-blur-md"
					: "border-transparent bg-transparent",
			)}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
				<a href="#top" className="font-display text-lg text-foreground">
					Ben Smith
				</a>
				<nav className="flex items-center gap-0.5 text-sm font-medium sm:gap-1">
					{LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="rounded-full px-3 py-2 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground sm:px-4"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</header>
	);
}
