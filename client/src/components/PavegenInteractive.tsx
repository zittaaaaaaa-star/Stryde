import { useState } from "react";
import { Zap, Users, GraduationCap, BarChart3 } from "lucide-react";

interface TileToBoltPulse {
  id: number;
}

interface BoltToFeaturePulse {
  id: number;
  targetIndex: number;
}

export default function PavegenInteractive() {
  const [tileToBoltPulses, setTileToBoltPulses] = useState<TileToBoltPulse[]>([]);
  const [boltToFeaturePulses, setBoltToFeaturePulses] = useState<BoltToFeaturePulse[]>([]);
  const [pulseIdCounter, setPulseIdCounter] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [boltActive, setBoltActive] = useState(false);

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

    const tileToBoltPulse: TileToBoltPulse = {
      id: pulseIdCounter,
    };

    setTileToBoltPulses((prev: TileToBoltPulse[]) => [...prev, tileToBoltPulse]);
    setPulseIdCounter((prev: number) => prev + 1);

    setTimeout(() => {
      setTileToBoltPulses((prev: TileToBoltPulse[]) => 
        prev.filter((p: TileToBoltPulse) => p.id !== tileToBoltPulse.id)
      );
      
      setBoltActive(true);
      setTimeout(() => setBoltActive(false), 800);

      features.forEach((_, index) => {
        const boltToFeaturePulse: BoltToFeaturePulse = {
          id: pulseIdCounter + 1 + index,
          targetIndex: index,
        };

        setTimeout(() => {
          setBoltToFeaturePulses((prev: BoltToFeaturePulse[]) => [...prev, boltToFeaturePulse]);
        }, index * 120);

        setTimeout(() => {
          setBoltToFeaturePulses((prev: BoltToFeaturePulse[]) => 
            prev.filter((p: BoltToFeaturePulse) => p.id !== boltToFeaturePulse.id)
          );
        }, 1000 + index * 120);
      });

      setPulseIdCounter((prev: number) => prev + features.length + 1);
    }, 800);
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-emerald-600 to-primary bg-clip-text text-transparent">
            Engage with the power of footsteps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Pavegen smart tiles convert human footsteps into electricity. Harness that energy to{" "}
            <span className="text-primary font-medium">capture attention</span>,{" "}
            <span className="text-primary font-medium">drive footfall</span> and{" "}
            <span className="text-primary font-medium">share your message</span>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 items-center justify-items-center">
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
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-lg shadow-2xl transform -skew-y-3 border-2 border-primary/30" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-primary/60 rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary/60 rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-primary/60 rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary/60 rounded-full shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    
                    <svg className="w-16 h-16 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>

                  {isPressed && (
                    <>
                      <div className="absolute inset-0 bg-primary/30 rounded-lg animate-ping" />
                      <div className="absolute inset-0 bg-primary/10 rounded-lg" />
                    </>
                  )}
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 whitespace-nowrap shadow-lg">
                  <span className="text-foreground text-sm font-medium">Click to jump</span>
                </div>
              </button>
            </div>

            <div className="relative flex items-center justify-center w-full h-48 lg:h-64">
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 500 250" 
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
              >
                <path
                  d="M 50 125 Q 150 125 250 125"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                
                {tileToBoltPulses.map((pulse: TileToBoltPulse) => (
                  <g key={`tile-bolt-${pulse.id}`}>
                    <circle
                      r="8"
                      fill="url(#tilePulseGradient)"
                      filter="url(#glowStrong)"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="1"
                        path="M 50 125 Q 150 125 250 125"
                      />
                    </circle>
                    <circle
                      r="16"
                      fill="url(#tilePulseGradientOuter)"
                      opacity="0.4"
                    >
                      <animateMotion
                        dur="0.8s"
                        repeatCount="1"
                        path="M 50 125 Q 150 125 250 125"
                      />
                    </circle>
                  </g>
                ))}

                {features.map((_, index) => {
                  const startY = 125;
                  const endY = 60 + (index * 40);
                  
                  return (
                    <g key={`path-${index}`}>
                      <path
                        d={`M 250 ${startY} Q 350 ${(startY + endY) / 2} 450 ${endY}`}
                        stroke="hsl(var(--primary) / 0.3)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                      
                      {boltToFeaturePulses
                        .filter((pulse: BoltToFeaturePulse) => pulse.targetIndex === index)
                        .map((pulse: BoltToFeaturePulse) => (
                          <g key={pulse.id}>
                            <circle
                              r="7"
                              fill="url(#featurePulseGradient)"
                              filter="url(#glow)"
                            >
                              <animateMotion
                                dur="1s"
                                repeatCount="1"
                                path={`M 250 ${startY} Q 350 ${(startY + endY) / 2} 450 ${endY}`}
                              />
                            </circle>
                            <circle
                              r="14"
                              fill="url(#featurePulseGradientOuter)"
                              opacity="0.3"
                            >
                              <animateMotion
                                dur="1s"
                                repeatCount="1"
                                path={`M 250 ${startY} Q 350 ${(startY + endY) / 2} 450 ${endY}`}
                              />
                            </circle>
                          </g>
                        ))}
                    </g>
                  );
                })}

                <defs>
                  <radialGradient id="tilePulseGradient">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  </radialGradient>
                  <radialGradient id="tilePulseGradientOuter">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="featurePulseGradient">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" stopOpacity="0.7" />
                  </radialGradient>
                  <radialGradient id="featurePulseGradientOuter">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glowStrong">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              <div 
                className={`relative z-10 bg-gradient-to-br from-primary to-emerald-600 p-8 rounded-2xl shadow-2xl transform transition-all duration-300 ${
                  boltActive ? 'scale-110 rotate-12 shadow-[0_0_40px_hsl(var(--primary)/0.8)]' : 'rotate-6 hover:rotate-12'
                }`}
                data-testid="icon-lightning"
              >
                <Zap className="w-20 h-20 md:w-28 md:h-28 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" strokeWidth={2.5} />
                {boltActive && (
                  <div className="absolute inset-0 bg-primary/40 rounded-2xl animate-ping" />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const hasActivePulse = boltToFeaturePulses.some((p: BoltToFeaturePulse) => p.targetIndex === index);
                
                return (
                  <div
                    key={index}
                    className={`relative bg-gradient-to-br from-card to-card/50 rounded-xl p-5 border transition-all duration-300 ${
                      hasActivePulse 
                        ? 'border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)] scale-105' 
                        : 'border-primary/20 hover:border-primary/40'
                    }`}
                    data-testid={`feature-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        hasActivePulse 
                          ? 'bg-primary/30 shadow-[0_0_15px_hsl(var(--primary)/0.5)]' 
                          : 'bg-primary/10'
                      }`}>
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground font-semibold text-base mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
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
