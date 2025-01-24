import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainApp from './components/MainApp';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (
      <Router>
        <MainApp />
      </Router>
    )
  );
}

function Loader() {
  const text = "LOADING...";
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center ">
      <div className="flex space-x-1">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="text-4xl text-emerald-400 font-bold animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`, 
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
