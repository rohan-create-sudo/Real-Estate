
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/properties':
        return <Properties />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="antialiased selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
