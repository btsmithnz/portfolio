import { useEffect, useState } from "react";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.querySelector(sectionId);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-background border-b border-primary/20"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
				<span className="font-mono text-sm text-muted-foreground/50 select-none">
					~/btsmith
				</span>
				<nav className="hidden md:flex items-center gap-8">
					<button
						type="button"
						onClick={() => scrollToSection("[data-section='about']")}
						className="text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						About
					</button>
					<button
						type="button"
						onClick={() => scrollToSection("[data-section='experience']")}
						className="text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						Experience
					</button>
					<button
						type="button"
						onClick={() => scrollToSection("[data-section='projects']")}
						className="text-sm text-muted-foreground hover:text-primary transition-colors"
					>
						Projects
					</button>
				</nav>
			</div>
		</header>
	);
}
