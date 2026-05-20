"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

export default function StackSection() {
  const { t } = useLanguage();
  const stack = t.stack;
  const [ref, seen] = useReveal<HTMLElement>();

  return (
    <section
      id="stack"
      ref={ref}
      style={{
        padding: "140px 0 120px",
        borderTop: "1px solid var(--line)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container-pad">
        <div
          className="mono-up"
          style={{ color: "var(--accent)", marginBottom: 24, letterSpacing: "0.2em" }}
        >
          {stack.label}
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
          {stack.heading}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            border: "1px solid var(--line)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {stack.groups.map((g, gi) => (
            <div
              key={g.title}
              className="stack-cell"
              style={{
                padding: "32px 28px",
                borderRight: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                minHeight: 220,
                transform: seen ? "translateY(0)" : "translateY(20px)",
                opacity: seen ? 1 : 0,
                transition: `all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ${gi * 0.08}s`,
              }}
            >
              <div
                className="mono-up"
                style={{
                  color: "var(--ink-3)",
                  marginBottom: 20,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{`0${gi + 1}`}</span>
                <span>{g.title.toUpperCase()}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {g.items.map((item, ii) => (
                  <div
                    key={item}
                    className="stack-item"
                    style={{
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                      fontSize: 17,
                      color: "var(--ink-2)",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      transition: "color 0.2s",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono), ui-monospace, monospace",
                        fontSize: 10,
                        color: "var(--ink-3)",
                        width: 18,
                      }}
                    >
                      {String(ii + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stack-cell:hover {
          background: rgba(183, 148, 255, 0.03);
        }
        .stack-item:hover {
          color: var(--ink) !important;
        }
      `}</style>
    </section>
  );
}
