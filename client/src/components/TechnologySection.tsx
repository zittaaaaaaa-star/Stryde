import ProductCard from "./ProductCard";
import kineticImage from "@assets/generated_images/Kinetic_energy_tile_product_7fb0c363.png";
import solarImage from "@assets/generated_images/Solar_hybrid_tile_product_d4649251.png";
import lightImage from "@assets/generated_images/Illuminated_tile_product_e3f294e5.png";

export default function TechnologySection() {
  const products = [
    {
      title: "Kinetic",
      description:
        "The classic energy tile, harnessing kinetic energy from footsteps to generate clean power.",
      image: kineticImage,
    },
    {
      title: "Solar+",
      description:
        "Integrated hybrid solar + kinetic energy technology for 24/7 energy generation.",
      image: solarImage,
    },
    {
      title: "Walk to Light",
      description:
        "The first kinetic tiles with built-in lighting powered 100% from footsteps.",
      image: lightImage,
    },
  ];

  return (
    <section id="technology" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Our Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions for sustainable energy generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              onClick={() => console.log(`${product.title} clicked`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
