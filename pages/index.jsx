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
        backgroundColor: "#0b0b0b",
        color: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "32px",
          textAlign: "center",
          borderBottom: "1px solid #1f1f1f",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", margin: 0 }}>
          Sunray <span style={{ color: "#ffcc00" }}>☀️</span>
        </h1>
        <p style={{ color: "#9a9a9a", marginTop: "8px" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* HERO */}
      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "14px" }}>
          See Solana Clearly
        </h2>
        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#bdbdbd",
          }}
        >
          Sunray brings real-time wallet flows, momentum signals, and launch
          analytics into one clean, transparent platform.
        </p>
      </section>

      {/* COUNTDOWN */}
      <section style={{ textAlign: "center", marginBottom: "48px" }}>
        <p style={{ color: "#ffcc00", fontSize: "1.1rem" }}>
          Launch Countdown
        </p>
        <h3 style={{ fontSize: "1.5rem", marginTop: "6px" }}>
          {countdown}
        </h3>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          "Live Solana token activity",
          "Wallet behavior insights",
          "Early momentum detection",
          "Launch & trend analytics",
          "Noise-free dashboard",
          "Built for Solana speed",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              background: "#141414",
              padding: "22px",
              borderRadius: "10px",
              border: "1px solid #1f1f1f",
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
            marginRight: "14px",
            background: "#ffcc00",
            color: "#111",
            padding: "14px 28px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Follow on X
        </a>

        <button
          style={{
            background: "#1a1a1a",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "8px",
            border: "1px solid #2a2a2a",
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
          borderTop: "1px solid #1f1f1f",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </div>
  );
}
