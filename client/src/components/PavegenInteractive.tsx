import { useState } from "react";
import { Zap, Users, GraduationCap, BarChart3 } from "lucide-react";

export default function PavegenInteractive() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [boltActive, setBoltActive] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<Set<number>>(new Set());

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

  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveFeatures(new Set());

    setTimeout(() => {
      setBoltActive(true);
      
      setTimeout(() => {
        features.forEach((_, index) => {
          setTimeout(() => {
            setActiveFeatures(prev => new Set([...prev, index]));
          }, index * 150);
        });

        setTimeout(() => {
          setIsAnimating(false);
          setBoltActive(false);
          setActiveFeatures(new Set());
        }, 2500);
      }, 600);
    }, 800);
  };

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black">
            Engage with the power of footsteps
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-black">
            STRYDE smart tiles convert human footsteps into electricity. Harness that energy to{" "}
            <span className="text-emerald-600 font-medium">capture attention</span>,{" "}
            <span className="text-emerald-600 font-medium">drive footfall</span> and{" "}
            <span className="text-emerald-600 font-medium">share your message</span>.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center">
          <div className="flex items-center justify-center gap-12 w-full px-4">
            <div className="flex-shrink-0">
              <button
                onClick={handleClick}
                className="tile-button group relative"
                data-testid="button-tile"
                disabled={isAnimating}
              >
                <div className={`tile-container ${isAnimating ? 'tile-active' : ''}`}>
                  <div className="tile-glow" />
                  
                  <svg viewBox="0 0 200 200" className="tile-svg">
                    <defs>
                      <linearGradient id="tileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--card))" />
                        <stop offset="100%" stopColor="hsl(var(--background))" />
                      </linearGradient>
                    </defs>
                    
                    <polygon
                      points="100,30 160,70 160,140 100,180 40,140 40,70"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--border))"
                      strokeWidth="2"
                    />
                  </svg>

                  <div className="tile-label">
                    <span>Press Me!</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex-shrink-0 mx-12">
              <div className={`bolt-container ${boltActive ? 'bolt-active' : ''}`}>
                <Zap className="w-32 h-32 text-emerald-500" strokeWidth={2} fill="currentColor" />
                <div className="bolt-glow" />
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-md flex-shrink-0 ml-24">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeatures.has(index);
                
                return (
                  <div
                    key={index}
                    className={`feature-box ${isActive ? 'feature-active' : ''}`}
                    data-testid={`feature-${index}`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="feature-icon">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <div className="feature-glow" />
                  </div>
                );
              })}
            </div>
          </div>

          
        </div>
      </div>

      <style>{`
        .tile-button {
          position: relative;
          width: 200px;
          height: 200px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .tile-button:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .tile-button:active:not(:disabled) {
          transform: scale(0.95);
        }

        .tile-button:disabled {
          cursor: default;
        }

        .tile-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .tile-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 50%;
          filter: blur(20px);
        }

        .tile-button:hover .tile-glow {
          opacity: 0.6;
        }

        .tile-active .tile-glow {
          opacity: 1;
          animation: pulse-glow 0.8s ease-out;
        }

        .tile-svg {
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
        }

        .tile-label {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: hsl(var(--card));
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid hsl(var(--border));
          white-space: nowrap;
          z-index: 3;
        }

        .tile-label span {
          color: hsl(var(--foreground));
          font-size: 14px;
          font-weight: 500;
        }

        .bolt-container {
          position: relative;
          transition: all 0.3s;
        }

        .bolt-glow {
          position: absolute;
          inset: -30px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent 60%);
          opacity: 0;
          filter: blur(30px);
          transition: opacity 0.3s;
        }

        .bolt-active {
          transform: scale(1.2);
        }

        .bolt-active .bolt-glow {
          opacity: 1;
          animation: bolt-pulse 0.6s ease-out;
        }

        .feature-box {
          position: relative;
          background: hsl(var(--card));
          border: 2px solid hsl(var(--border));
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s;
        }

        .feature-box:hover {
          border-color: rgba(34, 197, 94, 0.4);
        }

        .feature-active {
          background: linear-gradient(135deg, hsl(145 70% 45%), hsl(145 65% 50%)) !important;
          border-color: hsl(145 70% 50%) !important;
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
        }

        .feature-glow {
          position: absolute;
          inset: -4px;
          background: rgba(34, 197, 94, 0.3);
          border-radius: 14px;
          opacity: 0;
          filter: blur(12px);
          transition: opacity 0.3s;
          z-index: 0;
        }

        .feature-active .feature-glow {
          opacity: 1;
          animation: feature-pulse 0.5s ease-out;
        }

        .feature-icon {
          background: rgba(34, 197, 94, 0.15);
          padding: 12px;
          border-radius: 10px;
          color: rgb(34, 197, 94);
          transition: all 0.3s;
        }

        .feature-active .feature-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .line-pulse {
          animation: line-glow 0.8s ease-out;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes bolt-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes feature-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes line-glow {
          0% { stroke-width: 2; filter: drop-shadow(0 0 0 rgba(34, 197, 94, 0)); }
          50% { stroke-width: 3; filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.8)); }
          100% { stroke-width: 2; filter: drop-shadow(0 0 0 rgba(34, 197, 94, 0)); }
        }
      `}</style>
    </section>
  );
}
