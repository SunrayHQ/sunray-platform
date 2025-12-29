export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>

      {/* Header */}
      <header style={{ padding: "24px", borderBottom: "1px solid #eee" }}>
        <h1>Sunray ☀️</h1>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2>Solana Transparency, Simplified</h2>
        <p style={{ maxWidth: "600px", margin: "16px auto" }}>
          Sunray is a clean, fast platform for tracking on-chain activity,
          early momentum, and launch analytics — built for the Solana ecosystem.
        </p>
      </section>

      {/* Features */}
      <section style={{ padding: "40px 24px" }}>
        <h3>Core Features</h3>
        <ul>
          <li>Real-time token activity</li>
          <li>Wallet & liquidity insights</li>
          <li>Early momentum signals</li>
          <li>pump.fun launch support</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px", borderTop: "1px solid #eee" }}>
        <p>© {new Date().getFullYear()} Sunray</p>
      </footer>

    </div>
  );
}
