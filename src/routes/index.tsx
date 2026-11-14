import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { Github, Instagram, Linkedin } from "../components/BrandIcons";
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
	intro:
		"Software engineer in Sydney. Building AI products by day, side projects by night.",
	// The first paragraph is shown larger, as the lead-in
	bio: [
		"I'm a Kiwi in Sydney who loves taking a good idea and turning it into something people actually use.",
		"Right now that's at Paradino, building AI that takes care of meeting notes and compliance paperwork so financial advisers can spend more time with their clients. Before that, I spent three years at the New Zealand National Party, rebuilding their websites and the tools their team and volunteers relied on to run a campaign.",
		"I care as much about the product as the code: how it feels to use, how fast it is, and whether anyone actually shows up. Outside work I'm usually halfway through a side project, lately with Claude doing a lot of the typing. Some fizzle out. Some end up live on election night 📈",
	],
	avatar: "/profile.jpeg",
};

const TONES = {
	sun: "bg-sun",
	sky: "bg-sky",
	blush: "bg-blush",
	mint: "bg-mint",
	fog: "bg-fog",
} as const;

type Tone = keyof typeof TONES;

const SOCIALS = [
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/btsmithnz",
		icon: Linkedin,
	},
	{
		name: "GitHub",
		url: "https://github.com/btsmithnz",
		icon: Github,
	},
	{
		name: "Instagram",
		url: "https://instagram.com/btsmith.nz",
		icon: Instagram,
	},
];

const EXPERIENCE: {
	title: string;
	company: string;
	period: string;
	tone: Tone;
	description: string;
}[] = [
	{
		title: "Software Engineer",
		company: "Paradino",
		period: "2026 – now",
		tone: "sky",
		description:
			"Building AI-powered software for financial advisers, automating meeting capture, advice documentation, and compliance workflows so practices can spend less time on admin and more time with clients.",
	},
	{
		title: "Software Engineer",
		company: "New Zealand National Party",
		period: "2023 – 2026",
		tone: "blush",
		description:
			"Led the build of several web applications, migrating from a legacy tech stack to Next.js on Vercel and cutting costs by 40%. Integrated generative AI into web platforms, including an agent that publishes press releases and vector search for the CMS. Built a volunteer CRM used by 250+ people, an email platform, and a React Native campaign app.",
	},
	{
		title: "Software Engineer",
		company: "Freelance",
		period: "2021 – 2023",
		tone: "mint",
		description:
			"Delivered custom web applications for clients in food manufacturing and politics, specialising in Next.js and cloud-based solutions.",
	},
	{
		title: "Software Intern",
		company: "Precision Vision Systems",
		period: "2020, 2021",
		tone: "sun",
		description:
			"Rebuilt the backend (Express.js) and frontend (React SPA) for a camera timelapse system. Also developed an Android app for capturing timelapses.",
	},
];

const PROJECTS: {
	title: string;
	description: string;
	url: string;
	tone: Tone;
	// When the project was live — leave out to hide
	period?: string;
}[] = [
	{
		title: "SixtyOne",
		description:
			"Live results for the 2026 New Zealand general election — tracking the race to a 61-seat majority, mapping every electorate, and charting how the night unfolds.",
		url: "https://www.sixtyone.nz",
		tone: "sun",
		period: "2026",
	},
	{
		title: "Seoteric",
		description:
			"An AI agent that audits, ranks, and fixes your site's SEO — tracking Core Web Vitals, backlinks, keyword rankings, and technical issues across multiple sites.",
		url: "https://seoteric.btsmith.nz",
		tone: "sky",
	},
	{
		title: "Prenso",
		description:
			"A smart distribution platform that plans optimised delivery routes, guides volunteers, and tracks campaign progress.",
		url: "https://prenso.app",
		tone: "mint",
	},
	{
		title: "National Party",
		description:
			"The official website for the New Zealand National Party, featuring news, policy information, and member engagement tools.",
		url: "https://www.national.org.nz",
		tone: "blush",
		period: "2024 – 2026",
	},
	{
		title: "COVID Tracker",
		description:
			"A COVID-19 tracker for New Zealand using data from the NZ Ministry of Health.",
		url: "https://github.com/btsmithnz/covid-nz-app",
		tone: "fog",
		period: "2020",
	},
];

