import { useState } from 'react';
import { HeroScene } from './components/HeroScene';
import { BottomNavigation } from './components/BottomNavigation';
import { AboutPage } from './components/AboutPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { DownloadBanner } from './components/DownloadBanner';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-security-black min-h-[100dvh] text-security-white selection:bg-security-accent selection:text-white overflow-x-hidden">
      <DownloadBanner />
      {activeTab === 'home' && <HeroScene />}
      {activeTab === 'about' && <AboutPage />}
      {activeTab === 'gallery' && <GalleryPage />}
      {activeTab === 'contact' && <ContactPage />}

      <BottomNavigation activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
}

export default App;
