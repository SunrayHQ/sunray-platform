export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1e293b, #020617)",
        color: "#e5e7eb",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "0",
        margin: "0",
      }}
    >
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 24px 80px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            background:
              "linear-gradient(90deg, #facc15, #38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
          }}
        >
          Sunray
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#cbd5f5",
            maxWidth: "620px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}
        >
          A next-generation Solana project focused on clean design,
          real community, and transparent launches.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://x.com/YourUsernameHere"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background:
                "linear-gradient(90deg, #facc15, #38bdf8)",
              color: "#020617",
              padding: "16px 34px",
              borderRadius: "14px",
              fontWeight: "700",
              fontSize: "1.05rem",
              textDecoration: "none",
              cursor: "pointer",
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
              padding: "16px 34px",
              borderRadius: "14px",
              fontWeight: "600",
              fontSize: "1.05rem",
              textDecoration: "none",
              cursor: "pointer",
              background: "#020617",
            }}
          >
            Join Community
          </a>
        </div>
      </section>

      {/* INFO CARDS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          padding: "0 24px 120px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {[
          {
            title: "Fair Launch",
            text: "No insiders, no private deals. Everyone gets the same start.",
          },
          {
            title: "Community First",
            text: "Built with transparency and long-term holders in mind.",
          },
          {
            title: "Solana Native",
            text: "Fast, cheap, and built directly for the Solana ecosystem.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.6",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
