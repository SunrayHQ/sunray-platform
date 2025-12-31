import { useEffect, useState } from "react";

export default function Home() {
  const launchDate = new Date("2026-01-02T00:00:00Z");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ launched: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(135deg, #0f172a, #020617)", color: "#fff" }}>

      {/* Header */}
      <header style={{ padding: "32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>Sunray ☀️</h1>
        <p style={{ color: "#94a3b8", marginTop: "10px" }}>
          Solana On-Chain Insight & Analytics
        </p>
      </header>

      {/* Hero */}
      <section style={{ padding: "90px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.4rem", marginBottom: "18px" }}>
          Transparency. Speed. Clarity.
        </h2>
        <p style={{ maxWidth: "720px", margin: "0 auto", fontSize: "1.15rem", color: "#cbd5f5" }}>
          Sunray is a Solana-native platform built to track real-time token activity,
          wallet behavior, and launch momentum — without noise.
        </p>
      </section>

      {/* Countdown */}
      <section style={{
        background: "#020617",
        padding: "60px 24px",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "12px" }}>
          Launching January 2, 2026
        </h3>

        {timeLeft.launched ? (
          <p style={{ fontSize: "1.3rem", color: "#22c55e" }}>
            Sunray is live ☀️
          </p>
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "24px",
            flexWrap: "wrap"
          }}>
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} style={{
                background: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "12px",
                padding: "18px 22px",
                minWidth: "90px"
              }}>
                <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
                  {timeLeft[unit] ?? "--"}
                </div>
                <div style={{ color: "#94a3b8", marginTop: "4px" }}>
                  {unit}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Features */}
      <section style={{ padding: "70px 24px" }}>
        <h3 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "28px" }}>
          What Sunray Delivers
        </h3>

        <ul style={{
          maxWidth: "760px",
          margin: "0 auto",
          listStyle: "none",
          padding: 0,
          color: "#cbd5f5",
          fontSize: "1.1rem"
        }}>
          <li>• Live Solana token activity & momentum</li>
          <li>• Wallet flow and behavior insights</li>
          <li>• Early signal detection</li>
          <li>• Clean data, zero clutter</li>
          <li>• Built for speed & scale</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "30px",
        textAlign: "center",
        color: "#64748b",
        borderTop: "1px solid #1e293b"
      }}>
        © {new Date().getFullYear()} Sunray
      </footer>

    </div>
  );
}
