import { useState } from "react";
import { Zap, Users, GraduationCap, BarChart3 } from "lucide-react";

interface EnergyPulse {
  id: number;
  targetIndex: number;
}

export default function PavegenInteractive() {
  const [energyPulses, setEnergyPulses] = useState<EnergyPulse[]>([]);
  const [pulseIdCounter, setPulseIdCounter] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

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

    features.forEach((_, index) => {
      const newPulse: EnergyPulse = {
        id: pulseIdCounter + index,
        targetIndex: index,
      };

      setTimeout(() => {
        setEnergyPulses((prev: EnergyPulse[]) => [...prev, newPulse]);
      }, index * 100);

      setTimeout(() => {
        setEnergyPulses((prev: EnergyPulse[]) => 
          prev.filter((p: EnergyPulse) => p.id !== newPulse.id)
        );
      }, 1500 + index * 100);
    });

    setPulseIdCounter((prev: number) => prev + features.length);
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#1a2332] via-[#1e2d3d] to-[#1a3329] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.06),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Engage with the power of footsteps
          </h2>
          <p className="text-lg md:text-xl text-blue-200/90 leading-relaxed max-w-4xl mx-auto">
            Pavegen smart tiles convert human footsteps into electricity. Harness that energy to{" "}
            <span className="text-blue-300 font-medium">capture attention</span>,{" "}
            <span className="text-blue-300 font-medium">drive footfall</span> and{" "}
            <span className="text-blue-300 font-medium">share your message</span>.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl transform -skew-y-3 border border-gray-600/50" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-4 left-4 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/40 rounded-full" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/40 rounded-full" />
                    
                    <svg className="w-16 h-16 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
                      <path d="M8 12h8M12 8v8" />
                    </svg>
                  </div>

                  {isPressed && (
                    <div className="absolute inset-0 bg-primary/20 rounded-lg animate-ping" />
                  )}
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-700/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-500/50 whitespace-nowrap">
                  <span className="text-white text-sm font-medium">Click to jump</span>
                </div>
              </button>
            </div>

            <div className="relative flex items-center justify-center w-full h-48 lg:h-64">
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 400 200" 
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
              >
                {features.map((_, index) => {
                  const startY = 100;
                  const endY = 50 + (index * 35);
                  
                  return (
                    <g key={`path-${index}`}>
                      <path
                        d={`M 50 ${startY} Q 200 ${startY} 350 ${endY}`}
                        stroke="rgba(34, 197, 94, 0.3)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                      
                      {energyPulses
                        .filter((pulse: EnergyPulse) => pulse.targetIndex === index)
                        .map((pulse: EnergyPulse) => (
                          <circle
                            key={pulse.id}
                            r="6"
                            fill="url(#pulseGradient)"
                            filter="url(#glow)"
                          >
                            <animateMotion
                              dur="1.5s"
                              repeatCount="1"
                              path={`M 50 ${startY} Q 200 ${startY} 350 ${endY}`}
                            />
                          </circle>
                        ))}
                    </g>
                  );
                })}

                <defs>
                  <radialGradient id="pulseGradient">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              <div className="relative z-10 bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300" data-testid="icon-lightning">
                <Zap className="w-20 h-20 md:w-28 md:h-28 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" strokeWidth={2.5} />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-sm">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const hasActivePulse = energyPulses.some((p: EnergyPulse) => p.targetIndex === index);
                
                return (
                  <div
                    key={index}
                    className={`relative bg-gradient-to-br from-[#1e3a4a] to-[#1a2f3a] rounded-xl p-5 border transition-all duration-300 ${
                      hasActivePulse 
                        ? 'border-primary shadow-[0_0_20px_rgba(34,197,94,0.4)] scale-105' 
                        : 'border-emerald-500/20 hover:border-emerald-500/40'
                    }`}
                    data-testid={`feature-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        hasActivePulse 
                          ? 'bg-primary/30 shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
                          : 'bg-white/10'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-base mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-blue-200/70 text-sm">
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
