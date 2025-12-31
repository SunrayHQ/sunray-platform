import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const launchDate = new Date("January 2, 2026").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = launchDate - now;

      if (diff <= 0) {
        setCountdown("Launching Soon");
        clearInterval(interval);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setCountdown(`${d}d ${h}h ${m}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0b1020 0%, #0f172a 60%, #020617 100%)",
        color: "#e5e7eb",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "32px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1 style={{ fontSize: "2.9rem", margin: 0 }}>
          Sunray <span style={{ color: "#facc15" }}>☀️</span>
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "8px" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* HERO */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
          Illuminate Solana Data
        </h2>
        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#cbd5f5",
          }}
        >
          Sunray provides real-time wallet flows, momentum signals, and launch
          analytics — giving traders clarity in a fast-moving Solana ecosystem.
        </p>
      </section>

      {/* COUNTDOWN */}
      <section style={{ textAlign: "center", marginBottom: "56px" }}>
        <p style={{ color: "#facc15", fontSize: "1.05rem" }}>
          Platform Launch
        </p>
        <h3 style={{ fontSize: "1.6rem", marginTop: "6px" }}>
          {countdown}
        </h3>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "22px",
        }}
      >
        {[
          "Live Solana token tracking",
          "Wallet behavior analytics",
          "Early momentum detection",
          "Launch trend insights",
          "Minimal, signal-focused UI",
          "Optimized for Solana speed",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "22px",
              borderRadius: "12px",
              backdropFilter: "blur(6px)",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.05rem" }}>{text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "64px 24px" }}>
        <a
          href="https://x.com/sunrayhq"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginRight: "16px",
            background: "#facc15",
            color: "#111827",
            padding: "14px 30px",
            borderRadius: "10px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Follow on X
        </a>

        <button
          style={{
            background: "rgba(255,255,255,0.08)",
            color: "#e5e7eb",
            padding: "14px 30px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "default",
          }}
        >
          Dashboard Coming Soon
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#9ca3af",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </div>
  );
}
