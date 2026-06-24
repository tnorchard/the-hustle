import { useState, useEffect, useCallback } from "react";
import { Instagram, Linkedin, ArrowUpRight, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import imgGroup2019 from "../assets/group-2019-stairs.png";
import imgGroup2022 from "../assets/group-2022.png";
import imgBrit from "../assets/brit-wrightson.png";
import imgDexter from "../assets/dexter-norales.png";
import imgNina from "../assets/nina-olmstead.png";
import imgNoah from "../assets/noah-headshot.png";
import logo from "../assets/logo.png";
import galleryMesseroux from "../assets/gallery-messeroux-guest-2022.png";
import gallerySweatsuitPitch from "../assets/gallery-sweatsuit-pitch.png";
import galleryNoahGroup from "../assets/gallery-noah-and-group-2022.png";
import galleryWorkshop2019 from "../assets/gallery-workshop-2019.png";
import gallerySweatsuitSketch from "../assets/gallery-sweatsuit-sketch.png";

/* ─── Links ───────────────────────────────────────────────── */
const LINKS = {
  donate: "https://givebutter.com/thehustle26-27",
  instagram: "https://www.instagram.com/thehustlepresents/",
  linkedin:
    "https://www.linkedin.com/company/thehustlepresents/posts/?feedView=all",
  contact: "mailto:Brit@thehustle.org",
  syep: "https://www.nyc.gov/site/dycd/services/summer-youth-employment-program-syep.page",
  wlg: "https://www.nyc.gov/site/dycd/services/jobs-internships/work-learn-grow-employment-program.page",
};

const MISSION =
  "The mission at The Hustle is to create a space to teach skills and provide opportunities for students who are interested in entrepreneurship and business.";

/* ─── Utility ─────────────────────────────────────────────── */
const f = {
  display: "'Bricolage Grotesque', 'Arial Black', sans-serif",
  serif: "'Instrument Serif', Georgia, serif",
  mono: "'DM Mono', monospace",
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="The Hustle"
      className={`w-auto object-contain ${className}`}
    />
  );
}

