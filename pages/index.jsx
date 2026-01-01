import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunray — Solana On-Chain Insight</title>
        <meta
          name="description"
          content="Sunray delivers real-time Solana wallet activity, momentum signals, and launch analytics."
        />
      </Head>

      <main style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.logo}>
            Sunray <span style={styles.sun}>☀️</span>
          </h1>
          <p style={styles.subtitle}>Solana On-Chain Insight & Analytics</p>
        </header>

        {/* Hero */}
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>Clarity for Solana Markets</h2>
          <p style={styles.heroText}>
            Sunray delivers real-time wallet activity, early momentum signals,
            and clean launch analytics — built to help traders move with
            confidence on Solana.
          </p>

          <div style={styles.buttons}>
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
          {FEATURES.map((item) => (
            <div key={item.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            Built for Solana. Built for clarity.
          </p>
        </footer>
      </main>
    </>
  );
}

const FEATURES = [
  {
    title: "Live Token Tracking",
    text: "Monitor Solana token activity and market movement in real time.",
  },
  {
    title: "Wallet Intelligence",
    text: "Understand wallet behavior, flows, and conviction with clarity.",
  },
  {
    title: "Momentum Signals",
    text: "Surface early momentum before it becomes obvious to the crowd.",
  },
  {
    title: "Launch Analytics",
    text: "Analyze new launches with clean, transparent on-chain data.",
  },
  {
    title: "Signal-First Design",
    text: "No noise. No clutter. Just the data that matters.",
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
      "radial-gradient(circle at top, #0f172a 0%, #020617 60%)",
    color: "#e6edf7",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    padding: "48px 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  logo: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  sun: {
    color: "#38bdf8",
  },
  subtitle: {
    color: "#9fb3c8",
    fontSize: "14px",
  },
  hero: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "80px",
  },
  heroTitle: {
    fontSize: "36px",
    marginBottom: "16px",
    color: "#f8fafc",
    textShadow: "0 0 14px rgba(56,189,248,0.25)",
  },
  heroText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#dbe4f3",
    marginBottom: "32px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 22px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.2s ease",
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
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginBottom: "80px",
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "14px",
    padding: "22px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
  },
  cardTitle: {
    color: "#facc15",
    marginBottom: "8px",
    fontSize: "16px",
  },
  cardText: {
    color: "#e6edf7",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "24px",
  },
  footerText: {
    fontSize: "12px",
    color: "#9fb3c8",
  },
};
