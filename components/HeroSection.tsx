"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "140px 0 96px",
      }}
    >
      <div className="container-pad" style={{ position: "relative", zIndex: 2 }}>
        <div
          className="mono-up"
          style={{
            marginBottom: 32,
            color: "var(--accent)",
            letterSpacing: "0.18em",
          }}
        >
          <span aria-hidden="true" style={{ color: "var(--accent)" }}>●</span>
          &nbsp;&nbsp;{hero.eyebrow}
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(60px, 12vw, 200px)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            textWrap: "balance",
          }}
        >
          <span style={{ display: "block" }}>{hero.name[0]}</span>
          <span
            className="serif-italic"
            style={{ display: "block", color: "var(--ink-2)" }}
          >
            {hero.name[1]}
          </span>
        </h1>

        <div
          className="hero-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: 64,
            alignItems: "end",
          }}
        >
          <p
            style={{
              fontSize: "clamp(20px, 2vw, 26px)",
              lineHeight: 1.35,
              color: "var(--ink-2)",
              maxWidth: 520,
              textWrap: "pretty",
            }}
          >
            {hero.tagline}
            <br />
            <span style={{ color: "var(--ink)" }}>{hero.taglineAccent}</span>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px 32px",
            }}
          >
            {hero.meta.map((item) => (
              <div key={item.k}>
                <div className="mono-up dim" style={{ marginBottom: 6 }}>
                  {item.k}
                </div>
                <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.3 }}>
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="container-pad"
        style={{
          position: "absolute",
          bottom: 32,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div className="mono-up dim">{hero.scroll}</div>
        <div className="mono-up dim" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            aria-hidden="true"
            style={{
              width: 1,
              height: 32,
              background: "var(--ink-3)",
              display: "inline-block",
              animation: "scrollLine 2s ease-in-out infinite",
              transformOrigin: "top",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
