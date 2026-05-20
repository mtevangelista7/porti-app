"use client";

import { useState, ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useReveal } from "@/lib/useReveal";

type ContactLinkProps = {
  icon: ReactNode;
  label: string;
  sub: string;
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

function ContactLink({ icon, label, sub, href, onClick }: ContactLinkProps) {
  const sharedStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "32px 1fr 110px",
    gap: 16,
    alignItems: "center",
    padding: "20px 22px",
    border: "1px solid var(--line)",
    borderRadius: 8,
    background: "rgba(13, 13, 18, 0.4)",
    transition: "all 0.3s",
    textAlign: "left",
    width: "100%",
  };

  const inner = (
    <>
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 16,
          color: "var(--accent)",
          width: 28,
          height: 28,
          display: "grid",
          placeItems: "center",
          border: "1px solid var(--line-strong)",
          borderRadius: 6,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 13,
          color: "var(--ink)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span className="mono-up dim" style={{ textAlign: "right" }}>
        {sub}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        style={sharedStyle}
      >
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="contact-link" style={sharedStyle}>
      {inner}
    </button>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();
  const contact = t.contact;
  const [ref, seen] = useReveal<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard?.writeText(contact.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "160px 0 120px",
        borderTop: "1px solid var(--line)",
        position: "relative",
        zIndex: 1,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container-pad" style={{ width: "100%" }}>
        <div
          className="mono-up"
          style={{ color: "var(--accent)", marginBottom: 40, letterSpacing: "0.2em" }}
        >
          {contact.label}
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(64px, 10vw, 180px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            textWrap: "balance",
            transform: seen ? "translateY(0)" : "translateY(40px)",
            opacity: seen ? 1 : 0,
            transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <span>{contact.heading[0]}</span>{" "}
          <span className="serif-italic" style={{ color: "var(--accent)" }}>
            {contact.heading[1]}
          </span>{" "}
          <span>{contact.heading[2]}</span>
        </h2>

        <div
          className="contact-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: 80,
            alignItems: "end",
          }}
        >
          <p
            style={{
              fontSize: "clamp(18px, 1.7vw, 22px)",
              lineHeight: 1.5,
              color: "var(--ink-2)",
              maxWidth: 560,
              textWrap: "pretty",
              transform: seen ? "translateY(0)" : "translateY(20px)",
              opacity: seen ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s",
            }}
          >
            {contact.body}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              transform: seen ? "translateY(0)" : "translateY(20px)",
              opacity: seen ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.35s",
            }}
          >
            <ContactLink
              icon="@"
              label={contact.email}
              sub={copied ? contact.copied : contact.copyHint}
              onClick={onCopy}
            />
            <ContactLink
              icon="↗"
              label="github.com/mtevangelista7"
              sub="GITHUB"
              href="https://github.com/mtevangelista7"
            />
            <ContactLink
              icon="↗"
              label="linkedin.com/in/matheus-evangelista-1920"
              sub="LINKEDIN"
              href="https://www.linkedin.com/in/matheus-evangelista-1920/"
            />
          </div>
        </div>

        <div role="status" aria-live="polite" className="sr-only">
          {copied ? contact.copied : ""}
        </div>
      </div>

      <style jsx>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        :global(.contact-link:hover) {
          border-color: var(--accent) !important;
          background: rgba(183, 148, 255, 0.06) !important;
          transform: translateX(4px);
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