// ============================================
// COMPONENTS
// ============================================

function Portfolio() {
	return (
		<main className="min-h-screen overflow-x-clip bg-background text-foreground">
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<FooterSection />
		</main>
	);
}

const tilt = (degrees: number) =>
	({ "--tilt": `${degrees}deg` }) as CSSProperties;

function SocialButtons({ cta, dark = false }: { cta: string; dark?: boolean }) {
	const [primary, ...rest] = SOCIALS;
	return (
		<div className="flex flex-wrap items-center gap-3">
			<a
				href={primary.url}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-semibold transition-transform duration-200 hover:-translate-y-0.5",
					dark ? "bg-sun text-ink" : "bg-fern text-paper",
				)}
			>
				<primary.icon size={18} />
				{cta}
			</a>
			{rest.map((social) => (
				<a
					key={social.name}
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						"inline-flex items-center gap-2 rounded-full border px-4 py-3.5 font-medium transition-colors duration-200 sm:px-5",
						dark
							? "border-paper/25 text-paper hover:bg-paper/10"
							: "border-ink/15 bg-white text-ink hover:border-ink/40",
					)}
				>
					<social.icon size={17} />
					<span className="sr-only sm:not-sr-only">{social.name}</span>
				</a>
			))}
		</div>
	);
}

function HeroSection() {
	return (
		<section id="top" className="px-5 pt-28 pb-16 md:pt-40 md:pb-28">
			<div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
				<div className="order-2 md:order-1">
					<h1 className="font-display text-[clamp(3.25rem,7.4vw,6.25rem)] leading-[0.92] text-ink">
						Hey{" "}
						<span className="wave" aria-hidden="true">
							👋
						</span>
						<br />
						I'm {PROFILE.name}.
					</h1>
					<p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
						{PROFILE.intro}
					</p>
					<div className="mt-9">
						<SocialButtons cta="Say hi on LinkedIn" />
					</div>
				</div>

				<div className="relative order-1 w-full max-w-[9.5rem] md:order-2 md:mx-auto md:max-w-[17rem]">
					<div
						aria-hidden="true"
						className="absolute -top-5 -right-6 size-20 rounded-full bg-sun md:-top-9 md:-right-10 md:size-36"
					/>
					<div
						className="tilt animate-photo-in relative rounded-[1.75rem] bg-white p-2 shadow-[0_30px_50px_-25px_rgb(36_81_58/0.45)] md:rounded-[2rem] md:p-2.5"
						style={tilt(3)}
					>
						<img
							src={PROFILE.avatar}
							alt={`${PROFILE.name} ${PROFILE.surname}`}
							width={640}
							height={640}
							className="aspect-[4/5] w-full rounded-[1.375rem] object-cover md:rounded-[1.5rem]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-display text-3xl leading-tight text-ink md:sticky md:top-28 md:self-start md:text-4xl">
			{children}
		</h2>
	);
}

