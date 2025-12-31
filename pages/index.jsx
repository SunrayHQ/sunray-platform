import { useEffect, useState } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const launchDate = new Date("January 2, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        setCountdown("Launching Soon");
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "32px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>Sunray ☀️</h1>
        <p style={{ color: "#ccc", marginTop: "8px" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* HERO */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.3rem", marginBottom: "16px" }}>
          Clarity for Solana Traders
        </h2>
        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            fontSize: "1.15rem",
            color: "#ddd",
          }}
        >
          Sunray delivers real-time wallet activity, momentum signals, and launch
          analytics — all in one fast, transparent dashboard.
        </p>
      </section>

      {/* COUNTDOWN */}
      <section style={{ textAlign: "center", paddingBottom: "40px" }}>
        <h3 style={{ fontSize: "1.4rem", color: "#ffcc00" }}>
          Platform Launch Countdown
        </h3>
        <p style={{ fontSize: "1.3rem", marginTop: "8px" }}>
          {countdown}
        </p>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          "Live token momentum tracking",
          "Wallet behavior insights",
          "Early signal discovery",
          "Launch analytics",
          "Built for Solana speed",
          "Clean, no-noise UI",
        ].map((feature, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "24px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "1.1rem" }}>{feature}</p>
          </div>
        ))}
      </section>

      {/* CTA BUTTONS */}
      <section style={{ textAlign: "center", padding: "60px 24px" }}>
        <a
          href="https://x.com/sunrayhq"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginRight: "16px",
            background: "#ffcc00",
            color: "#111",
            padding: "14px 26px",
            borderRadius: "8px",
            fontWeight: "bold",
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
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            padding: "14px 26px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Dashboard Coming Soon
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} Sunray
      </footer>
    </div>
  );
}
