import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LogoLoader } from './components/LogoLoder';
import MainApp from './components/MainApp';
import LogoLod from './img/Logo.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function Loader() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="text-center">
        <LogoLoader imageUrl={LogoLod} />
        <h2 className="text-2xl font-bold text-white mt-8 animate-fade-in">Loading My experience...</h2>
      </div>
    </div>
  );
}

export default App;
