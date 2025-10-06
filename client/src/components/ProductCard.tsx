import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export default function ProductCard({
  title,
  description,
  image,
  onClick,
}: ProductCardProps) {
  return (
    <Card
      className="group hover-elevate active-elevate-2 overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
      data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading font-semibold text-2xl mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}
