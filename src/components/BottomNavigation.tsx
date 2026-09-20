import { Home, Info, Image as ImageIcon, Phone } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface BottomNavProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onChangeTab }: BottomNavProps) {
  const navItems = [
    { icon: Home, id: 'home', label: 'Home' },
    { icon: Info, id: 'about', label: 'About' },
    { icon: ImageIcon, id: 'gallery', label: 'Gallery' },
    { icon: Phone, id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="bg-security-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeTab(item.id)}
              className={twMerge(
                "flex flex-col items-center gap-1 transition-colors duration-300 w-16",
                isActive ? "text-security-accent" : "text-white/40 hover:text-white/70"
              )}
            >
              <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
