import { Camera } from 'lucide-react';
import { GlassPanel } from './GlassPanel';

export function GalleryPage() {
  const images = [
    { src: "/gate.jpg", title: "Main Access Gate", desc: "Perimeter security and access control." },
    { src: "/compound.jpg", title: "Internal Compound", desc: "Nighttime patrol routes." },
    { src: "/command.jpg", title: "Operations Center", desc: "24/7 Centralized monitoring." }
  ];

  return (
    <div className="min-h-[100dvh] bg-security-navy pt-12 pb-32 px-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 mt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <Camera className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Site Gallery</h1>
          <p className="text-security-white/60 max-w-md mx-auto">
            Visual intelligence from the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <GlassPanel key={i} delay={0.1 * i} className="overflow-hidden group cursor-pointer border border-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{img.title}</h3>
                  <p className="text-security-white/80 text-sm font-medium drop-shadow-sm">{img.desc}</p>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </div>
  );
}
