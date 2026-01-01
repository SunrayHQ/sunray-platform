"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1e3a8a 0%, #020617 60%)",
        color: "#e5e7eb",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "32px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: 700 }}>
          Sunray ☀️
        </h1>
        <p style={{ opacity: 0.8 }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px 40px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>
          Clarity for Solana Markets
        </h2>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
          Sunray delivers real-time wallet activity, momentum signals,
          and launch insights — designed to help traders move with
          confidence on Solana.
        </p>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
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
          <button
            key={i}
            onClick={() =>
              alert(`${item.title} — platform live.`)
            }
            style={{
              textAlign: "left",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "22px",
              borderRadius: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.1)";
            }}
          >
            <h3
              style={{
                margin: "0 0 8px",
                color: "#facc15",
              }}
            >
              {item.title}
            </h3>
            <p style={{ margin: 0, opacity: 0.85 }}>
              {item.desc}
            </p>
          </button>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <a
          href="https://x.com/sunrayhq"
          target="_blank"
          style={{
            display: "inline-block",
            background: "#facc15",
            color: "#020617",
            padding: "14px 26px",
            borderRadius: "999px",
            fontWeight: 600,
            marginRight: "12px",
            textDecoration: "none",
          }}
        >
          Follow on X
        </a>

        <button
          onClick={() =>
            alert("Platform is live. Stay tuned.")
          }
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "#e5e7eb",
            padding: "14px 26px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
          }}
        >
          Platform Live
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "24px",
          opacity: 0.5,
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </main>
  );
}