function AboutSection() {
	const [lede, ...rest] = PROFILE.bio;
	return (
		<section id="about" className="px-5 py-14 md:py-24">
			<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
				<SectionHeading>A bit about me</SectionHeading>
				<div className="max-w-2xl space-y-6">
					<p className="text-2xl font-medium leading-snug text-ink md:text-[2rem] md:leading-[1.25]">
						{lede}
					</p>
					{rest.map((paragraph) => (
						<p
							key={paragraph}
							className="text-lg leading-relaxed text-muted-foreground"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}

function ExperienceSection() {
	return (
		<section id="work" className="px-5 py-14 md:py-24">
			<div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_2fr] md:gap-12">
				<SectionHeading>Where I've worked</SectionHeading>
				<ul className="max-w-2xl divide-y divide-border">
					{EXPERIENCE.map((job) => (
						<li
							key={`${job.company}-${job.period}`}
							className="flex gap-5 py-9 first:pt-0 last:pb-0"
						>
							<div
								aria-hidden="true"
								className={cn(
									"font-display grid size-12 shrink-0 place-items-center rounded-2xl text-xl text-ink",
									TONES[job.tone],
								)}
							>
								{job.company[0]}
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
									<h3 className="text-xl font-bold text-ink">{job.company}</h3>
									<span className="text-sm text-muted-foreground">
										{job.period}
									</span>
								</div>
								<p className="mt-0.5 font-medium text-fern">{job.title}</p>
								<p className="mt-3 leading-relaxed text-muted-foreground">
									{job.description}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

// Show where a card goes: the site's address, or GitHub for code-only projects
const linkLabel = (url: string) => {
	const { hostname } = new URL(url);
	return hostname === "github.com"
		? "View on GitHub"
		: hostname.replace(/^www\./, "");
};

function ProjectsSection() {
	return (
		<section id="projects" className="px-5 py-14 md:py-24">
			<div className="mx-auto max-w-6xl">
				<h2 className="font-display mb-10 text-3xl leading-tight text-ink md:mb-14 md:text-4xl">
					Things I've built
				</h2>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
					{PROJECTS.map((project, index) => {
						const featured = index === 0;
						return (
							<a
								key={project.title}
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"group flex flex-col rounded-[2rem] p-7 text-ink transition-transform duration-300 hover:-translate-y-1 md:p-9",
									TONES[project.tone],
									featured && "md:col-span-2 md:min-h-80 md:p-12",
								)}
							>
								<div className="flex items-start justify-between gap-6">
									<div>
										<h3
											className={cn(
												"font-display leading-none",
												featured
													? "text-4xl md:text-6xl"
													: "text-3xl md:text-4xl",
											)}
										>
											{project.title}
										</h3>
										{project.period && (
											<p className="mt-3 font-medium text-ink/60">
												{project.period}
											</p>
										)}
									</div>
									<span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:rotate-45">
										<ArrowUpRight size={22} aria-hidden="true" />
									</span>
								</div>
								<p
									className={cn(
										"mt-5 flex-1 leading-relaxed text-ink/80",
										featured ? "max-w-2xl text-lg md:text-xl" : "text-lg",
									)}
								>
									{project.description}
								</p>
								<p className="mt-8 font-semibold underline decoration-ink/30 underline-offset-4 transition-colors group-hover:decoration-ink">
									{linkLabel(project.url)}
								</p>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}

function FooterSection() {
	return (
		<footer className="px-5 pt-12 pb-8">
			<div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-fern px-7 py-14 text-paper md:px-16 md:py-20">
				<div
					aria-hidden="true"
					className="absolute -right-16 -bottom-24 size-64 rounded-full bg-sun md:size-96"
				/>
				<div className="relative max-w-xl">
					<h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95]">
						Let's chat
					</h2>
					<p className="mt-5 text-lg leading-relaxed text-paper/80 md:text-xl">
						Working on something interesting, hiring, or just want to swap notes
						on AI, side projects or NZ politics? My DMs are open.
					</p>
					<div className="mt-9">
						<SocialButtons cta="Message me on LinkedIn" dark />
					</div>
				</div>
			</div>
			<div className="mx-auto mt-6 flex max-w-6xl flex-wrap justify-between gap-2 px-2 text-sm text-muted-foreground">
				<p>
					© {new Date().getFullYear()} {PROFILE.name} {PROFILE.surname}
				</p>
				<p>Made with ☕ in Sydney</p>
			</div>
		</footer>
	);
}
