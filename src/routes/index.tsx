import { createFileRoute } from "@tanstack/react-router";
import {
	Calendar,
	ExternalLink,
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Portfolio });

// ============================================
// EDIT YOUR DETAILS HERE
// ============================================
const PROFILE = {
	name: "Ben",
	surname: "Smith",
	title: "Software Engineer",
	location: "Auckland, New Zealand",
	bio: `I'm a full-stack software engineer with 4 years' experience delivering high-performance, scalable web and mobile applications. Proven track record in leading complex migrations, integrating AI-powered solutions, and optimising systems for cost, speed, and user experience. Skilled in technical SEO, content strategy, and bridging technical and business needs - from enterprise contract negotiations to hands-on coding.`,
	avatar: "/profile.jpeg",
};

const SOCIALS = [
	{ name: "GitHub", url: "https://github.com/Ben4944", icon: Github },
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
			"Leading frontend architecture and building scalable web applications using React and TypeScript.",
		highlights: [
			"Led team of 5 engineers",
			"Reduced load time by 40%",
			"Shipped 3 major features",
		],
	},
	{
		title: "Software Engineer",
		company: "Freelance",
		period: "2020 - 2022",
		description:
			"Built and maintained core product features, working across the full stack with Node.js and React.",
		highlights: [
			"Built real-time collaboration features",
			"Improved test coverage to 85%",
		],
	},
	{
		title: "Software Engineer Intern",
		company: "Precision Vision Systems",
		period: "2020, 2021",
		description:
			"Developed client websites and web applications, honing skills in JavaScript and modern CSS.",
		highlights: ["Delivered 20+ client projects", "Mentored 2 interns"],
	},
];

const PROJECTS = [
	{
		title: "Project Alpha",
		description:
			"A full-stack SaaS application for team collaboration with real-time updates and integrations.",
		tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
		url: "https://github.com/yourusername/project-alpha",
		featured: true,
	},
	{
		title: "Design System",
		description:
			"A comprehensive component library with accessibility-first design and extensive documentation.",
		tech: ["TypeScript", "Storybook", "Tailwind CSS"],
		url: "https://github.com/yourusername/design-system",
		featured: true,
	},
	{
		title: "CLI Tool",
		description:
			"A developer productivity tool that automates common workflows and boilerplate generation.",
		tech: ["Rust", "CLI"],
		url: "https://github.com/yourusername/cli-tool",
		featured: false,
	},
	{
		title: "Open Source Contributions",
		description:
			"Active contributor to various open source projects including React ecosystem libraries.",
		tech: ["React", "TypeScript", "Open Source"],
		url: "https://github.com/yourusername",
		featured: false,
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
	return (
		<section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5" />

			{/* Decorative elements */}
			<div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				{/* Avatar */}
				<div className="mb-8 animate-fade-in">
					<div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
						<img
							src={PROFILE.avatar}
							alt={PROFILE.name}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Name */}
				<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in animate-delay-100">
					<span className="text-foreground">{PROFILE.name}</span>{" "}
					<span className="text-primary">{PROFILE.surname}</span>
				</h1>

				{/* Title */}
				<p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in animate-delay-200">
					{PROFILE.title}
				</p>

				{/* Location */}
				<div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-in animate-delay-400">
					<MapPin size={18} />
					<span>{PROFILE.location}</span>
				</div>

				{/* Social Links */}
				<div className="flex items-center justify-center gap-4 animate-fade-in animate-delay-500">
					{SOCIALS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 px-5 py-3 bg-card hover:bg-primary text-foreground hover:text-primary-foreground rounded-full border border-border hover:border-primary transition-all duration-300"
						>
							<social.icon size={20} />
							<span className="font-medium">{social.name}</span>
						</a>
					))}
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
						<div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
					</div>
				</div>
			</div>
		</section>
	);
}

function AboutSection() {
	return (
		<section data-section="about" className="py-24 px-6 bg-card/50">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
					About
				</h2>
				<div className="space-y-6">
					<p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground">
						{PROFILE.bio}
					</p>
				</div>
			</div>
		</section>
	);
}

function ExperienceSection() {
	return (
		<section data-section="experience" className="py-24 px-6">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-12 font-medium">
					Experience
				</h2>

				<div className="space-y-12">
					{EXPERIENCE.map((job) => (
						<div
							key={`${job.company}-${job.period}`}
							className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
						>
							{/* Timeline dot */}
							<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary transition-all duration-300" />

							<div className="flex items-start justify-between flex-wrap gap-2 mb-3">
								<div>
									<h3 className="text-xl font-semibold text-foreground">
										{job.title}
									</h3>
									<p className="text-primary font-medium">{job.company}</p>
								</div>
								<div className="flex items-center gap-2 text-muted-foreground text-sm">
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
										className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
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
		<section data-section="projects" className="py-24 px-6 bg-card/50">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-12 font-medium">
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
							className="group block p-8 bg-background rounded-2xl border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
						>
							<div className="flex items-start justify-between mb-4">
								<h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<ExternalLink
									size={18}
									className="text-muted-foreground group-hover:text-primary transition-colors"
								/>
							</div>

							<p className="text-muted-foreground mb-6 leading-relaxed">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded"
									>
										{tech}
									</span>
								))}
							</div>
						</a>
					))}
				</div>

				{/* Other Projects */}
				<div className="grid md:grid-cols-2 gap-4">
					{otherProjects.map((project) => (
						<a
							key={project.title}
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center justify-between p-5 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
						>
							<div>
								<h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{project.description.slice(0, 60)}...
								</p>
							</div>
							<ExternalLink
								size={16}
								className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

function FooterSection() {
	return (
		<footer className="py-16 px-6 border-t border-border">
			<div className="max-w-3xl mx-auto text-center">
				<div className="flex items-center justify-center gap-6 mb-8">
					{SOCIALS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-primary transition-colors"
							aria-label={social.name}
						>
							<social.icon size={24} />
						</a>
					))}
				</div>

				<p className="text-muted-foreground text-sm">
					© {new Date().getFullYear()} {PROFILE.name} {PROFILE.surname}. All
					rights reserved.
				</p>

				<p className="text-muted-foreground/50 text-xs mt-4">
					Built with TanStack Start & Tailwind CSS
				</p>
			</div>
		</footer>
	);
}
