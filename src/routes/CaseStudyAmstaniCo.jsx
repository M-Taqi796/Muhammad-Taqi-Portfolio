import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut", delay },
});

const SectionLabel = ({ children }) => (
    <span className="inline-block px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4"
        style={{ background: "rgba(77,208,225,0.12)", color: "#4DD0E1", border: "1px solid rgba(77,208,225,0.3)" }}>
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
    <span className="px-3 py-1 text-xs font-semibold rounded-full"
        style={{ background: "rgba(77,208,225,0.08)", color: "#4DD0E1", border: "1px solid rgba(77,208,225,0.2)" }}>
        {children}
    </span>
);

const ChallengeCard = ({ icon, title, desc }) => (
    <motion.div {...fadeUp(0.08)} className="flex gap-4 p-5 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,100,100,0.15)" }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-red-400"
            style={{ background: "rgba(255,100,100,0.08)", border: "1px solid rgba(255,100,100,0.2)" }}>
            {icon}
        </div>
        <div>
            <p className="font-bold text-white text-sm mb-1">{title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const StrategyCard = ({ num, title, points }) => (
    <motion.div {...fadeUp(num * 0.07)} className="p-5 rounded-2xl flex flex-col gap-3"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(77,208,225,0.12)" }}>
        <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-[#4DD0E1] flex-shrink-0"
                style={{ background: "rgba(77,208,225,0.1)", border: "1px solid rgba(77,208,225,0.25)" }}>
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
    <motion.div {...fadeUp(0.08)} className="flex gap-4 p-5 rounded-2xl"
        style={{ background: "rgba(77,208,225,0.04)", border: "1px solid rgba(77,208,225,0.15)" }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-[#4DD0E1]"
            style={{ background: "rgba(77,208,225,0.1)", border: "1px solid rgba(77,208,225,0.2)" }}>
            {icon}
        </div>
        <div>
            <p className="font-bold text-white text-sm mb-1">
                {title}
                {highlight && <span className="ml-2 px-2 py-0.5 text-[10px] font-bold rounded-full text-yellow-300"
                    style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.25)" }}>
                    {highlight}
                </span>}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const CaseStudyAmstaniCo = () => (
    <div className="min-h-screen text-white" style={{ background: "#141414" }}>

        {/* HERO */}
        <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
                style={{ background: "radial-gradient(circle, #4DD0E1, transparent 70%)" }} />
            <div className="pointer-events-none absolute top-10 right-0 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px]"
                style={{ background: "radial-gradient(circle, #00BCD4, transparent 70%)" }} />

            <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-10 flex flex-col gap-5">
                <motion.div {...fadeUp()}>
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4DD0E1] transition-colors duration-300 group">
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                </motion.div>

                <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-2">
                    <Tag>E-Commerce</Tag>
                    <Tag>Multi-Vendor Marketplace</Tag>
                    <Tag>UI/UX Design</Tag>
                    <Tag>Textile & Fashion</Tag>
                </motion.div>

                <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-black leading-tight" style={{ letterSpacing: "-0.02em" }}>
                    Amstani & Co —{" "}
                    <span style={{ background: "linear-gradient(90deg, #4DD0E1, #26C6DA, #80DEEA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Multi-Vendor
                    </span>
                    <br />Textile Marketplace
                </motion.h1>

                <motion.p {...fadeUp(0.15)} className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
                    A US-focused digital multi-vendor marketplace bridging independent textile manufacturers, boutique suppliers, and retail consumers — delivered with a 33% bonus tip for exceptional execution.
                </motion.p>

                <motion.div {...fadeUp(0.2)} className="mt-4 w-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{ border: "1px solid rgba(77,208,225,0.15)" }}>
                    <img src="/Images/AmstaniCo.webp" alt="Amstani & Co" className="w-full object-cover" />
                </motion.div>
            </div>
        </div>

        {/* METADATA */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            <motion.div {...fadeUp()} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <MetaItem label="Role" value="Lead UI/UX Designer & Information Architect" />
                <MetaItem label="Platform" value="Web Application · Responsive Desktop/Mobile Marketplace" />
                <MetaItem label="Domain" value="E-Commerce · Multi-Vendor Marketplace · Textile & Fashion Retail" />
                <MetaItem label="Key Artifacts" value="Storefront · Vendor Engine · Super Admin Dashboard · Interactive Prototypes" />
            </motion.div>
        </div>

        {/* HIGHLIGHT STAT */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-12">
            <motion.div {...fadeUp()} className="flex items-center gap-5 p-6 rounded-2xl"
                style={{ background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.2)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-yellow-300 flex-shrink-0 text-2xl font-black"
                    style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.25)" }}>
                    +33%
                </div>
                <div>
                    <p className="font-bold text-white text-base">Bonus Tip Awarded by Client</p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-0.5">
                        The client praised the balance of visual elegance and functional clarity, awarding a <strong className="text-yellow-300">33% bonus tip</strong> on top of the contracted agreement upon final delivery.
                    </p>
                </div>
            </motion.div>
        </div>

        {/* CHALLENGE */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>The Challenge</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Multi-Vendor UX Complexity</h2>
                <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                    Multi-vendor marketplaces present steep UX hurdles compared to standard direct-to-consumer stores — three distinct user personas, each with entirely different needs.
                </p>
            </motion.div>
            <div className="flex flex-col gap-4">
                <ChallengeCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>}
                    title="Asymmetrical User Journeys"
                    desc="The platform had to serve casual retail buyers, boutique sellers managing catalogs, and platform operators needing micro-level commission control — simultaneously, without conflict." />
                <ChallengeCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h7" /></svg>}
                    title="Textile Product Complexity"
                    desc="Fabric goods demand clear communication around materials, weave, sizing metrics, wash care, and bulk variant selections — all without creating visual clutter." />
                <ChallengeCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
                    title="Onboarding Friction"
                    desc="Complex merchant verification workflows — banking, tax setup, and listing approvals — often cause vendor drop-off before a single product is ever published." />
            </div>
        </div>

        {/* STRATEGY */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>Design Strategy</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">UX & Architecture Breakdown</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
                <StrategyCard num={1} title="Premium Consumer Storefront & Landing Experience" points={[
                    "Editorial, high-end visual tone with refined serif headings and balanced negative space emphasizing fabric textures.",
                    "Multi-layered filtering hierarchy: fabric type, GSM weight, weave pattern, occasion, and price — effortless wide-collection navigation.",
                    "Visual material breakdown badges, interactive variant matrices, and transparent delivery estimates directly beside the checkout trigger.",
                ]} />
                <StrategyCard num={2} title="Streamlined Vendor Onboarding & Store Engine" points={[
                    "Business verification, banking, and tax setup transformed into a visual progress-tracked onboarding wizard — drastically reducing cognitive load.",
                    "Lightweight inventory upload system tailored for textile variations: colorways, dimensions, roll/yard sizing — no technical expertise required.",
                ]} />
                <StrategyCard num={3} title="Enterprise Super Admin Dashboard" points={[
                    "Data-dense modules monitoring platform GMV, commission payouts, active dispute resolutions, and vendor approval queues.",
                    "Modular permission systems for reviewing flagged listings, managing automated tax allocations, and auditing store performance metrics.",
                ]} />
            </div>
        </div>

        {/* DESIGN SYSTEM */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>Design System</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Visual Foundation</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    {
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                        title: "Palette",
                        desc: "Sophisticated warm neutrals and charcoal bases accented with muted earth tones, letting varied vendor imagery and vibrant fabric palettes take center stage.",
                    },
                    {
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                        title: "Component Architecture",
                        desc: "Atomic design system in Figma with auto-layout-driven modules ensuring full responsiveness across mobile, tablet, and ultra-wide displays.",
                    },
                    {
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>,
                        title: "Micro-Interactions",
                        desc: "Subtle hover states, smooth drawer-based cart previews, and clear toast notifications providing instant feedback across all transaction states.",
                    },
                ].map((item, i) => (
                    <motion.div key={i} {...fadeUp(i * 0.07)} className="flex flex-col gap-3 p-5 rounded-2xl"
                        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                        whileHover={{ borderColor: "rgba(77,208,225,0.3)", background: "rgba(77,208,225,0.04)" }}>
                        <span className="text-[#4DD0E1]">{item.icon}</span>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* IMPACT */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <motion.div {...fadeUp()} className="mb-8">
                <SectionLabel>Impact</SectionLabel>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Client Impact & Key Takeaways</h2>
            </motion.div>
            <div className="flex flex-col gap-4">
                <ImpactCard
                    highlight="+33% Bonus Tip"
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                    title="Exceptional Client Satisfaction"
                    desc="The client praised the balance of visual elegance and functional clarity, awarding an immediate 33% bonus tip on top of the contracted agreement upon final delivery." />
                <ImpactCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    title="Reduced Vendor Drop-Off"
                    desc="The modular onboarding wizard eliminated friction for non-technical vendors, paving the way for smooth merchant adoption and faster store publication." />
                <ImpactCard
                    icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                    title="Scalable Marketplace Core"
                    desc="Delivered an end-to-end blueprint enabling Amstani & Co to scale their vendor base without re-architecting user flows or administrative infrastructure." />
            </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
            <motion.div {...fadeUp()} className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
                style={{ background: "rgba(77,208,225,0.06)", border: "1px solid rgba(77,208,225,0.2)" }}>
                <div className="pointer-events-none absolute -right-20 -bottom-16 w-64 h-64 rounded-full opacity-20 blur-[80px]"
                    style={{ background: "#4DD0E1" }} />
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#4DD0E1] mb-1">Want to build something like this?</p>
                    <h3 className="text-2xl md:text-3xl font-black text-white">Let's work together.</h3>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <a href="https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you." target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl font-bold text-sm text-[#0e1a1b] transition-all duration-300 hover:opacity-90 active:scale-95"
                        style={{ background: "linear-gradient(135deg, #4DD0E1, #00BCD4)" }}>
                        Contact Me
                    </a>
                    <Link to="/" className="px-6 py-3 rounded-xl font-bold text-sm text-gray-300 transition-all duration-300 hover:text-white active:scale-95"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                        View More Work
                    </Link>
                </div>
            </motion.div>
        </div>
    </div>
);

export default CaseStudyAmstaniCo;
