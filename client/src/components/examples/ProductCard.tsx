import ProductCard from "../ProductCard";
import kineticImage from "@assets/generated_images/Kinetic_energy_tile_product_7fb0c363.png";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        title="Kinetic"
        description="The classic energy tile, harnessing kinetic energy from footsteps to generate clean power."
        image={kineticImage}
        onClick={() => console.log("Product clicked")}
      />
    </div>
  );
}
