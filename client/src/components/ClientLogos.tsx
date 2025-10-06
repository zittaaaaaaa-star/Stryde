import { SiNike, SiAdidas, SiCocacola, SiGoogle, SiFord, SiMercedes, SiIkea, SiSiemens, SiUber } from "react-icons/si";

export default function ClientLogos() {
  const logos = [
    { Icon: SiNike, name: "Nike" },
    { Icon: SiAdidas, name: "Adidas" },
    { Icon: SiCocacola, name: "Coca-Cola" },
    { Icon: SiGoogle, name: "Google" },
    { Icon: SiFord, name: "Ford" },
    { Icon: SiMercedes, name: "Mercedes" },
    { Icon: SiIkea, name: "IKEA" },
    { Icon: SiSiemens, name: "Siemens" },
    { Icon: SiUber, name: "Uber" },
  ];

  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-center">
          Trusted by leading brands worldwide
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          <div className="flex gap-16 px-8">
            {doubledLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 min-w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                data-testid={`logo-${logo.name.toLowerCase()}-${index}`}
              >
                <logo.Icon className="h-12 w-12 text-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
