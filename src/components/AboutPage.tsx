import { Shield, Target, Award } from 'lucide-react';
import { GlassPanel } from './GlassPanel';

export function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-security-navy pt-12 pb-32 px-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 mt-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-security-accent/20 border border-security-accent/30 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <Shield className="w-10 h-10 text-security-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">VM Square</h1>
          <p className="text-security-white/70 text-lg max-w-2xl mx-auto">
            Elite Security Management & Operations. Securing what matters most with cutting-edge technology and world-class personnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <GlassPanel delay={0.1} className="p-8 border-t-4 border-t-blue-500">
            <Target className="w-8 h-8 text-blue-400 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
            <p className="text-security-white/60 leading-relaxed">
              To provide unparalleled security solutions through continuous innovation, rigorous training, and an unwavering commitment to the safety of our clients and their assets.
            </p>
          </GlassPanel>

          <GlassPanel delay={0.2} className="p-8 border-t-4 border-t-emerald-500">
            <Award className="w-8 h-8 text-emerald-400 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-3">Our Excellence</h2>
            <p className="text-security-white/60 leading-relaxed">
              Recognized industry leaders with over two decades of experience securing premium residential, commercial, and highly classified governmental compounds.
            </p>
          </GlassPanel>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6 text-center">Why VM Square?</h2>
        <div className="space-y-4">
          {[
            { title: "Advanced Technology", desc: "Integrated AI surveillance, holographic command centers, and real-time biometric tracking." },
            { title: "Elite Personnel", desc: "Our officers are recruited from top-tier law enforcement and military backgrounds." },
            { title: "24/7 Rapid Response", desc: "A dedicated tactical response unit always on standby for critical incident resolution." }
          ].map((item, i) => (
            <GlassPanel key={i} delay={0.3 + (i * 0.1)} className="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <span className="text-security-accent font-bold">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-security-white/60 text-sm">{item.desc}</p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
