export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #0f172a, #020617)",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
        margin: 0,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 24px 60px",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            margin: "0 auto",
            maxWidth: "820px",
            background:
              "linear-gradient(90deg, #facc15, #38bdf8, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          Sunray ☀️
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#cbd5f5",
            marginTop: "12px",
            maxWidth: "720px",
            margin: "12px auto 0 auto",
          }}
        >
          Solana-native insight, transparency, and real on-chain clarity —
          presented in a clean, modern platform built for speed.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "36px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://x.com/sunrayhq"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background:
                "linear-gradient(90deg, #facc15, #38bdf8)",
              color: "#020617",
              padding: "14px 34px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            Follow on X
          </a>

          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #334155",
              color: "#e5e7eb",
              padding: "14px 34px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              background: "#020617",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            Join Discord
          </a>
        </div>
      </section>

      {/* Section Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          margin: "0 24px",
        }}
      />

      {/* Features */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          padding: "60px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {[
          "Live token activity & trends",
          "Wallet flow insights",
          "Momentum & signal discovery",
          "Built for Solana speed",
          "Coming soon: launch analytics",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "24px",
              textAlign: "center",
              backdropFilter: "blur(6px)",
            }}
          >
            <p style={{ fontSize: "1.05rem", margin: "0" }}>{text}</p>
          </div>
        ))}
      </section>

      {/* Section Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          margin: "0 24px",
        }}
      />

      {/* Dashboard Preview */}
      <section
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
          Experience a conceptual view of how insights and real-time signals
          will appear when the product fully goes live.
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "32px",
            maxWidth: "860px",
            marginLeft: "auto",
            marginRight: "auto",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "16px",
            boxShadow: "0px 4px 14px rgba(0,0,0,0.4)",
          }}
        >
          <p style={{ color: "#9ca3af", margin: 0 }}>
            Analytics modules initializing…
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "28px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#94a3b8",
          fontSize: "0.95rem",
        }}
      >
        © {new Date().getFullYear()} Sunray — Built on Solana
      </footer>
    </main>
  );
}
