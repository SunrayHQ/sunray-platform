import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunray — Solana Market Intelligence</title>
        <meta
          name="description"
          content="Sunray is a Solana-native platform delivering on-chain insight, wallet intelligence, and momentum signals."
        />
      </Head>

      <main style={styles.page}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.logo}>
            Sunray <span style={styles.sun}>☀️</span>
          </h1>
          <p style={styles.subtitle}>
            Solana On-Chain Insight & Market Intelligence
          </p>
        </header>

        {/* Hero */}
        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>
            Clarity for Solana Markets
          </h2>
          <p style={styles.heroText}>
            Sunray is a Solana-native analytics platform focused on transparency,
            momentum discovery, and clean on-chain signals — built for traders
            who value clarity over noise.
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

        {/* Platform Preview */}
        <section style={styles.previewSection}>
          <h3 style={styles.sectionTitle}>Platform Preview</h3>
          <p style={styles.sectionText}>
            Below is a visual preview of the Sunray interface. Live modules are
            actively being developed and will roll out in stages.
          </p>

          <div style={styles.previewBox}>
            <p style={styles.previewText}>
              Wallet flows • Token momentum • Signal discovery
            </p>
            <p style={styles.previewSub}>
              Live analytics syncing…
            </p>
          </div>
        </section>

        {/* What's Next */}
        <section style={styles.nextSection}>
          <h3 style={styles.sectionTitle}>What’s Next</h3>
          <ul style={styles.list}>
            <li>• Continued platform development post-launch</li>
            <li>• Wallet intelligence and signal dashboards</li>
            <li>• Token and launch analytics modules</li>
            <li>• Community-driven feature expansion</li>
          </ul>
        </section>

        {/* Roadmap */}
        <section style={styles.roadmap}>
          <h3 style={styles.sectionTitle}>Roadmap</h3>

          <div style={styles.roadmapGrid}>
            <div style={styles.roadmapItem}>
              <strong>Phase 1</strong>
              <p>Platform foundation & interface</p>
            </div>
            <div style={styles.roadmapItem}>
              <strong>Phase 2</strong>
              <p>Wallet tracking & signal tooling</p>
            </div>
            <div style={styles.roadmapItem}>
              <strong>Phase 3</strong>
              <p>Token analytics & launch insights</p>
            </div>
            <div style={styles.roadmapItem}>
              <strong>Phase 4</strong>
              <p>Community tools & integrations</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            Built for Solana • Built for clarity
          </p>
          <p style={styles.footerSub}>
            © {new Date().getFullYear()} Sunray
          </p>
        </footer>
      </main>
    </>
  );
}

const FEATURES = [
  {
    title: "Live Token Activity",
    text: "Track real-time Solana token movement and emerging momentum.",
  },
  {
    title: "Wallet Intelligence",
    text: "Understand wallet behavior, flows, and conviction patterns.",
  },
  {
    title: "Momentum Signals",
    text: "Surface early signals before trends become obvious.",
  },
  {
    title: "Launch Analytics",
    text: "Clean insights into new launches and on-chain activity.",
  },
  {
    title: "Signal-First Design",
    text: "No clutter. No noise. Just actionable information.",
  },
  {
    title: "Solana Native",
    text: "Optimized for Solana speed, scale, and performance.",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
    color: "#e6edf7",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
    padding: "48px 24px",
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  logo: {
    fontSize: "42px",
    fontWeight: "700",
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
    margin: "0 auto 80px",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "36px",
    marginBottom: "16px",
    color: "#f8fafc",
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
    margin: "0 auto 80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "14px",
    padding: "22px",
  },
  cardTitle: {
    color: "#facc15",
    marginBottom: "8px",
    fontSize: "16px",
  },
  cardText: {
    fontSize: "14px",
    lineHeight: "1.5",
  },
  previewSection: {
    maxWidth: "900px",
    margin: "0 auto 80px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "12px",
  },
  sectionText: {
    color: "#cbd5e1",
    marginBottom: "24px",
  },
  previewBox: {
    background: "#020617",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "14px",
    padding: "32px",
  },
  previewText: {
    fontSize: "16px",
    marginBottom: "8px",
  },
  previewSub: {
    fontSize: "13px",
    color: "#9fb3c8",
  },
  nextSection: {
    maxWidth: "900px",
    margin: "0 auto 80px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    color: "#dbe4f3",
    lineHeight: "1.8",
  },
  roadmap: {
    maxWidth: "900px",
    margin: "0 auto 80px",
  },
  roadmapGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  roadmapItem: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "18px",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "24px",
  },
  footerText: {
    fontSize: "13px",
  },
  footerSub: {
    fontSize: "11px",
    color: "#9fb3c8",
  },
};
