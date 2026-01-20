import { createFileRoute } from "@tanstack/react-router";
import {
	Archive,
	Calendar,
	ExternalLink,
	Github,
	Instagram,
	Linkedin,
	MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
	component: Portfolio,
	headers: () => ({
		"Cache-Control":
			"public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
	}),
});

// ============================================
// EDIT YOUR DETAILS HERE
// ============================================
const PROFILE = {
	name: "Ben",
	surname: "Smith",
	title: "Software Engineer",
	location: "Auckland, New Zealand",
	bio: `I'm a full-stack engineer with 4 years of experience building fast, scalable web and mobile apps. I've led tricky migrations, shipped AI-powered features, and tuned systems for cost, performance, and UX. I also bring technical SEO and content strategy, and I'm comfortable bridging business and engineering—from contract talks to hands-on coding.`,
	avatar: "/profile.jpeg",
};

const SOCIALS = [
	{ name: "GitHub", url: "https://github.com/btsmithnz", icon: Github },
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/btsmithnz",
		icon: Linkedin,
	},
	{
		name: "Instagram",
		url: "https://instagram.com/btsmith.nz",
		icon: Instagram,
	},
];

const EXPERIENCE = [
	{
		title: "Software Engineer",
		company: "New Zealand National Party",
		period: "2023 - Present",
		description:
			"Led the build of several web applications, migrating from a legacy tech stack to Next.js on Vercel. Integrated generative AI into web platforms, including an agent that publishes press releases and vector search for the CMS. Built volunteer CRM, email platform, and a React Native campaign app.",
		highlights: [
			"Reduced costs by 40% via Next.js migration",
			"AI reduced article time from 15min to 3min",
			"Saved 200+ volunteer hours with document AI",
			"Built CRM for 250+ users",
		],
	},
	{
		title: "Software Engineer",
		company: "Freelance",
		period: "2021 - 2023",
		description:
			"Delivered custom web applications for clients in food manufacturing and politics, specialising in Next.js and cloud-based solutions.",
		highlights: [
			"Built Shopify order fulfilment system",
			"Developed Mapbox leaflet map generator",
		],
	},
	{
		title: "Software Intern",
		company: "Precision Vision Systems",
		period: "2020, 2021",
		description:
			"Rebuilt the backend (Express.js) and frontend (React SPA) for a camera timelapse system. Also developed an Android app for capturing timelapses.",
		highlights: [
			"Full-stack timelapse system rebuild",
			"Android timelapse app development",
		],
	},
];

const PROJECTS = [
	{
		title: "Leaflet",
		description:
			"A Mapbox leaflet map generator for New Zealand and Australian political parties.",
		tech: ["Next.js", "React", "PostgreSQL", "MapBox"],
		url: "https://leaflet.btsmith.nz",
		featured: true,
	},
	{
		title: "National Party Website",
		description:
			"The official website for the New Zealand National Party, featuring news, policy information, and member engagement tools.",
		tech: ["Next.js", "Vercel", "React"],
		url: "https://www.national.org.nz",
		featured: true,
	},
	{
		title: "COVID Tracker",
		description:
			"A COVID-19 tracker for New Zealand using data from the NZ Ministry of Health.",
		tech: ["Next.js", "React", "Firebase", "MapBox"],
		url: "https://github.com/btsmithnz/covid-nz-app",
		featured: true,
		historic: true,
	},
];

// ============================================
// COMPONENTS
// ============================================

function Portfolio() {
	return (
		<div className="dark min-h-screen bg-background text-foreground">
			<div className="grain relative">
				<HeroSection />
				<AboutSection />
				<ExperienceSection />
				<ProjectsSection />
				<FooterSection />
			</div>
		</div>
	);
}

function HeroSection() {
	const [showScrollIndicator, setShowScrollIndicator] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollIndicator(window.scrollY < 50);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5" />

			{/* Decorative elements with slow pulsing animation */}
			<div
				className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse"
				style={{ animationDuration: "4s" }}
			/>
			<div
				className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
				style={{ animationDuration: "6s" }}
			/>
			<div
				className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"
				style={{ animationDuration: "5s" }}
			/>

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				{/* Avatar with animated gradient ring */}
				<div className="mb-8 animate-fade-in">
					<div className="relative w-36 h-36 mx-auto group">
						<div
							className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary/50 to-accent animate-spin"
							style={{ animationDuration: "8s" }}
						/>
						<div className="absolute inset-[3px] rounded-full bg-background" />
						<div className="absolute inset-[6px] rounded-full overflow-hidden">
							<img
								src={PROFILE.avatar}
								alt={PROFILE.name}
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					</div>
				</div>

				{/* Name with gradient surname */}
				<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in animate-delay-100">
					<span className="text-foreground">{PROFILE.name}</span>{" "}
					<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
						{PROFILE.surname}
					</span>
				</h1>

				{/* Title */}
				<p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in animate-delay-200 font-light">
					{PROFILE.title}
				</p>

				{/* Location pill */}
				<div className="inline-flex items-center gap-2 text-muted-foreground mb-10 animate-fade-in animate-delay-400 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
					<MapPin size={16} className="text-primary" />
					<span className="text-sm">{PROFILE.location}</span>
				</div>

				{/* Social Links with enhanced hover */}
				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-in animate-delay-500">
					{SOCIALS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-card/80 backdrop-blur-sm hover:bg-primary text-foreground hover:text-primary-foreground rounded-full border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
						>
							<social.icon
								size={18}
								className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12"
							/>
							<span className="font-medium text-sm sm:text-base">
								{social.name}
							</span>
						</a>
					))}
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
					showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 animate-bounce">
					<div className="w-1.5 h-3 bg-primary/50 rounded-full" />
				</div>
			</div>
		</section>
	);
}

