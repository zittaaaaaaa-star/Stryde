import { useState } from "react";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface EnergyPulse {
  id: number;
  tileId: number;
  startX: number;
  startY: number;
}

export default function PavegenDemo() {
  const [energyPulses, setEnergyPulses] = useState<EnergyPulse[]>([]);
  const [energyLevel, setEnergyLevel] = useState(0);
  const [pulseIdCounter, setPulseIdCounter] = useState(0);

  const tiles = [
    { id: 1, x: 1, y: 0 },
    { id: 2, x: 2, y: 0 },
    { id: 3, x: 0, y: 1 },
    { id: 4, x: 1, y: 1 },
    { id: 5, x: 2, y: 1 },
    { id: 6, x: 3, y: 1 },
    { id: 7, x: 1, y: 2 },
    { id: 8, x: 2, y: 2 },
  ];

  const handleTileClick = (e: React.MouseEvent<HTMLDivElement>, tileId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const newPulse: EnergyPulse = {
      id: pulseIdCounter,
      tileId,
      startX,
      startY,
    };

    setEnergyPulses((prev: EnergyPulse[]) => [...prev, newPulse]);
    setPulseIdCounter((prev: number) => prev + 1);
    setEnergyLevel((prev: number) => Math.min(prev + 10, 100));

    setTimeout(() => {
      setEnergyPulses((prev: EnergyPulse[]) => prev.filter((p: EnergyPulse) => p.id !== newPulse.id));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d1f2d] to-[#0f2e1f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <header className="flex items-center justify-between p-6">
          <Link href="/">
            <Button variant="outline" className="bg-transparent border-primary/30 text-primary hover:bg-primary/10" data-testid="button-back">
              ← Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Energy Generated</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                    style={{ width: `${energyLevel}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-primary">{energyLevel}%</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-emerald-400 to-accent bg-clip-text text-transparent">
              Pavegen Energy Tiles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click or tap on the floor tiles below to generate kinetic energy. Watch as your footsteps power the future.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            <div className="relative">
              <div className="grid grid-cols-4 gap-4 p-8">
                {tiles.map((tile) => (
                  <div
                    key={tile.id}
                    onClick={(e) => handleTileClick(e, tile.id)}
                    className="tile-element relative cursor-pointer"
                    style={{
                      gridColumn: tile.x + 1,
                      gridRow: tile.y + 1,
                    }}
                    data-testid={`tile-${tile.id}`}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 rounded-lg hover-elevate active-elevate-2 transition-all duration-200 flex items-center justify-center group relative overflow-visible">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                      <div className="absolute inset-0 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] opacity-0 group-active:opacity-100 transition-opacity" />
                      
                      <svg className="w-10 h-10 text-primary/60 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
                        <path d="M8 12h8M12 8v8" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 pointer-events-none">
                {energyPulses.map((pulse: EnergyPulse) => (
                  <EnergyPulse
                    key={pulse.id}
                    startX={pulse.startX}
                    startY={pulse.startY}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative" data-testid="energy-icon">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary/40 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                  <Zap className="w-24 h-24 text-primary drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
                </div>
              </div>
              
              <div className="text-center bg-card/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-primary/20">
                <p className="text-2xl font-bold text-primary mb-1">{energyLevel * 5}W</p>
                <p className="text-sm text-muted-foreground">Power Output</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-8 rounded-full transition-all duration-300 ${
                      i < Math.floor(energyLevel / 17)
                        ? 'bg-gradient-to-t from-primary to-accent shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                        : 'bg-muted/20'
                    }`}
                    data-testid={`indicator-${i}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kinetic Energy</h3>
              <p className="text-sm text-muted-foreground">
                Each step generates up to 5 watts of electricity through piezoelectric technology.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Power</h3>
              <p className="text-sm text-muted-foreground">
                Convert footsteps into clean, renewable energy for lighting and devices.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Cities</h3>
              <p className="text-sm text-muted-foreground">
                Power urban infrastructure through the natural movement of people.
              </p>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes pulse-travel {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0.5);
            opacity: 0;
          }
        }

        .energy-pulse {
          animation: pulse-travel 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}

function EnergyPulse({ startX, startY }: { startX: number; startY: number }) {
  const iconElement = document.querySelector('[data-testid="energy-icon"]');
  const iconRect = iconElement?.getBoundingClientRect();
  
  const endX = iconRect ? iconRect.left + iconRect.width / 2 - startX : 0;
  const endY = iconRect ? iconRect.top + iconRect.height / 2 - startY : 0;

  return (
    <div
      className="energy-pulse absolute pointer-events-none"
      style={{
        left: `${startX}px`,
        top: `${startY}px`,
        '--end-x': `${endX}px`,
        '--end-y': `${endY}px`,
      } as React.CSSProperties}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full w-8 h-8 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-accent rounded-full w-4 h-4 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
        
        <svg className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 text-primary animate-spin" style={{ animationDuration: '0.5s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      </div>
    </div>
  );
}
