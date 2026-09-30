import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut", delay },
});

const SectionLabel = ({ children }) => (
    <span
        className="inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4"
        style={{
            background: "rgba(77,208,225,0.12)",
            color: "#4DD0E1",
            border: "1px solid rgba(77,208,225,0.3)",
        }}
    >
        {children}
    </span>
);

const MetaItem = ({ label, value }) => (
    <div className="flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">{label}</span>
        <span className="text-sm text-gray-200 font-medium leading-snug">{value}</span>
    </div>
);

const Tag = ({ children }) => (
    <span
        className="px-3 py-1 text-xs font-semibold rounded-full"
        style={{
            background: "rgba(77,208,225,0.08)",
            color: "#4DD0E1",
            border: "1px solid rgba(77,208,225,0.2)",
        }}
    >
        {children}
    </span>
);

const ChallengeCard = ({ icon, title, desc }) => (
    <motion.div
        {...fadeUp(0.08)}
        className="flex gap-4 p-5 rounded-2xl"
        style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,100,100,0.15)",
        }}
    >
        <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-red-400"
            style={{
                background: "rgba(255,100,100,0.08)",
                border: "1px solid rgba(255,100,100,0.2)",
            }}
        >
            {icon}
        </div>
        <div>
            <p className="font-bold text-white text-sm mb-1">{title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const StrategyCard = ({ num, title, points }) => (
    <motion.div
        {...fadeUp(num * 0.07)}
        className="p-5 rounded-2xl flex flex-col gap-3"
        style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(77,208,225,0.12)",
        }}
    >
        <div className="flex items-center gap-3">
            <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-[#4DD0E1] flex-shrink-0"
                style={{
                    background: "rgba(77,208,225,0.1)",
                    border: "1px solid rgba(77,208,225,0.25)",
                }}
            >
                {num}
            </div>
            <p className="font-bold text-white text-sm">{title}</p>
        </div>
        <ul className="flex flex-col gap-2 pl-1">
            {points.map((p, i) => (
                <li key={i} className="flex gap-2 text-gray-400 text-sm leading-relaxed">
                    <span className="text-[#4DD0E1] mt-0.5 flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                    </span>
                    <span>{p}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const ImpactCard = ({ icon, title, desc, highlight }) => (
    <motion.div
        {...fadeUp(0.08)}
        className="flex gap-4 p-5 rounded-2xl"
        style={{
            background: "rgba(77,208,225,0.04)",
            border: "1px solid rgba(77,208,225,0.15)",
        }}
    >
        <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#4DD0E1]"
            style={{
                background: "rgba(77,208,225,0.1)",
                border: "1px solid rgba(77,208,225,0.2)",
            }}
        >
            {icon}
        </div>
        <div>
            <p className="font-bold text-white text-sm mb-1">
                {title}
                {highlight && (
                    <span
                        className="ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full text-cyan-300"
                        style={{
                            background: "rgba(77,208,225,0.15)",
                            border: "1px solid rgba(77,208,225,0.3)",
                        }}
                    >
                        {highlight}
                    </span>
                )}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const CaseStudySharkEcommerce = () => (
    <div className="min-h-screen text-white" style={{ background: "#141414" }}>

        {/* HERO */}
        <div className="relative overflow-hidden">
            <div
                className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
                style={{ background: "radial-gradient(circle, #4DD0E1, transparent 70%)" }}
            />
            <div
                className="pointer-events-none absolute top-10 right-0 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px]"
                style={{ background: "radial-gradient(circle, #00BCD4, transparent 70%)" }}
            />

            <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-10 flex flex-col gap-5">
                <motion.div {...fadeUp()}>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4DD0E1] transition-colors duration-300 group"
                    >
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                </motion.div>

                <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-2">
                    <Tag>UI/UX Design</Tag>
                    <Tag>Frontend Engineering</Tag>
                    <Tag>React & Tailwind</Tag>
                    <Tag>Netlify & CI/CD</Tag>
                </motion.div>

                <motion.h1
                    {...fadeUp(0.1)}
                    className="text-4xl md:text-6xl font-black leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    Shark Ecommerce —{" "}
                    <span
                        style={{
                            background: "linear-gradient(90deg, #4DD0E1, #26C6DA, #80DEEA)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        High-Performance
                    </span>
                    <br />Agency Web Platform
                </motion.h1>

                <motion.p
                    {...fadeUp(0.15)}
                    className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed"
                >
                    Full end-to-end design and development ownership for Shark Ecommerce Solutions (`sharkecommercesolutions.com`)—translating modern branding into an ultra-fast, motion-rich React platform deployed with zero downtime.
                </motion.p>

                <motion.div
                    {...fadeUp(0.2)}
                    className="mt-4 w-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{ border: "1px solid rgba(77,208,225,0.15)" }}
                >
                    <img
                        src="/Images/SharkEcommerceSolutions.webp"
                        alt="Shark Ecommerce Solutions"
                        className="w-full object-cover"
                    />
                </motion.div>
            </div>
        </div>

        {/* METADATA */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <motion.div
                {...fadeUp()}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl"
                style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
            >
                <MetaItem label="Role" value="Lead UI/UX Designer & Frontend Developer (Full Ownership)" />
                <MetaItem label="Domain" value="Agency Web Presence · B2B E-Commerce Services · Conversion Architecture" />
                <MetaItem label="Tech Stack" value="React · Framer Motion · Tailwind CSS · Vite · Figma · Netlify" />
                <MetaItem label="DevOps & DNS" value="Hostinger to Netlify Migration · Automated Git CI/CD · SSL/TLS" />
            </motion.div>
        </div>

        {/* THE CHALLENGE */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>The Problem</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Digital Roadblocks Before Transformation</h2>
                <p className="text-gray-400 text-sm mt-2 max-w-xl">
                    The agency required an authoritative web presence that matched the scale of enterprise growth services they deliver to online brands.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChallengeCard
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    }
                    title="Generic Visual Identity"
                    desc="Branding blended into a crowded drop-servicing market, lacking the distinctive authority expected by high-volume e-commerce merchants."
                />
                <ChallengeCard
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    }
                    title="Performance & Rigidity"
                    desc="Built on bloated legacy templates with script bloat, generating sluggish load times, layout shifts, and inconsistent mobile responsiveness."
                />
                <ChallengeCard
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                        </svg>
                    }
                    title="Low Conversion Velocity"
                    desc="Service tiers, case studies, and proof points were deeply buried, causing prospective clients to drop off before submitting project briefs."
                />
                <ChallengeCard
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    }
                    title="Infrastructure Disconnect"
                    desc="Domain DNS records and hosting configurations were fragmented across legacy registrar settings, posing major downtime risks during cutover."
                />
            </div>
        </div>

        {/* DESIGN STRATEGY & EXECUTION */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>Design Execution</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Three Strategic Design Pillars</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StrategyCard
                    num="01"
                    title="Bold, Authoritative Aesthetic"
                    points={[
                        "Aggressive high-tech palette: deep dark canvas accented with vivid electric blues and crisp typography.",
                        "Interactive feature bento grids structuring store development, marketing funnels, and marketplace management.",
                        "Clear outcome-focused value propositions replacing generic agency sales copy."
                    ]}
                />
                <StrategyCard
                    num="02"
                    title="Choreographed Micro-Motion"
                    points={[
                        "GPU-accelerated entrance reveals and scroll-linked progress indicators built using Framer Motion.",
                        "Zero scroll fatigue or frame drops through strict render optimization and CSS hardware acceleration.",
                        "Interactive cards with dynamic hover states and deliverable preview overlays."
                    ]}
                />
                <StrategyCard
                    num="03"
                    title="High-Conversion Funnel"
                    points={[
                        "Frictionless multi-step scoping funnel replacing static, intimidating contact forms.",
                        "Instant client classification based on store platform (Shopify, WooCommerce, Amazon), business stage, and growth target.",
                        "Direct routing of qualified briefs to reduce sales response lag."
                    ]}
                />
            </div>
        </div>

        {/* ENGINEERING & ARCHITECTURE */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>Engineering</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Implementation & Architecture</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StrategyCard
                    num="A"
                    title="Atomic React Frontend"
                    points={[
                        "Clean component hierarchy built in React with Tailwind CSS utility architecture.",
                        "Strict tokenized design system for instant consistency across all viewports.",
                        "Modular maintenance framework facilitating future service tier expansions."
                    ]}
                />
                <StrategyCard
                    num="B"
                    title="Zero-Bloat Performance"
                    points={[
                        "Modern bundling powered by Vite with tree-shaking and dynamic code splitting.",
                        "Automated asset pipeline with WebP image formatting and inline SVG iconography.",
                        "Lazy loading of offscreen visual assets for sub-second first contentful paint."
                    ]}
                />
                <StrategyCard
                    num="C"
                    title="DNS & CI/CD Pipeline"
                    points={[
                        "Seamless DNS and nameserver migration from Hostinger to global Netlify edge servers.",
                        "Automated continuous deployment directly linked to Git repository with instant rollback.",
                        "End-to-end SSL/TLS encryption and strict security response headers configured."
                    ]}
                />
            </div>
        </div>

        {/* IMPACT */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>Impact</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Measurable Outcomes & Takeaways</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
                <ImpactCard
                    highlight="100% Fidelity"
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                    title="Unified Design-to-Code Delivery"
                    desc="Taking full dual ownership of both design and engineering eliminated handoff friction, ensuring a flawless 1:1 translation from Figma artboards to production React code."
                />
                <ImpactCard
                    highlight="Sub-Second Speed"
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    }
                    title="Instantaneous Global Performance"
                    desc="Transitioning from legacy hosting to a static-generated React architecture on worldwide edge CDN nodes slashed initial load times and eliminated layout shifts."
                />
                <ImpactCard
                    highlight="Enterprise Trust"
                    icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    }
                    title="Enhanced Commercial Credibility"
                    desc="Delivered an authoritative digital hub showcasing Shark Ecommerce Solutions' technical expertise, establishing immediate trust with inbound enterprise merchant clients."
                />
            </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
            <motion.div
                {...fadeUp()}
                className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
                style={{ background: "rgba(77,208,225,0.06)", border: "1px solid rgba(77,208,225,0.2)" }}
            >
                <div
                    className="pointer-events-none absolute -right-20 -bottom-16 w-64 h-64 rounded-full opacity-20 blur-[80px]"
                    style={{ background: "#4DD0E1" }}
                />
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#4DD0E1] mb-1">
                        Looking for an end-to-end design & frontend engineer?
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black text-white">Let's build something exceptional.</h3>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <a
                        href="https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl font-bold text-sm text-[#0e1a1b] transition-all duration-300 hover:opacity-90 active:scale-95"
                        style={{ background: "linear-gradient(135deg, #4DD0E1, #00BCD4)" }}
                    >
                        Contact Me
                    </a>
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl font-bold text-sm text-gray-300 transition-all duration-300 hover:text-white active:scale-95"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                        View More Work
                    </Link>
                </div>
            </motion.div>
        </div>
    </div>
);

export default CaseStudySharkEcommerce;
