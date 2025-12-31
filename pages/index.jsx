export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        color: "#e5e7eb",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "120px 24px 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "700",
            color: "#7dd3fc",
            marginBottom: "16px",
          }}
        >
          Sunray ☀️
        </h1>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 40px",
            fontSize: "1.15rem",
            lineHeight: "1.6",
            color: "#cbd5f5",
          }}
        >
          A Solana-native platform focused on clarity, transparency, and real
          on-chain insight — built clean, fast, and intentional.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://x.com/sunrayhq"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              background: "linear-gradient(90deg, #facc15, #38bdf8)",
              color: "#020617",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Follow on X
          </a>

          <a
            href="https://x.com/sunrayhq"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              border: "1px solid #334155",
              color: "#e5e7eb",
              textDecoration: "none",
            }}
          >
            Get Launch Updates
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: "60px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          "Live token activity & trends",
          "Wallet flow & behavior insight",
          "Momentum & signal discovery",
          "Built specifically for Solana",
          "Launch-focused analytics (coming)",
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: "24px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* DASHBOARD PREVIEW */}
      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "12px",
            color: "#e0f2fe",
          }}
        >
          Live Dashboard Preview
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 32px",
            color: "#94a3b8",
            fontSize: "1.05rem",
          }}
        >
          Real-time Solana signals, wallet flows, and token momentum — unified
          into one clean interface.
        </p>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "18px",
            background: "linear-gradient(180deg, #020617, #020617)",
            border: "1px solid #1e293b",
            color: "#64748b",
          }}
        >
          Analytics modules syncing…
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "32px 24px",
          borderTop: "1px solid #1e293b",
          textAlign: "center",
          color: "#64748b",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </div>
  );
}
