import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export function DownloadBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay showing the banner slightly for better UX
    const timer = setTimeout(() => {
      const hasDismissed = sessionStorage.getItem('vmsquare_app_banner_dismissed');
      if (!hasDismissed) {
        setIsVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('vmsquare_app_banner_dismissed', 'true');
  };

  const handleInstall = () => {
    // In a real PWA, this would trigger the beforeinstallprompt event.
    // For now, we'll just dismiss it to simulate the behavior.
    alert("Downloading VM Square App...");
    handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-security-black/95 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between shadow-2xl transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-security-accent/20 rounded-xl border border-security-accent/30 flex items-center justify-center shrink-0">
          <Shield className="w-5 h-5 text-security-accent" />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-bold">VM Square App</span>
          <span className="text-white/60 text-[10px]">Faster. Secure. Native.</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3">
        <button 
          onClick={handleInstall}
          className="bg-security-accent hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-colors shadow-lg shadow-blue-500/20"
        >
          INSTALL
        </button>
        <button onClick={handleDismiss} className="text-white/40 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
