import React from 'react';
import { Code2, Code, FileCode, Braces, Terminal, GitBranch, Database, Bug, Laptop, Cpu, Cloud, Globe } from 'lucide-react';

const Background = () => {
  const icons = [
    { Icon: Code2, color: 'text-blue-400' },
    { Icon: Code, color: 'text-purple-400' },
    { Icon: FileCode, color: 'text-emerald-400' },
    { Icon: Braces, color: 'text-pink-400' },
    { Icon: Terminal, color: 'text-cyan-400' },
    { Icon: GitBranch, color: 'text-orange-400' },
    { Icon: Database, color: 'text-yellow-400' },
    { Icon: Bug, color: 'text-red-400' },
    { Icon: Laptop, color: 'text-indigo-400' },
    { Icon: Cpu, color: 'text-teal-400' },
    { Icon: Cloud, color: 'text-sky-400' },
    { Icon: Globe, color: 'text-violet-400' }
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90"></div>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const { Icon, color } = icons[i % icons.length];
          const size = Math.random() * (48 - 24) + 24;
          const rotation = Math.random() * 360;
          
          return (
            <div
              key={i}
              className={`absolute animate-float ${color}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 8 + 6}s`,
                transform: `rotate(${rotation}deg)`,
                filter: 'drop-shadow(0 0 8px currentColor)',
                opacity: 0.4
              } as React.CSSProperties}
            >
              <Icon 
                size={size}
                strokeWidth={1.5}
                className="transition-all duration-1000"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;