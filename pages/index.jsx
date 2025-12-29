export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1e293b 0%, #020617 45%, #020617 100%)",
        color: "#e5e7eb",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "28px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", margin: 0 }}>
          Sunray <span style={{ color: "#facc15" }}>☀️</span>
        </h1>
        <p style={{ color: "#94a3b8", marginTop: "8px" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* Hero */}
      <section style={{ padding: "90px 24px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "18px",
            background:
              "linear-gradient(90deg, #facc15, #38bdf8, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Transparency. Speed. Clarity.
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#cbd5f5",
          }}
        >
          Sunray is a Solana-native platform delivering real-time token activity,
          wallet behavior, and momentum signals — all in one clean interface.
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            "Live token activity & trends",
            "Wallet flow insights",
            "Momentum & signal discovery",
            "Launch-focused analytics",
            "Built for Solana speed",
          ].map((text) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                padding: "24px",
                textAlign: "center",
                backdropFilter: "blur(6px)",
              }}
            >
              <p style={{ fontSize: "1.05rem" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section
        id="dashboard"
        style={{ padding: "70px 24px", textAlign: "center" }}
      >
        <h3 style={{ fontSize: "1.9rem", marginBottom: "12px" }}>
          Live Dashboard Preview
        </h3>

        <p style={{ maxWidth: "720px", margin: "0 auto", color: "#9ca3af" }}>
          Real-time Solana signals, wallet flows, and token momentum —
          unified into one evolving analytics hub.
        </p>

        <div
          style={{
            marginTop: "36px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "36px",
            borderRadius: "18px",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p style={{ color: "#9ca3af" }}>Analytics modules initializing…</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "40px 24px" }}>
        <a
          href="#dashboard"
          style={{
            display: "inline-block",
            background:
              "linear-gradient(90deg, #facc15, #38bdf8)",
            color: "#020617",
            padding: "16px 34px",
            borderRadius: "12px",
            fontSize: "1.15rem",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Explore Sunray
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#64748b",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </div>
  );
}