/* ─── Social links (corner) ───────────────────────────────── */
function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-white/60 hover:text-[#ff5500] transition-colors"
      >
        <Instagram size={18} strokeWidth={1.5} />
      </a>
      <a
        href={LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white/60 hover:text-[#ff5500] transition-colors"
      >
        <Linkedin size={18} strokeWidth={1.5} />
      </a>
    </div>
  );
}

/* ─── Marquee ─────────────────────────────────────────────── */
function Marquee({ text, bg, color }: { text: string; bg: string; color: string }) {
  const items = Array(10).fill(text);
  return (
    <div className="overflow-hidden py-3" style={{ backgroundColor: bg }}>
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: "marquee 20s linear infinite",
          fontFamily: f.display,
          fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
          fontWeight: 700,
          letterSpacing: "0.2em",
          color,
        }}
      >
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex-shrink-0 flex items-center gap-10">
            {t}
            <span style={{ color: "#ff5500", fontSize: "0.6em" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

/* ─── Navbar ──────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", id: "home" },
    { label: "Our Program", id: "program" },
    { label: "Our History", id: "history" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,11,11,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="cursor-pointer"
          aria-label="The Hustle — Home"
        >
          <Logo className="h-11" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
              style={{ fontFamily: f.display, fontWeight: 500 }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={LINKS.donate}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-bold text-white rounded-full transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#ff5500", fontFamily: f.display, letterSpacing: "0.05em" }}
          >
            Get Involved
          </a>
        </nav>

        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0b] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                scrollTo(l.id);
                setOpen(false);
              }}
              className="text-left text-lg text-white/80 hover:text-white cursor-pointer"
              style={{ fontFamily: f.serif }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={LINKS.donate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-left text-lg text-[#ff5500] font-bold"
            style={{ fontFamily: f.display }}
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imgGroup2022}
          alt="The Hustle students posing together"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,11,11,0.92) 0%, rgba(11,11,11,0.65) 50%, rgba(11,11,11,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-6 pb-16 pt-32">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: f.mono }}
          >
            Est. 2020
          </span>
          <span className="w-12 h-px bg-[#ff5500]" />
          <span
            className="text-white/50 text-xs font-medium tracking-widest uppercase"
            style={{ fontFamily: f.mono }}
          >
            San Francisco &amp; New York
          </span>
        </div>

        <h1
          className="text-white leading-[0.92] mb-8"
          style={{
            fontFamily: f.display,
            fontWeight: 800,
            fontSize: "clamp(4rem, 12vw, 10rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Build Your
          <br />
          <span style={{ color: "#ff5500", fontStyle: "italic", fontFamily: f.serif }}>
            Future.
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 justify-between">
          <p
            className="text-white/60 max-w-lg leading-relaxed"
            style={{ fontFamily: f.display, fontSize: "1.05rem", fontWeight: 400 }}
          >
            {MISSION}
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => scrollTo("program")}
              className="group flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ background: "#ff5500", fontFamily: f.display }}
            >
              Our Program
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
            <a
              href={LINKS.donate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white border border-white/20 transition-all hover:border-white/50"
              style={{ fontFamily: f.display }}
            >
              Donate
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-4 px-6 pb-6 max-w-7xl mx-auto w-full">
        <span
          className="text-white/30 text-xs font-medium tracking-widest uppercase"
          style={{ fontFamily: f.mono }}
        >
          Follow
        </span>
        <SocialLinks />
      </div>
    </section>
  );
}

/* ─── Donate ──────────────────────────────────────────────── */
const DONATE_BLURB = [
  "For the last five years, I've poured my own time, energy, and resources into making The Hustle a reality with minimal outside funding. And despite that, I've already seen incredible success stories take shape — students who started businesses, landed life-changing internships, and gained the confidence to chase bigger dreams. These students have carried these skills into every corner of their lives, and many are now mentoring the current students in the program.",
  "The Hustle teaches young people ages 16 to 24 the entrepreneurial and professional skills to chase their goals — whether that's college, a first internship, a job, or building something of their own. This summer, at least 50 students will complete our remote program through New York City's Summer Youth Employment Program, getting paid as interns while they learn. Some are returning faces from last summer. Many are discovering The Hustle for the very first time. Over the past year alone, we've taught more than 50 young people — and we're only growing.",
  "Here's the part I don't usually say out loud: all of this has been built and run by one person — me. I teach every live session, create the curriculum, recruit the students, manage our SYEP partnerships, book guest speakers, build and attempt to maintain the website, and keep the whole thing standing. And we can't keep growing on passion alone.",
  "A small group of early believers helped us get off the ground years ago, and I've never forgotten it. Now, as we grow, I'm asking our community to help us build something that lasts.",
  "This is our biggest fundraising campaign yet, and we're raising $300,000 — a full annual operating budget that, for the first time in The Hustle's history, pays me a real salary and builds the team around me: coaches, curriculum specialists, a grant writer, and the tools to reach even more students next year.",
  "Your gift doesn't just keep the lights on. It turns a labor of love into a sustainable organization that can serve hundreds of young people for years to come.",
];

function Donate() {
  return (
    <section id="donate" className="py-24 border-b border-white/08">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <span
              className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: f.mono }}
            >
              Fundraising Campaign
            </span>
            <h2
              className="text-white mt-3 mb-3 leading-tight"
              style={{
                fontFamily: f.display,
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.025em",
              }}
            >
              The Hustle — 25&apos;-26&apos;
            </h2>
            <p
              className="text-white/80 mb-10 leading-snug"
              style={{
                fontFamily: f.serif,
                fontStyle: "italic",
                fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              }}
            >
              Five years of hustle. It&apos;s time to invest in what&apos;s next.
            </p>

            <div className="flex flex-col gap-6">
              {DONATE_BLURB.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-white/60 leading-relaxed"
                  style={{ fontFamily: f.display, fontSize: "1.05rem" }}
                >
                  {paragraph}
                </p>
              ))}
              <p
                className="text-white font-semibold leading-relaxed"
                style={{ fontFamily: f.display, fontSize: "1.05rem" }}
              >
                Help me build what I&apos;ve only dreamed of. Donate today.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-28 flex flex-col gap-6">
            <div
              className="rounded-2xl border border-white/08 p-8"
              style={{ background: "#141414" }}
            >
              <p
                className="text-[#ff5500] text-xs font-bold tracking-widest uppercase mb-2"
                style={{ fontFamily: f.mono }}
              >
                Fundraising Goal
              </p>
              <p
                className="text-white text-4xl font-black mb-1"
                style={{ fontFamily: f.display, letterSpacing: "-0.03em" }}
              >
                $300,000
              </p>
              <p
                className="text-white/45 text-sm mb-8"
                style={{ fontFamily: f.display }}
              >
                Full annual operating budget for 25&apos;-26&apos;
              </p>
              <a
                href={LINKS.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "#ff5500", fontFamily: f.display, letterSpacing: "0.05em" }}
              >
                Donate Now
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href={LINKS.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#ff5500] text-xs font-bold hover:text-white transition-colors inline-flex items-center gap-1.5"
                style={{ fontFamily: f.mono }}
              >
                givebutter.com/thehustle26-27
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div
              className="rounded-2xl border border-white/08 p-8"
              style={{ background: "#141414" }}
            >
              <p
                className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4"
                style={{ fontFamily: f.mono }}
              >
                Organized by
              </p>
              <p
                className="text-white font-bold mb-4"
                style={{ fontFamily: f.display }}
              >
                The Hustle Presents
              </p>
              <p
                className="text-white/45 text-sm leading-relaxed mb-4"
                style={{ fontFamily: f.display }}
              >
                501(c)(3) Public Charity · EIN 88-3695077
              </p>
              <a
                href="mailto:brit@thehustle.org"
                className="text-[#ff5500] text-sm hover:text-white transition-colors"
                style={{ fontFamily: f.display }}
              >
                brit@thehustle.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Our Program ─────────────────────────────────────────── */
function Program() {
  return (
    <section id="program" className="py-24 max-w-7xl mx-auto px-6">
      <span
        className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
        style={{ fontFamily: f.mono }}
      >
        What We Do
      </span>
      <h2
        className="text-white mt-3 mb-8 leading-tight"
        style={{
          fontFamily: f.display,
          fontWeight: 800,
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.025em",
        }}
      >
        Our Program
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <p
            className="text-white/60 leading-relaxed"
            style={{ fontFamily: f.display, fontSize: "1.05rem" }}
          >
            The Hustle offers an entrepreneurship program to students through partnerships
            with schools and organizations in underserved neighborhoods. Students learn
            business fundamentals, pitching, and networking — skills that aren't always
            taught in traditional classrooms.
          </p>
          <p
            className="text-white/60 leading-relaxed"
            style={{ fontFamily: f.display, fontSize: "1.05rem" }}
          >
            In New York City, we partner with the{" "}
            <a
              href={LINKS.syep}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5500] underline underline-offset-4 hover:text-white transition-colors"
            >
              Summer Youth Employment Program (SYEP)
            </a>{" "}
            and{" "}
            <a
              href={LINKS.wlg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5500] underline underline-offset-4 hover:text-white transition-colors"
            >
              Work, Learn &amp; Grow (WLG)
            </a>{" "}
            to provide paid opportunities for young people to build entrepreneurship skills
            year-round — during the summer and throughout the school year.
          </p>
          <p
            className="text-white/45 text-sm leading-relaxed"
            style={{ fontFamily: f.display }}
          >
            The Hustle is predicated on partnerships with entrepreneurs who serve as guest
            speakers and mentors, and we are always seeking to connect students with new
            individuals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href={LINKS.syep}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-2xl p-6 border border-white/08 transition-all hover:border-[#ff5500]/40"
            style={{ background: "#141414" }}
          >
            <span
              className="text-[#ff5500] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: f.mono }}
            >
              NYC Partnership
            </span>
            <h3 className="text-white text-xl font-bold" style={{ fontFamily: f.display }}>
              SYEP
            </h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1" style={{ fontFamily: f.display }}>
              Summer Youth Employment Program — paid summer work experience for NYC youth ages 14–24.
            </p>
            <span
              className="flex items-center gap-2 text-xs font-bold text-[#ff5500] group-hover:gap-3 transition-all"
              style={{ fontFamily: f.display }}
            >
              Learn more <ArrowUpRight size={12} />
            </span>
          </a>

          <a
            href={LINKS.wlg}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-2xl p-6 border border-white/08 transition-all hover:border-[#ff5500]/40"
            style={{ background: "#141414" }}
          >
            <span
              className="text-[#ff5500] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: f.mono }}
            >
              NYC Partnership
            </span>
            <h3 className="text-white text-xl font-bold" style={{ fontFamily: f.display }}>
              WLG
            </h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1" style={{ fontFamily: f.display }}>
              Work, Learn &amp; Grow — year-round career readiness and paid employment for SYEP alumni.
            </p>
            <span
              className="flex items-center gap-2 text-xs font-bold text-[#ff5500] group-hover:gap-3 transition-all"
              style={{ fontFamily: f.display }}
            >
              Learn more <ArrowUpRight size={12} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Our History ─────────────────────────────────────────── */
const boardMembers = [
  {
    name: "Brit Wrightson",
    role: "Founder & Executive Director",
    img: imgBrit,
    imgPosition: "center 20%",
    bio: "Founded The Hustle and leads curriculum, student programming, and organizational strategy. She coordinates the board, stewards subcommittee work across grants and fundraising, and drives the vision that keeps every program running.",
  },
  {
    name: "Noah Greenberg",
    role: "Co-founder & CEO, Stacker",
    img: imgNoah,
    imgPosition: "center 25%",
    bio: "Serial entrepreneur building the world's most accessible newswire. A UCSB graduate based in NYC, he mentors students, sharpens The Hustle's pitch and budget strategy, and helps young founders turn ideas into real businesses.",
  },
  {
    name: "Nina Olmstead",
    role: "Director, LifeMoves",
    img: imgNina,
    imgPosition: "center 25%",
    bio: "With a background in venture capital and technology, Nina brings deep nonprofit experience to the board. She is building bridges to the startup ecosystem—including Plug and Play—to connect students with founders, memberships, and sponsorship opportunities.",
  },
  {
    name: "Richie",
    role: "Board Member, Partnerships & Outreach",
    bio: "Leads partnership development for The Hustle—connecting pro-bono web and social media support, exploring collaborations with HMI on space and joint programming, and building university ties with Tulane and Fordham for graduate-level curriculum support.",
  },
  {
    name: "Kaylee",
    role: "Board Member, Grants & Development",
    bio: "Shapes The Hustle's grant writing strategy by gathering data on organizational priorities and aligning funding timelines with program goals. She works closely with leadership to turn community needs into compelling, fundable proposals.",
  },
  {
    name: "Dexter Norales",
    role: "Research Assistant, Stacker Media",
    img: imgDexter,
    imgPosition: "center 20%",
    bio: "A KIPP College Prep alum and Posse Scholarship finalist, Syracuse University graduate who ran a successful reselling business in high school. He brings a student-alumni perspective to board conversations on programming, budget, and pitch strategy.",
  },
];

function BoardCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
    },
    [WheelGesturesPlugin({ forceWheelAxis: "x" })],
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <span
            className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: f.mono }}
          >
            Advisors
          </span>
          <h3
            className="text-white mt-2 leading-tight"
            style={{
              fontFamily: f.display,
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            The Board
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous board member"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#ff5500] hover:text-[#ff5500] transition-all disabled:opacity-25 disabled:pointer-events-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next board member"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#ff5500] hover:text-[#ff5500] transition-all disabled:opacity-25 disabled:pointer-events-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        ref={emblaRef}
      >
        <div className="flex -ml-6">
          {boardMembers.map((m) => (
            <div
              key={m.name}
              className="flex-[0_0_100%] sm:flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
            >
              <div
                className="rounded-2xl overflow-hidden border border-white/08 h-full flex flex-col"
                style={{ background: "#141414" }}
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#1e1e1e]">
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      draggable={false}
                      className="w-full h-full object-cover pointer-events-none"
                      style={{ objectPosition: m.imgPosition ?? "center center" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span
                        className="text-white/25 text-6xl font-black"
                        style={{ fontFamily: f.display }}
                      >
                        {m.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-white font-bold text-lg" style={{ fontFamily: f.display }}>
                    {m.name}
                  </h4>
                  <p
                    className="text-[#ff5500] text-xs font-bold tracking-wide uppercase mb-3 mt-1"
                    style={{ fontFamily: f.mono }}
                  >
                    {m.role}
                  </p>
                  <p
                    className="text-white/45 text-sm leading-relaxed"
                    style={{ fontFamily: f.display }}
                  >
                    {m.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {boardMembers.map((m, i) => (
          <button
            key={m.name}
            type="button"
            aria-label={`Go to ${m.name}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === selectedIndex ? "w-8 bg-[#ff5500]" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function History() {
  return (
    <section id="history" className="py-24 border-t border-white/08">
      <div className="max-w-7xl mx-auto px-6">
        <span
          className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
          style={{ fontFamily: f.mono }}
        >
          Where We Started
        </span>
        <h2
          className="text-white mt-3 mb-8 leading-tight"
          style={{
            fontFamily: f.display,
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Our History
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center mb-16">
          <div className="flex-1 w-full flex flex-col gap-6 order-2 lg:order-1">
            <p
              className="text-white/60 leading-relaxed"
              style={{ fontFamily: f.display, fontSize: "1.05rem" }}
            >
              The Hustle began as an after-school club founded by educator Brit Wrightson in
              underserved communities of San Francisco and the South Bronx. What started as a
              small gathering of ambitious students has grown into a 501(c)(3) nonprofit
              organization.
            </p>
            <p
              className="text-white/60 leading-relaxed"
              style={{ fontFamily: f.display, fontSize: "1.05rem" }}
            >
              Ms. Wrightson, who holds Master's degrees in Secondary and Special Education,
              established The Hustle to equip students with essential life skills not adequately
              addressed in traditional academic settings — while facilitating connections
              between students and prominent founders and entrepreneurs.
            </p>
            <blockquote
              className="text-white/75 border-l-2 border-[#ff5500] pl-6 leading-relaxed"
              style={{ fontFamily: f.serif, fontStyle: "italic", fontSize: "1.15rem" }}
            >
              "Equipping students with essential life skills that are not adequately addressed
              in traditional academic settings."
            </blockquote>
            <p
              className="text-white/45 text-sm"
              style={{ fontFamily: f.display }}
            >
              — Brit Wrightson, Founder &amp; Executive Director
            </p>
          </div>

          <div
            className="w-full max-w-[240px] shrink-0 mx-auto lg:mx-0 order-1 lg:order-2 rounded-2xl border border-white/08 p-3"
            style={{ background: "#141414" }}
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src={imgBrit}
                alt="Brit Wrightson, Founder and Executive Director of The Hustle"
                className="w-full aspect-[3/4] object-cover object-[center_20%]"
              />
            </div>
            <p
              className="text-white font-bold text-sm mt-3 text-center"
              style={{ fontFamily: f.display }}
            >
              Brit Wrightson
            </p>
            <p
              className="text-[#ff5500] text-[10px] font-bold tracking-wide uppercase text-center mt-1"
              style={{ fontFamily: f.mono }}
            >
              Founder &amp; Executive Director
            </p>
          </div>
        </div>

        <BoardCarousel />
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/08">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span
            className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: f.mono }}
          >
            Get in Touch
          </span>
          <h2
            className="text-white mt-3 mb-6 leading-tight"
            style={{
              fontFamily: f.display,
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Contact Us
          </h2>
          <p
            className="text-white/50 max-w-sm leading-relaxed mb-8"
            style={{ fontFamily: f.display, fontSize: "1rem" }}
          >
            Whether you're a student, educator, donor, or potential partner — we'd love to
            hear from you. Reach out to our founder directly.
          </p>
          <SocialLinks />
        </div>

        <div
          className="rounded-2xl border border-white/08 p-10 flex flex-col items-center text-center gap-6"
          style={{ background: "#141414" }}
        >
          <img
            src={imgBrit}
            alt="Brit Wrightson"
            className="w-28 h-28 rounded-full object-cover object-top border-2 border-[#ff5500]/40"
          />
          <div>
            <p
              className="text-white/50 text-sm mb-2"
              style={{ fontFamily: f.mono }}
            >
              Email Brit Wrightson
            </p>
            <a
              href={LINKS.contact}
              className="text-white text-2xl md:text-3xl font-bold hover:text-[#ff5500] transition-colors"
              style={{ fontFamily: f.serif }}
            >
              Brit@thehustle.org
            </a>
          </div>
          <a
            href={LINKS.contact}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "#ff5500", fontFamily: f.display, letterSpacing: "0.04em" }}
          >
            Send an Email
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ─────────────────────────────────────────────── */
const galleryImages = [
  {
    src: imgGroup2019,
    alt: "The Hustle students on a staircase in matching hoodies, 2019",
    caption: "The Hustle group, 2019",
    wide: true,
  },
  {
    src: imgGroup2022,
    alt: "The Hustle students in matching tracksuits, 2022",
    caption: "The Hustle group, 2022",
    wide: true,
  },
  {
    src: galleryNoahGroup,
    alt: "Mentors presenting to students in matching hoodies",
    caption: "Workshop with mentors & students, 2022",
    wide: true,
  },
  {
    src: gallerySweatsuitPitch,
    alt: "Students presenting custom apparel designs on a projector",
    caption: "Students pitching their apparel brand",
    wide: true,
  },
  {
    src: galleryMesseroux,
    alt: "Students collaborating around lab tables in a classroom",
    caption: "Collaborative session with a guest speaker, 2022",
    wide: true,
  },
  {
    src: galleryWorkshop2019,
    alt: "Students and mentors meeting around a classroom table",
    caption: "Program planning session, 2019",
    wide: false,
  },
  {
    src: gallerySweatsuitSketch,
    alt: "Student sketching a KIPP tracksuit design on paper",
    caption: "Student designing custom apparel",
    wide: false,
  },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 border-t border-white/08">
      <div className="max-w-7xl mx-auto px-6">
        <span
          className="text-[#ff5500] text-xs font-bold tracking-[0.3em] uppercase"
          style={{ fontFamily: f.mono }}
        >
          In Action
        </span>
        <h2
          className="text-white mt-3 mb-10 leading-tight"
          style={{
            fontFamily: f.display,
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((photo) => (
            <figure
              key={photo.caption}
              className={`group rounded-2xl overflow-hidden border border-white/08 ${
                photo.wide ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ background: "#141414" }}
            >
              <div className={`overflow-hidden ${photo.wide ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption
                className="px-5 py-4 text-white/50 text-sm"
                style={{ fontFamily: f.mono }}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/08 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => scrollTo("home")}
          className="cursor-pointer"
          aria-label="The Hustle — Home"
        >
          <Logo className="h-9" />
        </button>
        <p className="text-white/30 text-xs text-center" style={{ fontFamily: f.mono }}>
          © {new Date().getFullYear()} The Hustle · 501(c)(3) Public Charity · EIN 88-3695077
        </p>
        <div className="flex items-center gap-6">
          <a
            href={LINKS.donate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff5500] text-xs font-bold hover:opacity-80 transition-opacity"
            style={{ fontFamily: f.mono }}
          >
            Donate
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Marquee text="GET INVOLVED" bg="#ff5500" color="#0b0b0b" />
      <Donate />
      <Program />
      <Marquee text="ENTREPRENEURSHIP FOR ALL" bg="#ff5500" color="#0b0b0b" />
      <History />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}
