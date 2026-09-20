import { FormEvent } from 'react';
import { Mail, Phone, MapPin, Briefcase, Building2, Send } from 'lucide-react';
import { GlassPanel } from './GlassPanel';

export function ContactPage() {
  const handleConsultation = (e: FormEvent) => {
    e.preventDefault();
    const text = "Hello VM Square, I would like to request a security consultation for my assets.";
    window.open(`https://wa.me/916362050656?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleJobApplication = () => {
    const text = "Hi, I would like to apply for an open position at VM Square.";
    window.open(`https://wa.me/916362050656?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-[100dvh] bg-security-navy pt-12 pb-32 px-6 overflow-y-auto">
      <div className="max-w-5xl mx-auto mt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Connect With Us</h1>
          <p className="text-security-white/60 max-w-md mx-auto">
            Whether you need elite protection or want to join our ranks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Client Inquiry */}
          <GlassPanel delay={0.1} className="p-8 border-t-4 border-t-blue-500 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Client Inquiry</h2>
                <p className="text-white/50 text-sm">Secure your assets today.</p>
              </div>
            </div>
            
            <form onSubmit={handleConsultation} className="flex-1 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="First Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
                <input type="text" required placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
              </div>
              <input type="email" required placeholder="Corporate Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50" />
              <textarea placeholder="Tell us about your security needs..." rows={4} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 resize-none"></textarea>
              <button type="submit" className="mt-auto bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 border border-blue-500/30 rounded-lg px-4 py-3 font-semibold transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Request Consultation
              </button>
            </form>
          </GlassPanel>

          {/* Careers / Apply Job */}
          <GlassPanel delay={0.2} className="p-8 border-t-4 border-t-emerald-500 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Careers at VM Square</h2>
                <p className="text-white/50 text-sm">Join our elite tactical force.</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <p className="text-security-white/70 text-sm mb-2 leading-relaxed">
                We are actively recruiting former law enforcement, military personnel, and experienced security professionals for active duty. 
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex justify-between items-center">
                  <span className="text-white text-sm font-medium">Tactical Response Officer</span>
                  <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">HIRING</span>
                </div>
                <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex justify-between items-center">
                  <span className="text-white text-sm font-medium">Command Center Analyst</span>
                  <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded">HIRING</span>
                </div>
              </div>

              <button type="button" onClick={handleJobApplication} className="mt-auto bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 border border-emerald-500/30 rounded-lg px-4 py-3 font-semibold transition-colors w-full">
                View Open Positions & Apply
              </button>
            </div>
          </GlassPanel>

        </div>

        {/* Global Contact Info */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-security-accent" /> +1 (800) 555-SECURE
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-security-accent" /> operations@vmsquare.com
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-security-accent" /> Global HQ, New York City
          </div>
        </div>

      </div>
    </div>
  );
}
