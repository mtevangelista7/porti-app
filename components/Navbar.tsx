"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [string, string][] = [
    ["#about", t.nav.about],
    ["#stack", t.nav.stack],
    ["#work", t.nav.work],
    ["#contact", t.nav.contact],
  ];

  return (
    <nav
      aria-label="Primary"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(8, 8, 12, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container-pad"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: 13,
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 10px var(--accent-glow)",
            }}
          />
          <span style={{ color: "var(--ink)" }}>M.EVANGELISTA</span>
          <span className="dim" style={{ fontSize: 11 }}>
            / BACKEND
          </span>
        </a>

        <div className="nav-right" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="nav-link mono-up"
              style={{ color: "var(--ink-2)", fontSize: 11, transition: "color 0.2s" }}
            >
              {label}
            </a>
          ))}

          <div
            role="group"
            aria-label="Language"
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid var(--line)",
              borderRadius: 999,
              padding: 3,
              marginLeft: 8,
            }}
          >
            {(["en", "pt"] as const).map((L) => {
              const selected = lang === L;
              return (
                <button
                  key={L}
                  onClick={() => setLang(L)}
                  aria-pressed={selected}
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    padding: "5px 10px",
                    borderRadius: 999,
                    background: selected ? "var(--ink)" : "transparent",
                    color: selected ? "var(--bg)" : "var(--ink-3)",
                    transition: "all 0.2s",
                  }}
                >
                  {L.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link:hover {
          color: var(--ink) !important;
        }
        @media (max-width: 900px) {
          .nav-link {
            display: none;
          }
          .nav-right {
            gap: 14px;
          }
        }
      `}</style>
    </nav>
  );
}
