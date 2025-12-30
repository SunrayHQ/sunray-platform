export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 60%)",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        margin: 0,
      }}
    >
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <h1
          style={{
            fontSize: "3.75rem",
            fontWeight: 800,
            margin: "0 auto",
            maxWidth: "900px",
            background:
              "linear-gradient(90deg, #facc15, #38bdf8, #22c55e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sunray ☀️
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#cbd5f5",
            marginTop: "16px",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          A Solana-native platform focused on clarity, transparency,
          and real on-chain insight — built clean, fast, and intentional.
        </p>

        {/* CTA BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
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
              padding: "14px 36px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            Follow on X
          </a>

          <a
            href="https://x.com/sunrayhq"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#e5e7eb",
              padding: "14px 36px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(6px)",
            }}
          >
            Get Launch Updates
          </a>
        </div>
      </section>

      {/* DIVIDER */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          margin: "0 24px",
        }}
      />

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {[
          "Live token activity & trends",
          "Wallet flow & behavior insight",
          "Momentum & signal discovery",
          "Built specifically for Solana",
          "Launch-focused analytics (coming)",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "1.05rem",
                color: "#e5e7eb",
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </section>

      {/* PREVIEW */}
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
          }}
        >
          Platform Preview
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            color: "#9ca3af",
            lineHeight: 1.6,
          }}
        >
          A conceptual look at how insights and analytics will be presented
          once Sunray is fully live.
        </p>

        <div
          style={{
            marginTop: "36px",
            maxWidth: "860px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "36px",
            borderRadius: "18px",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
          }}
        >
          <p style={{ color: "#9ca3af", margin: 0 }}>
            Real-time modules initializing…
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "32px 24px",
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
