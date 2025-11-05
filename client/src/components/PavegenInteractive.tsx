import { useState } from "react";
import { Zap, Users, GraduationCap, BarChart3 } from "lucide-react";

export default function PavegenInteractive() {
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'tile-to-bolt' | 'bolt-active' | 'bolt-to-features'>('idle');
  const [isPressed, setIsPressed] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<number[]>([]);

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
    if (animationPhase !== 'idle') return;
    
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    setAnimationPhase('tile-to-bolt');

    setTimeout(() => {
      setAnimationPhase('bolt-active');
      
      setTimeout(() => {
        setAnimationPhase('bolt-to-features');
        
        features.forEach((_, index) => {
          setTimeout(() => {
            setActiveFeatures(prev => [...prev, index]);
          }, index * 200 + 800);
        });

        setTimeout(() => {
          setAnimationPhase('idle');
          setActiveFeatures([]);
        }, 3000);
      }, 800);
    }, 900);
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
          <div className="grid lg:grid-cols-[300px_1fr_400px] gap-8 lg:gap-12 items-center justify-items-center relative">
            <div className="relative group" data-testid="tile-interactive">
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

            <div className="relative flex items-center justify-center w-full h-80" data-testid="icon-lightning">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="50" x2="50" y2="50" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="0.5" />
                
                {features.map((_, index) => (
                  <line
                    key={index}
                    x1="50"
                    y1="50"
                    x2="100"
                    y2={20 + index * 15}
                    stroke="rgba(34, 197, 94, 0.3)"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>

              {animationPhase === 'tile-to-bolt' && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="energy-orb-to-bolt">
                    <div className="w-6 h-6 bg-emerald-400 rounded-full blur-md" />
                    <div className="absolute inset-0 w-4 h-4 bg-emerald-300 rounded-full" />
                    <div className="absolute inset-0 w-2 h-2 bg-white rounded-full m-auto" />
                  </div>
                </div>
              )}

              {animationPhase === 'bolt-to-features' && features.map((_, index) => (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`energy-orb-to-feature-${index}`}>
                    <div className="w-5 h-5 bg-emerald-400 rounded-full blur-md" />
                    <div className="absolute inset-0 w-3 h-3 bg-emerald-300 rounded-full" />
                    <div className="absolute inset-0 w-1.5 h-1.5 bg-white rounded-full m-auto" />
                  </div>
                </div>
              ))}

              <div 
                className={`relative z-10 bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-2xl transition-all duration-300 ${
                  animationPhase === 'bolt-active' || animationPhase === 'bolt-to-features'
                    ? 'scale-125 shadow-[0_0_60px_rgba(34,197,94,1)]' 
                    : 'scale-100 shadow-[0_0_30px_rgba(34,197,94,0.5)]'
                }`}
              >
                <Zap className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" strokeWidth={2.5} />
                {(animationPhase === 'bolt-active' || animationPhase === 'bolt-to-features') && (
                  <>
                    <div className="absolute inset-0 bg-emerald-400/40 rounded-2xl animate-ping" />
                    <div className="absolute inset-0 bg-emerald-300/20 rounded-2xl blur-2xl" />
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeatures.includes(index);
                
                return (
                  <div
                    key={index}
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
                        <h3 className={`font-semibold text-base mb-1 transition-colors duration-500 text-white`}>
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

      <style>{`
        .energy-orb-to-bolt {
          position: relative;
          animation: moveToBolt 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes moveToBolt {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(calc(50vw - 150px), 0);
            opacity: 0;
          }
        }

        ${features.map((_, index) => `
          .energy-orb-to-feature-${index} {
            position: relative;
            animation: moveToFeature${index} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            animation-delay: ${index * 0.2}s;
            opacity: 0;
          }

          @keyframes moveToFeature${index} {
            0% {
              transform: translate(0, 0);
              opacity: 1;
            }
            100% {
              transform: translate(calc(25vw), calc(${-150 + index * 80}px));
              opacity: 0;
            }
          }
        `).join('\n')}
      `}</style>
    </section>
  );
}
