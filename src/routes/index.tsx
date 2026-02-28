import { createFileRoute } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, MapPin } from "lucide-react";
import { cn } from "../lib/utils";

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
	location: "Sydney, Australia",
	bio: `I'm a full-stack engineer with 4 years of experience building fast, scalable web and mobile apps. I've led tricky migrations, shipped AI-powered features, and tuned systems for cost, performance, and UX. I also bring technical SEO and content strategy, and I'm comfortable bridging business and engineering—from contract talks to hands-on coding.`,
	avatar: "/profile.jpeg",
};

const SOCIALS = [
	{
		name: "GitHub",
		url: "https://github.com/btsmithnz",
		icon: Github,
		hoverClass: "hover:text-white",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/btsmithnz",
		icon: Linkedin,
		hoverClass: "hover:text-[#0A66C2]",
	},
	{
		name: "Instagram",
		url: "https://instagram.com/btsmith.nz",
		icon: Instagram,
		hoverClass: "hover:text-[#E1306C]",
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
		title: "Seoteric",
		description:
			"An AI agent that audits, ranks, and fixes your site's SEO — tracking Core Web Vitals, backlinks, keyword rankings, and technical issues across multiple sites.",
		tech: ["Next.js", "React", "AI SDK"],
		url: "https://seoteric.btsmith.nz",
		historic: false,
	},
	{
		title: "Leaflet",
		description:
			"A Mapbox leaflet map generator for New Zealand and Australian political parties.",
		tech: ["Next.js", "React", "PostgreSQL", "MapBox"],
		url: "https://leaflet.btsmith.nz",
		historic: false,
	},
	{
		title: "National Party",
		description:
			"The official website for the New Zealand National Party, featuring news, policy information, and member engagement tools.",
		tech: ["Next.js", "Vercel", "React"],
		url: "https://www.national.org.nz",
		historic: false,
	},
	{
		title: "COVID Tracker",
		description:
			"A COVID-19 tracker for New Zealand using data from the NZ Ministry of Health.",
		tech: ["Next.js", "React", "Firebase", "MapBox"],
		url: "https://github.com/btsmithnz/covid-nz-app",
		historic: true,
	},
];

// ============================================
// COMPONENTS
// ============================================

