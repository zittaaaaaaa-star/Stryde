import { useEffect, useState, useRef } from "react";

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
}

function StatCard({ value, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const targetValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div
      ref={elementRef}
      className="text-center"
      data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-base sm:text-lg text-muted-foreground">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: "500", label: "Installations", suffix: "+" },
    { value: "2000000", label: "kWh Generated", suffix: "+" },
    { value: "40", label: "Countries", suffix: "+" },
    { value: "1000000000", label: "Steps Tracked", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
