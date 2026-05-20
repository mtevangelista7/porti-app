"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

export default function WorkSection() {
  const { t } = useLanguage();
  const work = t.work;
  const [ref, seen] = useReveal<HTMLElement>();
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <section
      id="work"
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
          style={{ color: "var(--accent)", marginBottom: 24, letterSpacing: "0.2em" }}
        >
          {work.label}
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(36px, 5vw, 68px)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            marginBottom: 72,
          }}
        >
          {work.heading}
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {work.items.map((item, i) => {
            const isHover = hoverIdx === i;
            return (
              <article
                key={item.title}
                className="work-row"
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "96px 1fr 240px",
                  gap: 40,
                  padding: "36px 28px",
                  borderTop: "1px solid var(--line)",
                  borderBottom:
                    i === work.items.length - 1 ? "1px solid var(--line)" : "none",
                  alignItems: "baseline",
                  position: "relative",
                  transform: seen ? "translateY(0)" : "translateY(20px)",
                  opacity: seen ? 1 : 0,
                  transition: `transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.08}s, opacity 0.7s ${i * 0.08}s, background 0.3s`,
                  background: isHover ? "rgba(183, 148, 255, 0.04)" : "transparent",
                }}
              >
                <span
                  className="mono"
                  style={{
                    color: isHover ? "var(--accent)" : "var(--ink-3)",
                    fontSize: 13,
                    transition: "color 0.3s",
                  }}
                >
                  {item.year}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(22px, 2.4vw, 32px)",
                      lineHeight: 1.15,
                      color: isHover ? "var(--accent)" : "var(--ink)",
                      transition: "color 0.3s, transform 0.3s",
                      transform: isHover ? "translateX(8px)" : "translateX(0)",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "var(--ink-3)",
                      maxWidth: 620,
                      textWrap: "pretty",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div
                  className="work-tags"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono"
                      style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        border: "1px solid var(--line)",
                        borderRadius: 999,
                        color: "var(--ink-3)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .work-row {
            grid-template-columns: 72px 1fr !important;
            gap: 24px !important;
            padding: 28px 16px !important;
          }
          .work-tags {
            grid-column: 2;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
