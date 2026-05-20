"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "32px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="container-pad"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span className="mono-up dim">{t.footer.left}</span>
      </div>
    </footer>
  );
}
