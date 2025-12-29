export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>

      {/* Header */}
      <header style={{ padding: "24px", borderBottom: "1px solid #eee", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Sunray ☀️</h1>
        <p style={{ color: "#666", margin: "8px 0 0" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "#fafafa" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
          Transparency, Speed & Clarity
        </h2>
        <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.125rem", color: "#444" }}>
          Sunray is a Solana-native platform for real-time token activity,
          wallet tracking, momentum signals, and launch analytics.
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: "40px 24px" }}>
        <h3 style={{ fontSize: "1.75rem", marginBottom: "12px", textAlign: "center" }}>
          What You Get
        </h3>
        <ul style={{ maxWidth: "720px", margin: "0 auto 40px", listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "12px" }}>• Live token activity and trends</li>
          <li style={{ marginBottom: "12px" }}>• Wallet insights & behavior tracking</li>
          <li style={{ marginBottom: "12px" }}>• Momentum & signal discovery</li>
          <li style={{ marginBottom: "12px" }}>• pump.fun launch support</li>
          <li style={{ marginBottom: "12px" }}>• Optimized for Solana speed</li>
        </ul>
      </section>

      {/* Dashboard Preview */}
      <section
        style={{
          padding: "60px 24px",
          background: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>
          Live Dashboard Preview
        </h3>

        <p style={{ maxWidth: "720px", margin: "0 auto", color: "#ccc" }}>
          Real-time Solana signals, wallet flows, and token momentum —
          unified into one clean interface.
        </p>

        <div
          style={{
            marginTop: "32px",
            background: "#1a1a1a",
            borderRadius: "12px",
            padding: "32px",
            maxWidth: "860px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p style={{ color: "#888" }}>Analytics modules syncing…</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "40px 24px" }}>
        <a
          href="#"
          style={{
            display: "inline-block",
            background: "#ffcc00",
            color: "#111",
            padding: "14px 28px",
            borderRadius: "8px",
            fontSize: "1.15rem",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Explore Sunray
        </a>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px", borderTop: "1px solid #eee", textAlign: "center", color: "#666" }}>
        <p>© {new Date().getFullYear()} Sunray</p>
      </footer>

    </div>
  );
}


