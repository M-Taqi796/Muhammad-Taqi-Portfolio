import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ─── Animation helpers ─── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut", delay },
});

/* ─── Small reusable pieces ─── */
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

const StatCard = ({ value, label }) => (
    <motion.div {...fadeUp(0.1)}
        className="flex flex-col items-center gap-1 px-6 py-5 rounded-2xl text-center"
        style={{ background: "rgba(77,208,225,0.06)", border: "1px solid rgba(77,208,225,0.18)" }}>
        <span className="text-3xl md:text-4xl font-extrabold text-[#4DD0E1]">{value}</span>
        <span className="text-xs text-gray-400 font-medium leading-tight max-w-[110px]">{label}</span>
    </motion.div>
);

const ProblemCard = ({ icon, title, desc }) => (
    <motion.div {...fadeUp(0.1)} className="flex gap-4 p-5 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-red-400"
            style={{ background: "rgba(255,100,100,0.1)", border: "1px solid rgba(255,100,100,0.2)" }}>
            {icon}
        </div>
        <div>
            <p className="font-bold text-white text-sm mb-1">{title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const SolutionCard = ({ num, title, desc }) => (
    <motion.div {...fadeUp(num * 0.08)} className="flex gap-4 p-5 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(77,208,225,0.12)" }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-base text-[#4DD0E1]"
            style={{ background: "rgba(77,208,225,0.1)", border: "1px solid rgba(77,208,225,0.25)" }}>
            {num}
        </div>
        <div>
            <p className="font-bold text-white text-sm mb-1">{title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const Tag = ({ children }) => (
    <span className="px-3 py-1 text-xs font-semibold rounded-full"
        style={{ background: "rgba(77,208,225,0.08)", color: "#4DD0E1", border: "1px solid rgba(77,208,225,0.2)" }}>
        {children}
    </span>
);

/* ─── Architecture diagram ─── */
const ArchDiagram = () => (
    <div className="overflow-x-auto">
        <div className="min-w-[560px] flex flex-col gap-3 p-6 rounded-2xl font-mono text-xs"
            style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1.5 rounded-lg text-[#4DD0E1]" style={{ background: "rgba(77,208,225,0.12)", border: "1px solid rgba(77,208,225,0.25)" }}>GPS Telemetry / Location Services</span>
                <span className="text-gray-500">──▶</span>
                <span className="px-3 py-1.5 rounded-lg text-yellow-300" style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.25)" }}>Node.js / Express WebSockets</span>
                <span className="text-gray-500">──▶</span>
                <span className="px-3 py-1.5 rounded-lg text-purple-300" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)" }}>Real-Time Map Engine</span>
            </div>
            <div className="pl-[60px] text-gray-500">│</div>
            <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1.5 rounded-lg text-green-300" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>Student & Driver Apps (React Native)</span>
                <span className="text-gray-500">◀──</span>
                <span className="px-3 py-1.5 rounded-lg text-blue-300" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)" }}>REST API / MongoDB</span>
                <span className="text-gray-500">◀──</span>
                <span className="text-gray-500 italic">Map Engine feeds</span>
            </div>
            <div className="pl-[60px] text-gray-500">│</div>
            <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1.5 rounded-lg text-orange-300" style={{ background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.25)" }}>Admin Portal (React)</span>
                <span className="text-gray-500">+</span>
                <span className="px-3 py-1.5 rounded-lg text-pink-300" style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.25)" }}>MTO Portal (React)</span>
                <span className="text-gray-500">+</span>
                <span className="px-3 py-1.5 rounded-lg text-cyan-200" style={{ background: "rgba(165,243,252,0.08)", border: "1px solid rgba(165,243,252,0.2)" }}>Landing Page (React)</span>
            </div>
        </div>
    </div>
);

