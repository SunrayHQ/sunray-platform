export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1e293b 0%, #020617 45%, #020617 100%)",
        color: "#e5e7eb",
        fontFamily: "Inter, Arial, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "28px 24px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            background:
              "linear-gradient(90deg, #facc15, #38bdf8, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "8px",
          }}
        >
          Sunray ☀️
        </h1>
        <p style={{ color: "#94a3b8" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "16px",
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
            fontSize: "1.15rem",
            color: "#cbd5f5",
            margin: "0 auto",
            maxWidth: "680px",
            lineHeight: "1.6",
          }}
        >
          Sunray is a Solana-native platform that brings together
          real-time token activity, wallet insights, and momentum signals
          in one clean and interactive interface.
        </p>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "40px 24px",
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
          "Launch analytics coming soon",
          "Built for Solana speed",
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "22px",
              textAlign: "center",
              backdropFilter: "blur(6px)",
            }}
          >
            <p style={{ fontSize: "1.05rem", margin: 0 }}>{item}</p>
          </div>
        ))}
      </section>

      {/* Dashboard Preview */}
      <section
        id="dashboard"
        style={{
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.9rem", marginBottom: "12px" }}>
          Dashboard Preview
        </h3>
        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            color: "#9ca3af",
            lineHeight: "1.6",
          }}
        >
          See a taste of how insights and activity tracking will look on Sunray.
        </p>
        <div
          style={{
            marginTop: "30px",
            padding: "30px",
            maxWidth: "860px",
            marginLeft: "auto",
            marginRight: "auto",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "16px",
          }}
        >
          <p style={{ color: "#9ca3af" }}>Analytics modules are initializing…</p>
        </div>
      </section>

      {/* CTA Buttons */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 24px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Follow on X */}
        <a
          href="https://x.com/YourUsernameHere"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(90deg, #facc15, #38bdf8)",
            color: "#020617",
            padding: "14px 32px",
            borderRadius: "10px",
            fontSize: "1.1rem",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Follow on X
        </a>

        {/* Join Discord */}
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "1px solid #334155",
            color: "#e5e7eb",
            padding: "14px 32px",
            borderRadius: "10px",
            fontSize: "1.1rem",
            fontWeight: "700",
            textDecoration: "none",
            background: "#020617",
          }}
        >
          Join Discord
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#94a3b8",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </main>
  );
}
