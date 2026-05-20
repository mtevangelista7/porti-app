"use client";

import { Fragment } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

export default function AboutSection() {
  const { t } = useLanguage();
  const about = t.about;
  const [ref, seen] = useReveal<HTMLElement>();

  const headingParts = about.heading.split(about.italicToken);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "140px 0 120px",
        borderTop: "1px solid var(--line)",
        position: "relative",
        zIndex: 1,
        background:
          "linear-gradient(180deg, transparent, rgba(8,8,12,0.4) 40%, transparent)",
      }}
    >
      <div className="container-pad">
        <div
          className="mono-up"
          style={{
            color: "var(--accent)",
            marginBottom: 64,
            letterSpacing: "0.2em",
            opacity: seen ? 1 : 0,
            transition: "opacity 0.8s",
          }}
        >
          {about.label}
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--ink)",
                textWrap: "balance",
                maxWidth: 820,
                transform: seen ? "translateY(0)" : "translateY(30px)",
                opacity: seen ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              {headingParts.map((part, i) => (
                <Fragment key={i}>
                  {part}
                  {i < headingParts.length - 1 && (
                    <span
                      className="serif-italic"
                      style={{ color: "var(--accent)" }}
                    >
                      {about.italicToken}
                    </span>
                  )}
                </Fragment>
              ))}
            </h2>

            <div
              style={{
                marginTop: 56,
                maxWidth: 620,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                transform: seen ? "translateY(0)" : "translateY(30px)",
                opacity: seen ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s",
              }}
            >
              {about.body.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "clamp(16px, 1.3vw, 19px)",
                    lineHeight: 1.55,
                    color: i === 0 ? "var(--ink-2)" : "var(--ink-3)",
                    textWrap: "pretty",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: 4,
              transform: seen ? "translateY(0)" : "translateY(40px)",
              opacity: seen ? 1 : 0,
              transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s",
            }}
          >
            {about.facts.map(([k, v], i) => (
              <div
                key={k}
                style={{
                  padding: "22px 24px",
                  borderBottom:
                    i < about.facts.length - 1 ? "1px solid var(--line)" : "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 16,
                }}
              >
                <div className="mono-up dim">{k}</div>
                <div
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    fontSize: 18,
                    color: "var(--ink)",
                    textAlign: "right",
                  }}
                >
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
