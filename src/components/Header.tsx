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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-gray-400/10 backdrop-blur-md border-border shadow-sm"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-end">
				<nav className="hidden md:flex items-center gap-8">
					<button
						type="button"
						onClick={() => scrollToSection("[data-section='about']")}
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						About
					</button>
					<button
						type="button"
						onClick={() => scrollToSection("[data-section='experience']")}
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Experience
					</button>
					<button
						type="button"
						onClick={() => scrollToSection("[data-section='projects']")}
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Projects
					</button>
				</nav>
			</div>
		</header>
	);
}