/* ─── Main component ─── */
const CaseStudyUniGo = () => {
    return (
        <div className="min-h-screen text-white" style={{ background: "#141414" }}>

            {/* ── HERO ── */}
            <div className="relative overflow-hidden">
                {/* Glow blobs */}
                <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #4DD0E1, transparent 70%)" }} />
                <div className="pointer-events-none absolute top-10 right-0 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px]"
                    style={{ background: "radial-gradient(circle, #00BCD4, transparent 70%)" }} />

                <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-10 flex flex-col gap-5">
                    {/* Back link */}
                    <motion.div {...fadeUp()}>
                        <Link to="/"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#4DD0E1] transition-colors duration-300 group">
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Portfolio
                        </Link>
                    </motion.div>

                    <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-2">
                        <Tag>Final Year Project</Tag>
                        <Tag>UI/UX Design</Tag>
                        <Tag>Full-Stack Development</Tag>
                        <Tag>Mobile App</Tag>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.1)}
                        className="text-4xl md:text-6xl font-black leading-tight tracking-tight"
                        style={{ letterSpacing: "-0.02em" }}>
                        UniGo —{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #4DD0E1, #26C6DA, #80DEEA)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Smart Campus
                        </span>
                        <br />Transit Ecosystem
                    </motion.h1>

                    <motion.p {...fadeUp(0.15)}
                        className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        A full-stack campus transit platform engineered to modernize university commuting—delivering real-time tracking, 96% accurate seat prediction, and contactless digital boarding across five integrated products.
                    </motion.p>

                    {/* Hero image */}
                    <motion.div {...fadeUp(0.2)}
                        className="mt-4 w-full rounded-2xl overflow-hidden shadow-2xl"
                        style={{ border: "1px solid rgba(77,208,225,0.15)" }}>
                        <img src="/Images/UniGo.webp" alt="UniGo Project" className="w-full object-cover" />
                    </motion.div>
                </div>
            </div>

            {/* ── METADATA STRIP ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
                <motion.div {...fadeUp()} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <MetaItem label="Role" value="Lead UI/UX Designer & Full-Stack Developer" />
                    <MetaItem label="Project Type" value="Final Year Project (B.S. Software Engineering)" />
                    <MetaItem label="Scope" value="Landing Page · MTO Portal · Admin Portal · Student App · Driver App" />
                    <MetaItem label="Tech Stack" value="React · React Native · Node.js · MongoDB · Figma · Google Maps API" />
                </motion.div>
            </div>

            {/* ── IMPACT STATS ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-6">
                    <SectionLabel>Impact</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Results That Mattered</h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard value="10s → 2s" label="Boarding verification time per passenger" />
                    <StatCard value="96%" label="Seat prediction accuracy" />
                    <StatCard value="Live" label="Real-time GPS tracking coverage" />
                    <StatCard value="A Grade" label="Awarded in Final Year Project" />
                </div>
            </div>

            {/* ── PROBLEM ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>The Problem</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Campus Transit Was Broken</h2>
                    <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                        University campus transit systems suffer from operational opacity and friction that erodes the student commuting experience daily.
                    </p>
                </motion.div>
                <div className="flex flex-col gap-4">
                    <ProblemCard
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Commuter Anxiety"
                        desc="Students face long, unpredictable wait times at shuttle stops without any insight into delays, vehicle locations, or remaining seats." />
                    <ProblemCard
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>}
                        title="Overcrowding & Bottlenecks"
                        desc="Peak departure hours cause physical crowding at boarding gates, compounded by slow manual ticket or ID verification." />
                    <ProblemCard
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                        title="Fleet Blindspots"
                        desc="Transport administrators lack actionable data on route efficiency, active occupancy rates, and vehicle scheduling." />
                </div>
            </div>

            {/* ── SOLUTION ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>The Solution</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">A Coordinated Digital Ecosystem</h2>
                    <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                        UniGo bridges physical shuttle operations with digital intelligence through three tightly coordinated layers.
                    </p>
                </motion.div>
                <div className="flex flex-col gap-4">
                    <SolutionCard num={1} title="Landing Page"
                        desc="A public-facing marketing site communicating UniGo's value proposition to universities and commuters, with clear calls-to-action." />
                    <SolutionCard num={2} title="MTO Portal"
                        desc="A dedicated web portal for Mass Transit Operations (MTO) staff to configure routes, manage schedules, and monitor fleet performance in real time." />
                    <SolutionCard num={3} title="Admin Portal"
                        desc="University admin dashboard for managing user registrations, transport passes, route assignments, and peak-volume analytics." />
                    <SolutionCard num={4} title="Passenger / Student App"
                        desc="Cross-platform mobile app showing live shuttle maps, ETAs, QR boarding passes, and predictive seat availability counters — all within two taps." />
                    <SolutionCard num={5} title="Driver App"
                        desc="Streamlined driver-facing interface for scan-and-go QR validation, active route view, and passenger count tracking with audio feedback." />
                </div>
            </div>

            {/* ── DESIGN PROCESS ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>Design Process</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Strategy & Execution</h2>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {/* Step 1 */}
                    <motion.div {...fadeUp()} className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                style={{ background: "rgba(77,208,225,0.15)", border: "1.5px solid #4DD0E1", color: "#4DD0E1" }}>1</div>
                            <div className="w-px flex-1 mt-2" style={{ background: "rgba(255,255,255,0.07)" }} />
                        </div>
                        <div className="pb-8">
                            <h3 className="font-bold text-white text-base mb-2">User Research & Pain Point Mapping</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                Field interviews and commuter journey mapping revealed students interact with the app in
                                <strong className="text-gray-200"> high-distraction, time-critical environments</strong> — walking briskly to a stop while checking ETAs.
                            </p>
                            <div className="inline-block px-3 py-1.5 rounded-xl text-xs text-yellow-300 font-medium"
                                style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.2)" }}>
                                Key Requirement: Critical data accessible in under 2 taps
                            </div>
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div {...fadeUp(0.05)} className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                style={{ background: "rgba(77,208,225,0.15)", border: "1.5px solid #4DD0E1", color: "#4DD0E1" }}>2</div>
                            <div className="w-px flex-1 mt-2" style={{ background: "rgba(255,255,255,0.07)" }} />
                        </div>
                        <div className="pb-8">
                            <h3 className="font-bold text-white text-base mb-2">Information Architecture & Wireframing</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                Prioritized a <strong className="text-gray-200">persistent map view</strong> overlaid with swipeable bottom sheets for quick route selection without switching context. Color-coded occupancy indicators (Green / Amber / Red) allow at-a-glance capacity assessment.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div {...fadeUp(0.1)} className="flex gap-5">
                        <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                                style={{ background: "rgba(77,208,225,0.15)", border: "1.5px solid #4DD0E1", color: "#4DD0E1" }}>3</div>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base mb-2">High-Fidelity UI Execution</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Built on a clean typography system, high-contrast dark/light balance, and an 8pt grid for legibility in direct sunlight. Micro-interactions with haptic feedback on successful QR scans reduce terminal boarding anxiety.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── TECHNICAL ARCHITECTURE ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>Engineering</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Architecture</h2>
                </motion.div>
                <motion.div {...fadeUp(0.05)} className="mb-8">
                    <ArchDiagram />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "Live Telemetry & Geolocation", desc: "Real-time GPS tracking via WebSockets and location streaming for low-latency vehicle movement on the map." },
                        { title: "Seat Availability Prediction", desc: "Occupancy tracking model based on boarding and deboarding event logs to calculate real-time available capacity." },
                        { title: "Digital Authentication Engine", desc: "Encrypted, refresh-keyed QR passes preventing unauthorized sharing while maintaining rapid offline verification fallback." },
                        { title: "Scalable Data Layer", desc: "Modular data schemas handling route schedules, active vehicle assignments, and peak demand time-series logs." },
                    ].map((item, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.07)} className="p-5 rounded-2xl"
                            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                            <p className="font-bold text-white text-sm mb-1.5">{item.title}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── KEY FEATURES ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>Features</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Key Deliverables</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" /></svg>,
                            title: "Live Shuttle Tracking",
                            desc: "Vector-rendered route maps with active vehicle nodes and dynamic arrival countdowns."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                            title: "Smart Seat Forecasting",
                            desc: "Real-time occupancy gauges alerting passengers before the bus arrives, with 96% accuracy."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>,
                            title: "Instant QR Boarding",
                            desc: "One-tap student access pass with cryptographic token renewal and offline fallback."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                            title: "Driver App",
                            desc: "Streamlined scan-and-go QR validation interface with audio feedback for rapid boarding throughput."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                            title: "MTO & Admin Portals",
                            desc: "Centralized web dashboards for route management, schedule adherence, fleet monitoring, and user administration."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
                            title: "Public Landing Page",
                            desc: "Marketing website communicating UniGo's value to universities, with onboarding flows and feature highlights."
                        },
                    ].map((f, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.06)} className="flex flex-col gap-2.5 p-5 rounded-2xl transition-colors duration-300"
                            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                            whileHover={{ borderColor: "rgba(77,208,225,0.3)", background: "rgba(77,208,225,0.04)" }}>
                            <span className="text-[#4DD0E1]">{f.icon}</span>
                            <p className="font-bold text-white text-sm">{f.title}</p>
                            <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── CLOSING CTA ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
                <motion.div {...fadeUp()}
                    className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
                    style={{ background: "rgba(77,208,225,0.06)", border: "1px solid rgba(77,208,225,0.2)" }}>
                    <div className="pointer-events-none absolute -right-20 -bottom-16 w-64 h-64 rounded-full opacity-20 blur-[80px]"
                        style={{ background: "#4DD0E1" }} />
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#4DD0E1] mb-1">Want to build something like this?</p>
                        <h3 className="text-2xl md:text-3xl font-black text-white">Let's work together.</h3>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center">
                        <a href="https://wa.me/923219747270?text=Hello!%20I%20want%20to%20hire%20you."
                            target="_blank" rel="noopener noreferrer"
                            className="px-6 py-3 rounded-xl font-bold text-sm text-[#0e1a1b] transition-all duration-300 hover:opacity-90 active:scale-95"
                            style={{ background: "linear-gradient(135deg, #4DD0E1, #00BCD4)" }}>
                            Contact Me
                        </a>
                        <Link to="/"
                            className="px-6 py-3 rounded-xl font-bold text-sm text-gray-300 transition-all duration-300 hover:text-white active:scale-95"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                            View More Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CaseStudyUniGo;
