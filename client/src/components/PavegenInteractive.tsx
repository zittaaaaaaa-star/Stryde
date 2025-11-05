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

    setTileToBoltPulses([tileToBoltPulse]);
    setPulseIdCounter(pulseIdCounter + 1);

    setTimeout(() => {
      setTileToBoltPulses([]);
      
      setBoltActive(true);
      setTimeout(() => setBoltActive(false), 800);

      const newPulses: BoltToFeaturePulse[] = features.map((_, index) => ({
        id: pulseIdCounter + 1 + index,
        targetIndex: index,
      }));

      newPulses.forEach((pulse, index) => {
        setTimeout(() => {
          setBoltToFeaturePulses((prev) => [...prev, pulse]);
        }, index * 150);

        setTimeout(() => {
          setBoltToFeaturePulses((prev) => prev.filter((p) => p.id !== pulse.id));
        }, 1200 + index * 150);
      });

      setPulseIdCounter(pulseIdCounter + features.length + 1);
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
          <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-16 items-center justify-items-center">
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
                <div className="w-56 h-64 md:w-72 md:h-80 relative flex items-center justify-center">
                  <svg viewBox="0 0 200 230" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--card))', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--muted))', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    
                    <polygon
                      points="100,10 170,50 170,130 100,170 30,130 30,50"
                      fill="url(#hexGrad)"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      className="transition-all duration-200"
                      style={{
                        filter: isPressed ? 'drop-shadow(0 0 20px hsl(var(--primary) / 0.6))' : 'none'
                      }}
                    />
                    
                    <circle cx="50" cy="60" r="5" fill="hsl(var(--primary) / 0.6)" className="shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <circle cx="150" cy="60" r="5" fill="hsl(var(--primary) / 0.6)" className="shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <circle cx="170" cy="90" r="5" fill="hsl(var(--primary) / 0.6)" className="shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <circle cx="150" cy="120" r="5" fill="hsl(var(--primary) / 0.6)" className="shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <circle cx="50" cy="120" r="5" fill="hsl(var(--primary) / 0.6)" className="shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    <circle cx="30" cy="90" r="5" fill="hsl(var(--primary) / 0.6)" className="shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                    
                    <g transform="translate(100, 90)">
                      <path d="M0,-20 L-10,0 L-5,0 L-5,15 L5,15 L5,0 L10,0 Z" fill="hsl(var(--primary) / 0.4)" />
                      <line x1="-12" y1="0" x2="12" y2="0" stroke="hsl(var(--primary) / 0.4)" strokeWidth="2" />
                      <line x1="0" y1="-10" x2="0" y2="15" stroke="hsl(var(--primary) / 0.4)" strokeWidth="2" />
                    </g>

                    {isPressed && (
                      <polygon
                        points="100,10 170,50 170,130 100,170 30,130 30,50"
                        fill="hsl(var(--primary) / 0.3)"
                        className="animate-ping"
                      />
                    )}
                  </svg>

                  {isPressed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 bg-primary/20 rounded-full animate-ping" />
                    </div>
                  )}
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 whitespace-nowrap shadow-lg">
                  <span className="text-foreground text-sm font-medium">Click to jump</span>
                </div>
              </button>
            </div>

            <div className="relative flex items-center justify-center w-full min-h-[16rem]">
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 500 300" 
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="pulseGrad">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                <line x1="60" y1="150" x2="250" y2="150" stroke="hsl(var(--primary) / 0.3)" strokeWidth="2" />
                
                {tileToBoltPulses.map((pulse) => (
                  <g key={`tile-bolt-${pulse.id}`}>
                    <circle cx="60" cy="150" r="0" fill="url(#pulseGrad)" filter="url(#glow)">
                      <animate attributeName="cx" from="60" to="250" dur="0.8s" />
                      <animate attributeName="r" values="0;10;8" dur="0.8s" />
                      <animate attributeName="opacity" from="1" to="0" dur="0.8s" />
                    </circle>
                  </g>
                ))}

                {features.map((_, index) => {
                  const endY = 80 + (index * 48);
                  
                  return (
                    <g key={`line-${index}`}>
                      <line x1="250" y1="150" x2="440" y2={endY} stroke="hsl(var(--primary) / 0.3)" strokeWidth="2" />
                      
                      {boltToFeaturePulses
                        .filter((pulse) => pulse.targetIndex === index)
                        .map((pulse) => (
                          <g key={pulse.id}>
                            <circle cx="250" cy="150" r="0" fill="url(#pulseGrad)" filter="url(#glow)">
                              <animate attributeName="cx" from="250" to="440" dur="1s" />
                              <animate attributeName="cy" from="150" to={endY} dur="1s" />
                              <animate attributeName="r" values="0;8;7" dur="1s" />
                              <animate attributeName="opacity" from="1" to="0" dur="1s" />
                            </circle>
                          </g>
                        ))}
                    </g>
                  );
                })}

                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
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
                  <div className="absolute inset-0 bg-white/30 rounded-2xl animate-ping" />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const hasActivePulse = boltToFeaturePulses.some((p) => p.targetIndex === index);
                
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
