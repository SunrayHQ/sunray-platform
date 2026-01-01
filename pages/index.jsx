export default function Home() {
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
          Clarity for Solana Markets
        </h2>
        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#cbd5f5",
          }}
        >
          Sunray delivers real-time wallet activity, momentum signals, and launch
          insights — designed to help traders move with confidence on Solana.
        </p>
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
          {
            title: "Live Token Tracking",
            desc: "Monitor Solana token activity and market movement in real time.",
          },
          {
            title: "Wallet Intelligence",
            desc: "Understand wallet behavior, flows, and conviction with clarity.",
          },
          {
            title: "Momentum Signals",
            desc: "Surface early momentum before it becomes obvious to the crowd.",
          },
          {
            title: "Launch Analytics",
            desc: "Analyze new launches with clean, transparent data.",
          },
          {
            title: "Signal-First Design",
            desc: "No noise. No clutter. Just what matters.",
          },
          {
            title: "Built for Solana",
            desc: "Optimized for speed, scale, and Solana-native performance.",
          },
        ].map((item, i) => (
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
            <h3 style={{ margin: "0 0 8px", color: "#facc15" }}>
              {item.title}
            </h3>
            <p style={{ margin: 0, color: "#cbd5f5" }}>{item.desc}</p>
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

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.08)",
            color: "#e5e7eb",
            padding: "14px 30px",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.15)",
            textDecoration: "none",
            cursor: "default",
          }}
        >
          Platform Live
        </a>
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
        © {new Date().getFullYear()} Sunray • Built on Solana
      </footer>
    </div>
  );
}
