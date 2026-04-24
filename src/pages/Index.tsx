import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  UtensilsCrossed,
  Sparkles,
  Briefcase,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import portrait from "@/assets/hilal-portrait.jpg";

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-slide-up");
            (e.target as HTMLElement).style.opacity = "1";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: "About" },
    { href: "#businesses", label: "Businesses" },
    { href: "#vision", label: "Vision" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="h-8 w-8 rounded-sm bg-gradient-gold grid place-items-center text-primary-foreground font-display font-bold">
            H
          </span>
          <span className="font-display text-lg tracking-wide">
            Hilal <span className="text-primary">M</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-primary/40 text-primary px-5 py-2 rounded-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
        >
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
};

const Hero = () => (
  <section
    id="top"
    className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-hero overflow-hidden noise-overlay"
  >
    {/* Glow accents */}
    <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px]" />

    <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary/90">
          <span className="h-px w-10 bg-primary/60" />
          CEO & Founder · Hameediya Holding Group
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-medium">
          Building <span className="text-gradient-gold italic">Businesses</span>
          <br /> Across Europe.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          A diversified entrepreneur leading ventures in hospitality, cosmetics,
          and international consulting — from headquarters in Riga, Latvia.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-sm font-medium shadow-gold hover:scale-[1.02] transition-smooth"
          >
            Contact
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#businesses"
            className="inline-flex items-center gap-3 border border-border hover:border-primary/60 px-8 py-4 rounded-sm transition-smooth"
          >
            View Businesses
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-12 max-w-md">
          {[
            { k: "3", l: "Industries" },
            { k: "EU", l: "Markets" },
            { k: "10+", l: "Years Leading" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl text-primary">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 relative animate-fade-in-slow">
        <div className="relative aspect-[4/5] max-w-md mx-auto">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-sm" />
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t border-primary/60" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-primary/60" />
          <img
            src={portrait}
            alt="Hilal M, CEO and Founder of Hameediya Holding Group"
            width={1024}
            height={1280}
            className="relative w-full h-full object-cover rounded-sm shadow-elevated grayscale-[15%]"
          />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-4" data-reveal>
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
          01 — About
        </div>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">
          A founder with a <span className="italic text-gradient-gold">global</span> mindset.
        </h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed" data-reveal>
        <p>
          Hilal M is the CEO and Founder of <span className="text-foreground">Hameediya Holding Group</span> —
          a diversified business group operating across hospitality, cosmetic
          trading, and consultancy throughout Europe.
        </p>
        <p>
          With a leadership philosophy rooted in vision, discipline, and
          long-term thinking, Hilal has built a portfolio that bridges cultures,
          markets, and industries — turning ambitious ideas into enduring
          institutions.
        </p>
        <div className="pt-4 grid sm:grid-cols-2 gap-6">
          {[
            "International business leadership",
            "Multi-industry growth strategy",
            "European market expansion",
            "Brand & investment building",
          ].map((p) => (
            <div key={p} className="flex items-start gap-3">
              <span className="mt-2 h-px w-6 bg-primary" />
              <span className="text-foreground/90">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Businesses = () => {
  const items = [
    {
      icon: UtensilsCrossed,
      tag: "Hospitality",
      title: "Restaurant Chains",
      desc: "Curating distinctive dining experiences across European cities — culinary brands built on authenticity, service, and atmosphere.",
    },
    {
      icon: Sparkles,
      tag: "Cosmetics",
      title: "Beauty Brands",
      desc: "Proprietary cosmetic and skincare lines, traded internationally with a focus on quality formulation and elevated brand identity.",
    },
    {
      icon: Briefcase,
      tag: "Consulting",
      title: "European Advisory",
      desc: "Strategic business consultancy guiding founders, investors, and corporates through market entry, growth, and operations across Europe.",
    },
  ];
  return (
    <section id="businesses" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mb-20" data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            02 — Business Segments
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Three industries.
            <br />
            <span className="italic text-gradient-gold">One vision.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={it.title}
              data-reveal
              style={{ animationDelay: `${i * 120}ms` }}
              className="group relative bg-card border border-border p-10 rounded-sm overflow-hidden hover:border-primary/50 transition-smooth shadow-card-premium"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="h-14 w-14 rounded-sm border border-primary/30 grid place-items-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <it.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-3">
                {it.tag}
              </div>
              <h3 className="font-display text-2xl mb-4">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vision = () => (
  <section id="vision" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[160px]" />
    <div className="container mx-auto relative">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5" data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            03 — Vision
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Expansion guided by <span className="italic text-gradient-gold">conviction</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-10" data-reveal>
          <blockquote className="font-display text-2xl md:text-3xl leading-snug text-foreground/90 border-l-2 border-primary pl-8">
            “To build a generational holding group that creates value across
            cultures — through hospitality that brings people together,
            products that elevate everyday life, and counsel that empowers the
            next generation of European entrepreneurs.”
          </blockquote>

          <div className="grid sm:grid-cols-3 gap-px bg-border">
            {[
              { k: "Expansion", v: "Scaling across new European markets" },
              { k: "Entrepreneurship", v: "Backing founders & ventures" },
              { k: "Innovation", v: "Modernising legacy industries" },
            ].map((x) => (
              <div key={x.k} className="bg-background p-8">
                <div className="font-display text-xl text-primary mb-2">
                  {x.k}
                </div>
                <div className="text-sm text-muted-foreground">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const phone = "+37120257806";
  const wa = "37120257806";
  const items = [
    { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
    { icon: Mail, label: "Email", value: "hilal@hameediya.com", href: "mailto:hilal@hameediya.com" },
    { icon: Globe, label: "Website", value: "www.hameediya.com", href: "https://www.hameediya.com" },
    { icon: MapPin, label: "Address", value: "Tallinas 55, Riga, LV-1012, Latvia" },
  ];
  return (
    <section id="contact" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-20" data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            04 — Contact
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Let's start a <span className="italic text-gradient-gold">conversation</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            For partnerships, investments, advisory, or media inquiries —
            reach out directly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-px bg-border mb-12" data-reveal>
          {items.map((it) => {
            const Wrap: any = it.href ? "a" : "div";
            return (
              <Wrap
                key={it.label}
                href={it.href}
                target={it.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="bg-background p-8 flex items-start gap-5 hover:bg-card transition-smooth group"
              >
                <div className="h-12 w-12 rounded-sm border border-primary/30 grid place-items-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-smooth">
                  <it.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                    {it.label}
                  </div>
                  <div className="font-display text-lg">{it.value}</div>
                </div>
              </Wrap>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center" data-reveal>
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-sm font-medium shadow-gold hover:scale-[1.02] transition-smooth"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="mailto:hilal@hameediya.com"
            className="inline-flex items-center gap-3 border border-border hover:border-primary/60 px-8 py-4 rounded-sm transition-smooth"
          >
            <Mail className="h-4 w-4" /> Email Direct
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="h-7 w-7 rounded-sm bg-gradient-gold grid place-items-center text-primary-foreground font-display font-bold text-sm">
          H
        </span>
        <span className="font-display tracking-wide">
          Hameediya <span className="text-primary">Holding Group</span>
        </span>
      </div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Hilal M — Riga, Latvia
      </div>
    </div>
  </footer>
);

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Businesses />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
