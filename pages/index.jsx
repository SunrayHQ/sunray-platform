import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunray — Solana On-Chain Insight</title>
        <meta
          name="description"
          content="Sunray provides real-time Solana wallet intelligence, momentum signals, and launch analytics — built for clarity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.logo}>
            Sunray <span style={styles.sun}>☀️</span>
          </h1>
          <p style={styles.tagline}>Solana On-Chain Insight & Analytics</p>
        </header>

        {/* Hero */}
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Clarity for Solana Markets</h2>
          <p style={styles.heroText}>
            Sunray surfaces real-time wallet activity, momentum signals, and
            launch-focused analytics — designed to help traders move early and
            with confidence on Solana.
          </p>

          <div style={styles.ctaRow}>
            <a
              href="https://x.com/sunrayhq"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.button, ...styles.primary }}
            >
              Follow on X
            </a>

            <a
              href="https://sunray-platform.vercel.app/"
              style={{ ...styles.button, ...styles.secondary }}
            >
              Platform Live
            </a>
          </div>
        </section>

        {/* Features */}
        <section style={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardText}>{f.text}</p>
            </div>
          ))}
        </section>

        {/* Bottom CTA */}
        <section style={styles.bottom}>
          <h3 style={styles.bottomTitle}>Built for Solana. Built for Signal.</h3>
          <p style={styles.bottomText}>
            No noise. No clutter. Just clean on-chain insight when it matters.
          </p>

          <a
            href="https://x.com/sunrayhq"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.primary }}
          >
            Stay Locked In
          </a>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} Sunray</p>
          <p>Solana-native analytics</p>
        </footer>
      </main>
    </>
  );
}

const FEATURES = [
  {
    title: "Live Token Tracking",
    text: "Monitor Solana token activity and real-time market movement.",
  },
  {
    title: "Wallet Intelligence",
    text: "Track wallet behavior, flows, and conviction across the chain.",
  },
  {
    title: "Momentum Signals",
    text: "Surface early momentum before it becomes obvious.",
  },
  {
    title: "Launch Analytics",
    text: "Analyze new launches with clean, transparent on-chain data.",
  },
  {
    title: "Signal-First Design",
    text: "No noise. No clutter. Only what matters.",
  },
  {
    title: "Built for Solana",
    text: "Optimized for speed, scale, and Solana-native performance.",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0b1d3a 0%, #020617 65%)",
    color: "#e6edf7",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    padding: "48px 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  logo: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  sun: {
    color: "#38bdf8",
  },
  tagline: {
    fontSize: "14px",
    color: "#9fb3c8",
  },
  hero: {
    maxWidth: "920px",
    margin: "0 auto 90px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "38px",
    marginBottom: "16px",
    color: "#f8fafc",
    textShadow: "0 0 18px rgba(56,189,248,0.25)",
  },
  heroText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#dbe4f3",
    marginBottom: "36px",
  },
  ctaRow: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 24px",
    borderRadius: "12px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.25s ease",
  },
  primary: {
    background: "linear-gradient(90deg, #facc15, #38bdf8)",
    color: "#020617",
  },
  secondary: {
    border: "1px solid rgba(255,255,255,0.25)",
    color: "#e6edf7",
  },
  features: {
    maxWidth: "1120px",
    margin: "0 auto 100px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 14px 34px rgba(0,0,0,0.45)",
  },
  cardTitle: {
    fontSize: "16px",
    color: "#facc15",
    marginBottom: "8px",
  },
  cardText: {
    fontSize: "14px",
    lineHeight: "1.55",
    color: "#e6edf7",
  },
  bottom: {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 80px",
  },
  bottomTitle: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  bottomText: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "26px",
  },
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "24px",
    textAlign: "center",
    fontSize: "12px",
    color: "#9fb3c8",
  },
};
