import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Activity, Wallet, TrendingUp, BarChart3, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function SunrayPlatform() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-neutral-800 sticky top-0 bg-neutral-950/80 backdrop-blur z-50">
        <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
          <Sun className="text-yellow-400" /> Sunray
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-2xl">Docs</Button>
          <Button className="rounded-2xl">Connect Wallet</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-10 py-24 max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-bold leading-tight mb-6 max-w-4xl">
          Clear, real-time insight into Solana on-chain activity
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-neutral-400 max-w-2xl mb-10 text-lg">
          Track tokens, wallets, and momentum across Solana with clarity and transparency.
        </motion.p>
        <div className="flex gap-4">
          <Button size="lg" className="rounded-2xl">Open Dashboard</Button>
          <Button size="lg" variant="outline" className="rounded-2xl">pump.fun Launch</Button>
        </div>
      </section>

      {/* Dashboard Sections */}
      <section className="px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        <Card className="bg-neutral-900 border-neutral-800 rounded-2xl lg:col-span-2">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Activity className="text-yellow-400" /> Live Token Feed</h3>
            <p className="text-neutral-400">Real-time Solana token activity, volume changes, and liquidity movements will appear here.</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Wallet className="text-yellow-400" /> Wallet Tracker</h3>
            <p className="text-neutral-400">Monitor notable wallets, track behavior, and identify accumulation patterns.</p>
          </CardContent>
        </Card>
      </section>

      {/* Analytics */}
      <section className="px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><BarChart3 className="text-yellow-400" /> Analytics</h3>
            <p className="text-neutral-400">Historical data, performance metrics, and comparative analytics will live here.</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><TrendingUp className="text-yellow-400" /> Momentum Signals</h3>
            <p className="text-neutral-400">Early trend detection powered by clean, verifiable on-chain signals.</p>
          </CardContent>
        </Card>
      </section>

      {/* pump.fun Launch */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <Card className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-neutral-800 rounded-3xl">
          <CardContent className="p-10 text-center">
            <Rocket className="mx-auto text-yellow-400 mb-6" size={40} />
            <h2 className="text-4xl font-bold mb-4">pump.fun Launch</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
              Sunray will launch publicly via pump.fun while the platform continues active development. Transparency and visibility from day one.
            </p>
            <Button size="lg" className="rounded-2xl">View Token</Button>
          </CardContent>
        </Card>
      </section>

      {/* Trust / Features */}
      <section className="px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[{
          icon: ShieldCheck,
          title: "Transparency",
          desc: "All data sourced directly from on-chain activity."
        },{
          icon: Sun,
          title: "Solana Native",
          desc: "Optimized for speed, scale, and low fees."
        },{
          icon: Wallet,
          title: "Wallet First",
          desc: "User-controlled access and non-custodial design."
        }].map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="bg-neutral-900 border-neutral-800 rounded-2xl">
            <CardContent className="p-8">
              <Icon className="text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-neutral-400">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Platform Status / Wallet & Data Wiring */}
      <section className="px-10 max-w-7xl mx-auto mb-24">
        <Card className="bg-neutral-900 border-neutral-800 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4">Platform Status</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>• Wallet adapter structure ready (Phantom / Solflare)</li>
              <li>• RPC data hooks prepared for Solana mainnet</li>
              <li>• Token & wallet feeds structured for live indexing</li>
              <li>• Deployment optimized for Vercel</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 border-t border-neutral-800 text-neutral-500 text-sm flex justify-between max-w-7xl mx-auto">
        <span>© {new Date().getFullYear()} Sunray</span>
        <span>Production-ready</span>
      </footer>
    </div>
  );
}