function Portfolio() {
	return (
		<div className="min-h-screen bg-background text-foreground">
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
	return (
		<section className="relative min-h-[60vh] pt-20 pb-12 md:min-h-[85vh] md:py-20 flex flex-col justify-center px-6 overflow-hidden">
			{/* Dot grid — pure CSS */}
			<div
				className="absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"radial-gradient(oklch(0.35 0.028 250) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>
			<div className="relative z-10 max-w-5xl mx-auto w-full">
				{/* Terminal prompt */}
				<p className="font-mono text-sm text-primary/70 mb-6 animate-fade-in">
					~/btsmith <span className="text-muted-foreground">$</span> whoami
				</p>
				{/* Avatar + Name block */}
				<div className="flex items-start gap-8 mb-8 animate-fade-in animate-delay-100">
					<div className="shrink-0 w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-border hover:ring-primary/60 transition-all duration-300 mt-2">
						<img
							src={PROFILE.avatar}
							alt={PROFILE.name}
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h1 className="text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-none tracking-tighter text-foreground mb-2">
							{PROFILE.name} {PROFILE.surname}
							<span className="inline-block w-1 h-[0.8em] bg-primary animate-cursor align-middle ml-1 translate-y-[-0.05em]" />
						</h1>
						<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground">
							<span className="text-lg font-light">{PROFILE.title}</span>
							<span className="text-border">—</span>
							<span className="flex items-center gap-1.5 text-sm font-mono">
								<MapPin size={13} className="text-primary" />
								{PROFILE.location}
							</span>
						</div>
					</div>
				</div>
				{/* Social links — text + icon, no card buttons */}
				<div className="flex flex-wrap items-center gap-5 animate-fade-in animate-delay-300">
					{SOCIALS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 group ${social.hoverClass}`}
						>
							<social.icon size={16} />
							<span className="font-mono group-hover:underline underline-offset-4">
								{social.name}
							</span>
						</a>
					))}
				</div>
			</div>
			</section>
	);
}

function AboutSection() {
	return (
		<section data-section="about" className="pt-8 pb-16 px-6 relative">
			<div className="max-w-3xl mx-auto">
				<div className="flex items-center gap-4 mb-10">
					<span className="font-mono text-xs text-primary/60">01</span>
					<span className="w-8 h-px bg-border" />
					<span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
						About
					</span>
				</div>
				<p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground/85 animate-on-scroll">
					{PROFILE.bio}
				</p>
			</div>
		</section>
	);
}

function ExperienceSection() {
	return (
		<section data-section="experience" className="py-24 px-6 relative">
			<div className="max-w-3xl mx-auto">
				<div className="flex items-center gap-4 mb-12">
					<span className="font-mono text-xs text-primary/60">02</span>
					<span className="w-8 h-px bg-border" />
					<span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
						Experience
					</span>
				</div>

				<div className="space-y-12">
					{EXPERIENCE.map((job) => (
						<div
							key={`${job.company}-${job.period}`}
							className="group relative pl-8 border-l border-border hover:border-primary/50 transition-colors duration-500 animate-on-scroll"
						>
							<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border border-border group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300" />
							<div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
								<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
									{job.title}
								</h3>
								<span className="font-mono text-xs text-muted-foreground">
									{job.period}
								</span>
							</div>
							<p className="text-sm font-medium text-primary/70 mb-3">
								{job.company}
							</p>
							<p className="font-serif text-base text-muted-foreground mb-4 leading-relaxed">
								{job.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{job.highlights.map((highlight) => (
									<span
										key={highlight}
										className="font-mono text-xs border border-border/60 text-muted-foreground px-2.5 py-1 rounded hover:border-primary/40 hover:text-primary/80 transition-all duration-200"
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

const bentoSpan = (index: number) =>
	index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1";

function ProjectsSection() {
	return (
		<section data-section="projects" className="py-24 px-6 relative">
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center gap-4 mb-12">
					<span className="font-mono text-xs text-primary/60">03</span>
					<span className="w-8 h-px bg-border" />
					<span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
						Projects
					</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{PROJECTS.map((project, index) => (
						<a
							key={project.title}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"group block p-7 bg-card rounded-xl border border-border",
								"hover:border-primary/50 transition-all duration-300",
								"animate-on-scroll flex flex-col",
								bentoSpan(index),
							)}
						>
							{project.historic && (
								<span className="self-start mb-4 font-mono text-[10px] border border-amber-500/30 text-amber-400/80 px-2 py-0.5 rounded">
									archived
								</span>
							)}
							<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
								{project.title}
							</h3>
							<p className="font-serif text-muted-foreground leading-relaxed mb-6 flex-1">
								{project.description}
							</p>
							<div className="flex items-end justify-between gap-4">
								<div className="flex flex-wrap gap-1.5">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="font-mono text-[11px] text-muted-foreground/70 border border-border/50 px-2 py-0.5 rounded"
										>
											{tech}
										</span>
									))}
								</div>
								<span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
									view →
								</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

function FooterSection() {
	return (
		<footer className="py-20 px-6 border-t border-border/50">
			<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
				<p className="font-mono text-sm text-muted-foreground/40">
					{PROFILE.name} {PROFILE.surname}
					<span className="text-primary animate-cursor">_</span>
				</p>
				<div className="flex items-center gap-5">
					{SOCIALS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`text-muted-foreground/50 transition-colors duration-200 ${social.hoverClass}`}
							aria-label={social.name}
						>
							<social.icon size={18} />
						</a>
					))}
				</div>
				<p className="font-mono text-xs text-muted-foreground/30">
					TanStack + Tailwind
				</p>
			</div>
		</footer>
	);
}