function AboutSection() {
	return (
		<section
			data-section="about"
			className="py-24 px-6 bg-card/50 relative overflow-hidden"
		>
			{/* Decorative gradient blob */}
			<div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

			<div className="max-w-3xl mx-auto relative">
				<h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-6 font-medium flex items-center gap-3">
					<span className="w-8 h-px bg-primary" />
					About
				</h2>
				<div className="space-y-6">
					<p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
						{PROFILE.bio}
					</p>
				</div>
			</div>
		</section>
	);
}

function ExperienceSection() {
	return (
		<section data-section="experience" className="py-24 px-6 relative">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-12 font-medium flex items-center gap-3">
					<span className="w-8 h-px bg-primary" />
					Experience
				</h2>

				<div className="space-y-12">
					{EXPERIENCE.map((job) => (
						<div
							key={`${job.company}-${job.period}`}
							className="group relative pl-8 border-l-2 border-border hover:border-primary/50 transition-all duration-500"
						>
							{/* Timeline dot with glow on hover */}
							<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300" />

							{/* Subtle card background on hover */}
							<div className="absolute -inset-4 -left-2 rounded-xl bg-card/0 group-hover:bg-card/50 transition-all duration-500 -z-10" />

							<div className="flex items-start justify-between flex-wrap gap-2 mb-3">
								<div>
									<h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
										{job.title}
									</h3>
									<p className="text-primary/80 font-medium">{job.company}</p>
								</div>
								<div className="flex items-center gap-2 text-muted-foreground text-sm px-3 py-1 rounded-full bg-card/50 border border-border/50">
									<Calendar size={14} />
									<span>{job.period}</span>
								</div>
							</div>

							<p className="text-muted-foreground mb-4 leading-relaxed">
								{job.description}
							</p>

							<div className="flex flex-wrap gap-2">
								{job.highlights.map((highlight) => (
									<span
										key={highlight}
										className="px-3 py-1.5 text-sm bg-secondary/80 text-secondary-foreground rounded-full border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-200"
									>
										{highlight}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectsSection() {
	const featuredProjects = PROJECTS.filter((p) => p.featured);
	const otherProjects = PROJECTS.filter((p) => !p.featured);

	return (
		<section
			data-section="projects"
			className="py-24 px-6 bg-card/50 relative overflow-hidden"
		>
			{/* Decorative gradient blob */}
			<div className="absolute -left-32 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

			<div className="max-w-5xl mx-auto relative">
				<h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-12 font-medium flex items-center gap-3">
					<span className="w-8 h-px bg-primary" />
					Projects
				</h2>

				{/* Featured Projects */}
				<div className="grid md:grid-cols-2 gap-6 mb-12">
					{featuredProjects.map((project) => (
						<a
							key={project.title}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group block p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
						>
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center gap-2">
									<h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									{project.historic && (
										<span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/25 rounded-full">
											<Archive size={12} />
											Archived
										</span>
									)}
								</div>
								<ExternalLink
									size={18}
									className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
								/>
							</div>

							<p className="text-muted-foreground mb-6 leading-relaxed">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20"
									>
										{tech}
									</span>
								))}
							</div>
						</a>
					))}
				</div>

				{/* Other Projects */}
				{otherProjects.length > 0 && (
					<div className="grid md:grid-cols-2 gap-4">
						{otherProjects.map((project) => (
							<a
								key={project.title}
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-between p-5 bg-background/50 rounded-xl border border-border hover:border-primary/50 hover:bg-background transition-all duration-300"
							>
								<div>
									<div className="flex items-center gap-2">
										<h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
											{project.title}
										</h3>
										{project.historic && (
											<span className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium bg-amber-500/15 text-amber-400 border border-amber-500/25 rounded-full">
												<Archive size={10} />
												Archived
											</span>
										)}
									</div>
									<p className="text-sm text-muted-foreground">
										{project.description.slice(0, 60)}...
									</p>
								</div>
								<ExternalLink
									size={16}
									className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-4"
								/>
							</a>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

function FooterSection() {
	return (
		<footer className="py-16 px-6 border-t border-border relative">
			<div className="max-w-3xl mx-auto text-center">
				{/* Social links with enhanced hover */}
				<div className="flex items-center justify-center gap-4 mb-8">
					{SOCIALS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110"
							aria-label={social.name}
						>
							<social.icon size={22} />
						</a>
					))}
				</div>

				<p className="text-muted-foreground text-sm">
					© {new Date().getFullYear()} {PROFILE.name} {PROFILE.surname}
				</p>

				<p className="text-muted-foreground/40 text-xs mt-4 flex items-center justify-center gap-2">
					<span className="w-4 h-px bg-muted-foreground/20" />
					Built with TanStack Start & Tailwind CSS
					<span className="w-4 h-px bg-muted-foreground/20" />
				</p>
			</div>
		</footer>
	);
}
