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

const SolutionCard = ({ num, title, desc }) => (
    <motion.div {...fadeUp(num * 0.07)} className="flex gap-4 p-5 rounded-2xl"
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

const CaseStudyVirginLots = () => {
    return (
        <div className="min-h-screen text-white" style={{ background: "#141414" }}>

            {/* ── HERO ── */}
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #4DD0E1, transparent 70%)" }} />
                <div className="pointer-events-none absolute top-10 right-0 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px]"
                    style={{ background: "radial-gradient(circle, #00BCD4, transparent 70%)" }} />

                <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-14 pb-10 flex flex-col gap-5">
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
                        <Tag>PropTech</Tag>
                        <Tag>UI/UX Design</Tag>
                        <Tag>Real Estate</Tag>
                        <Tag>Information Architecture</Tag>
                    </motion.div>

                    <motion.h1 {...fadeUp(0.1)}
                        className="text-4xl md:text-6xl font-black leading-tight"
                        style={{ letterSpacing: "-0.02em" }}>
                        Virgin Lots —{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #4DD0E1, #26C6DA, #80DEEA)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Digital Land
                        </span>
                        <br />Marketplace
                    </motion.h1>

                    <motion.p {...fadeUp(0.15)}
                        className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        A modern PropTech platform for accessible, interest-free land investments — engineered from zero trust signals into a full architecture of buyer confidence.
                    </motion.p>

                    <motion.div {...fadeUp(0.2)}
                        className="mt-4 w-full rounded-2xl overflow-hidden shadow-2xl"
                        style={{ border: "1px solid rgba(77,208,225,0.15)" }}>
                        <img src="/Images/VirginLots.webp" alt="Virgin Lots Project" className="w-full object-cover" />
                    </motion.div>
                </div>
            </div>

            {/* ── METADATA STRIP ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
                <motion.div {...fadeUp()} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <MetaItem label="Role" value="Lead UI/UX Designer & Information Architect" />
                    <MetaItem label="Scope" value="End-to-End Product Design · Web Marketplace · Buyer Checkout · ERP/Admin Modules" />
                    <MetaItem label="Industry" value="Real Estate Tech (PropTech) · Digital Land Sales · Joint Ventures" />
                    <MetaItem label="Tools" value="Figma · FigJam · Interactive Prototyping · Component Design Systems" />
                </motion.div>
            </div>

            {/* ── CHALLENGE ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>The Challenge</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">The Cold-Start Trust Barrier</h2>
                    <p className="text-gray-400 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
                        In real estate, <strong className="text-gray-200">trust is the primary currency</strong>. Competitors rely on hundreds of client video testimonials and established brand legacy to reassure buyers committing thousands of dollars online. As a brand-new business, Virgin Lots had zero legacy testimonials to showcase.
                    </p>
                    <div className="mt-4 inline-block px-4 py-2 rounded-xl text-sm font-medium text-yellow-300"
                        style={{ background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.2)" }}>
                        We had to construct an airtight architecture of trust from first click to deed transfer.
                    </div>
                </motion.div>
                <div className="flex flex-col gap-4">
                    <ChallengeCard
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
                        title="Zero Social Proof"
                        desc="No historical client testimonials, no review widgets, no brand legacy — the standard industry playbook was unavailable for a cold-start launch." />
                    <ChallengeCard
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        title="High-Stakes Purchase Anxiety"
                        desc="Land acquisition involves significant capital and legal commitments. Buyer hesitation is exceptionally high — every friction point bleeds conversion." />
                    <ChallengeCard
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>}
                        title="Platform Complexity"
                        desc="Covering buyer discovery, multi-step checkouts, seller/JV listings, and operational ERP modules — all needing enterprise security with frictionless simplicity." />
                </div>
            </div>

            {/* ── TRUST STRATEGY ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>UX Strategy</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Engineered Trust Signals</h2>
                    <p className="text-gray-400 mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                        To convert cautious visitors into confident land buyers without legacy social proof, I designed an upfront credibility system integrated into the global UX layout.
                    </p>
                </motion.div>
                <div className="flex flex-col gap-4">
                    <SolutionCard num={1} title="Humanizing the Brand at First Fold — Founder Video Header"
                        desc="Instead of stock imagery, the hero section immediately presents an authentic, high-definition Founder Video Message. A real, accountable human face at the apex of the site established accountability and disarmed initial skepticism before the user even scrolled." />
                    <SolutionCard num={2} title="Prominent Risk-Reversal Value Guarantees"
                        desc="30-Day Money-Back Guarantee embedded in property cards and checkout modals. Secure Escrow Closing certifications and 100% Direct Deed Transfer guides — plain-English visual milestones removing decision paralysis at every step." />
                    <SolutionCard num={3} title="Radically Simplified, Friction-Free Navigation"
                        desc="Frictionless parcel discovery with clear visual maps, clean pricing breakdowns (cash vs. installment), and unambiguous boundary previews. Single-path checkout with no hidden fees, instant calculators, and real-time document signing previews." />
                    <SolutionCard num={4} title="Zero Jargon Policy"
                        desc="Complex escrow terminology transformed into accessible, visual milestones guiding users step-by-step through property acquisition — legal disclosures that feel transparent rather than intimidating." />
                </div>
            </div>

            {/* ── DESIGN SYSTEM ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>Design System</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Visual Hierarchy & Language</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                            title: "Color Psychology",
                            desc: "Deep navy/slate tones (stability, authority, security) accented with emerald greens (growth, verification, secure status indicators)."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" /></svg>,
                            title: "Information Scannability",
                            desc: "Visual badges distinguish property status, title warranty types, and payment models at a glance — no reading required."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                            title: "Typography & Layout",
                            desc: "High-contrast sans-serif hierarchy paired with generous whitespace ensuring legal disclosures feel transparent — never buried or intimidating."
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

            {/* ── IMPACT ── */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <motion.div {...fadeUp()} className="mb-8">
                    <SectionLabel>Impact</SectionLabel>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Key Takeaways</h2>
                </motion.div>
                <div className="flex flex-col gap-4">
                    {[
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                            title: "Turned Cold-Start Deficit into a Strength",
                            desc: "By substituting absent testimonials with structural transparency, founder accountability, and explicit guarantees, Virgin Lots positioned itself as a modern, trustworthy alternative to opaque land brokerages."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                            title: "Effortless Navigational Clarity",
                            desc: "User testing demonstrated rapid time-to-discovery — prospective investors could pinpoint land parcels, verify deed status, and complete reservation deposits in minimal clicks."
                        },
                        {
                            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                            title: "Production-Ready Design System",
                            desc: "Delivered a comprehensive, responsive component library empowering engineering teams to build both the customer-facing frontend and internal transaction engines with complete consistency."
                        },
                    ].map((item, i) => (
                        <motion.div key={i} {...fadeUp(i * 0.08)} className="flex gap-4 p-5 rounded-2xl"
                            style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.15)" }}>
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-400"
                                style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── CTA ── */}
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

export default CaseStudyVirginLots;
