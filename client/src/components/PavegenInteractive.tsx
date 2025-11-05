import { useState, useRef, useEffect } from "react";
import { Zap, Users, GraduationCap, BarChart3 } from "lucide-react";

interface Pulse {
  id: number;
  type: 'tile-to-bolt' | 'bolt-to-feature';
  targetIndex?: number;
}

export default function PavegenInteractive() {
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const [pulseIdCounter, setPulseIdCounter] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [boltActive, setBoltActive] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<number[]>([]);
  
  const tileRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Zap,
      title: "Off Grid Energy",
      description: "Generate clean electricity from footsteps"
    },
    {
      icon: Users,
      title: "Drive Footfall",
      description: "Create engaging interactive experiences"
    },
    {
      icon: GraduationCap,
      title: "Educate & Engage",
      description: "Demonstrate sustainable technology in action"
    },
    {
      icon: BarChart3,
      title: "Collect Data & Insights",
      description: "Track foot traffic and energy generation"
    }
  ];

  const handleTileClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);

    const tileToBoltPulse: Pulse = {
      id: pulseIdCounter,
      type: 'tile-to-bolt'
    };

    setPulses([tileToBoltPulse]);
    setPulseIdCounter(pulseIdCounter + 1);

    setTimeout(() => {
      setPulses([]);
      setBoltActive(true);
      
      setTimeout(() => {
        setBoltActive(false);
        
        const featurePulses: Pulse[] = features.map((_, index) => ({
          id: pulseIdCounter + 1 + index,
          type: 'bolt-to-feature',
          targetIndex: index
        }));

        featurePulses.forEach((pulse, index) => {
          setTimeout(() => {
            setPulses((prev) => [...prev, pulse]);
            
            setTimeout(() => {
              setActiveFeatures((prev) => [...prev, index]);
            }, 800);

            setTimeout(() => {
              setPulses((prev) => prev.filter((p) => p.id !== pulse.id));
            }, 1000);
          }, index * 200);
        });

        setTimeout(() => {
          setActiveFeatures([]);
        }, 2000 + features.length * 200);

        setPulseIdCounter(pulseIdCounter + features.length + 1);
      }, 600);
    }, 800);
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0a1628] via-[#0d1f2d] to-[#0f2e1f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.06),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Engage with the power of footsteps
          </h2>
          <p className="text-lg md:text-xl text-blue-200/90 leading-relaxed max-w-4xl mx-auto">
            Pavegen smart tiles convert human footsteps into electricity. Harness that energy to{" "}
            <span className="text-emerald-400 font-medium">capture attention</span>,{" "}
            <span className="text-emerald-400 font-medium">drive footfall</span> and{" "}
            <span className="text-emerald-400 font-medium">share your message</span>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-20 items-center justify-items-center relative">
            <div ref={tileRef} className="relative group" data-testid="tile-interactive">
              <button
                onClick={handleTileClick}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
                className={`relative transition-all duration-200 ${
                  isPressed ? 'scale-95' : 'scale-100 hover:scale-105'
                }`}
                data-testid="button-tile"
              >
                <div className="w-56 h-64 md:w-64 md:h-72 relative flex items-center justify-center">
                  <svg viewBox="0 0 200 230" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    
                    <polygon
                      points="100,10 170,50 170,130 100,170 30,130 30,50"
                      fill="url(#hexGrad)"
                      stroke="#22c55e"
                      strokeWidth="3"
                      className="transition-all duration-200"
                      style={{
                        filter: isPressed ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))' : 'none'
                      }}
                    />
                    
                    <circle cx="50" cy="60" r="5" fill="rgba(34, 197, 94, 0.6)" />
                    <circle cx="150" cy="60" r="5" fill="rgba(34, 197, 94, 0.6)" />
                    <circle cx="170" cy="90" r="5" fill="rgba(34, 197, 94, 0.6)" />
                    <circle cx="150" cy="120" r="5" fill="rgba(34, 197, 94, 0.6)" />
                    <circle cx="50" cy="120" r="5" fill="rgba(34, 197, 94, 0.6)" />
                    <circle cx="30" cy="90" r="5" fill="rgba(34, 197, 94, 0.6)" />
                    
                    <g transform="translate(100, 90)">
                      <path d="M0,-20 L-10,0 L-5,0 L-5,15 L5,15 L5,0 L10,0 Z" fill="rgba(34, 197, 94, 0.4)" />
                      <line x1="-12" y1="0" x2="12" y2="0" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="2" />
                      <line x1="0" y1="-10" x2="0" y2="15" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="2" />
                    </g>

                    {isPressed && (
                      <polygon
                        points="100,10 170,50 170,130 100,170 30,130 30,50"
                        fill="rgba(34, 197, 94, 0.3)"
                        className="animate-ping"
                      />
                    )}
                  </svg>

                  {isPressed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-emerald-500/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/50 whitespace-nowrap shadow-lg">
                  <span className="text-white text-sm font-medium">Click to jump</span>
                </div>
              </button>
            </div>

            <div ref={boltRef} className="relative flex items-center justify-center w-full min-h-[20rem]" data-testid="icon-lightning">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <line x1="10%" y1="50%" x2="50%" y2="50%" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="2" />
                
                {features.map((_, index) => {
                  const startX = 50;
                  const startY = 50;
                  const endX = 90;
                  const endY = 25 + (index * 16.67);
                  
                  return (
                    <path
                      key={`line-${index}`}
                      d={`M ${startX}% ${startY}% Q ${(startX + endX) / 2}% ${(startY + endY) / 2}% ${endX}% ${endY}%`}
                      stroke="rgba(34, 197, 94, 0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                  );
                })}
              </svg>

              {pulses.map((pulse) => {
                if (pulse.type === 'tile-to-bolt') {
                  return <EnergyPulse key={pulse.id} from={tileRef} to={boltRef} />;
                } else if (pulse.type === 'bolt-to-feature' && pulse.targetIndex !== undefined) {
                  return <EnergyPulse key={pulse.id} from={boltRef} to={{ current: featureRefs.current[pulse.targetIndex] }} />;
                }
                return null;
              })}

              <div 
                className={`relative z-10 bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-2xl shadow-2xl transition-all duration-300 ${
                  boltActive ? 'scale-125 shadow-[0_0_60px_rgba(34,197,94,1)]' : 'scale-100 shadow-[0_0_30px_rgba(34,197,94,0.5)]'
                }`}
              >
                <Zap className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" strokeWidth={2.5} />
                {boltActive && (
                  <>
                    <div className="absolute inset-0 bg-emerald-400/40 rounded-2xl animate-ping" />
                    <div className="absolute inset-0 bg-emerald-300/20 rounded-2xl blur-xl animate-pulse" />
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-sm lg:max-w-md">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeatures.includes(index);
                
                return (
                  <div
                    key={index}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className={`relative rounded-xl p-5 border transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-br from-emerald-500 to-green-600 border-emerald-400 shadow-[0_0_30px_rgba(34,197,94,0.8)] scale-105' 
                        : 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-emerald-500/20 hover:border-emerald-500/40'
                    }`}
                    data-testid={`feature-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-500 ${
                        isActive 
                          ? 'bg-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
                          : 'bg-emerald-500/10'
                      }`}>
                        <Icon className={`w-6 h-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-emerald-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-base mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white'}`}>
                          {feature.title}
                        </h3>
                        <p className={`text-sm transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-blue-200/70'}`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-400/30 rounded-xl animate-ping pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyPulse({ from, to }: { from: React.RefObject<HTMLElement>, to: React.RefObject<HTMLElement> }) {
  const [position, setPosition] = useState({ x: 0, y: 0, toX: 0, toY: 0 });

  useEffect(() => {
    if (from.current && to.current) {
      const fromRect = from.current.getBoundingClientRect();
      const toRect = to.current.getBoundingClientRect();
      
      setPosition({
        x: fromRect.left + fromRect.width / 2,
        y: fromRect.top + fromRect.height / 2,
        toX: toRect.left + toRect.width / 2,
        toY: toRect.top + toRect.height / 2,
      });
    }
  }, [from, to]);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        '--to-x': `${position.toX - position.x}px`,
        '--to-y': `${position.toY - position.y}px`,
      } as React.CSSProperties}
    >
      <div className="relative">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-400 rounded-full blur-xl opacity-80 animate-energy-pulse" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-300 rounded-full shadow-[0_0_20px_rgba(34,197,94,1)] animate-energy-pulse" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-energy-pulse" />
      </div>
      
      <style>{`
        @keyframes energy-pulse {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(var(--to-x), var(--to-y)) scale(0.5);
            opacity: 0;
          }
        }
        .animate-energy-pulse {
          animation: energy-pulse 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
