import { useState } from "react";
import { Button } from "@/components/ui/button";
import stadiumImage from "@assets/generated_images/Stadium_installation_project_c3aee1df.png";
import cityImage from "@assets/generated_images/Smart_city_walkway_project_c6642101.png";
import eventImage from "@assets/generated_images/Brand_activation_event_project_e9465273.png";
import transitImage from "@assets/generated_images/Transit_station_project_91c85f67.png";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
}

export default function ProjectGallery() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Stadium Energy Hub",
      location: "London, UK",
      category: "Sports",
      image: stadiumImage,
    },
    {
      id: 2,
      title: "Smart City Plaza",
      location: "Singapore",
      category: "Smart Cities",
      image: cityImage,
    },
    {
      id: 3,
      title: "Brand Activation",
      location: "New York, USA",
      category: "Events",
      image: eventImage,
    },
    {
      id: 4,
      title: "Metro Station",
      location: "Tokyo, Japan",
      category: "Transit",
      image: transitImage,
    },
    {
      id: 5,
      title: "Stadium Energy Hub",
      location: "London, UK",
      category: "Sports",
      image: stadiumImage,
    },
    {
      id: 6,
      title: "Smart City Plaza",
      location: "Singapore",
      category: "Smart Cities",
      image: cityImage,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Smart Cities", "Events", "Sports", "Transit"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Check out our work
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            <span className="font-bold text-primary">40</span> countries,{" "}
            <span className="font-bold text-primary">500+</span> projects,{" "}
            <span className="font-bold text-primary">1 Billion+</span> steps and
            counting...
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-video overflow-hidden rounded-lg hover-elevate active-elevate-2 cursor-pointer"
              onClick={() => console.log(`Project ${project.title} clicked`)}
              data-testid={`card-project-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-heading font-semibold text-xl mb-1">
                  {project.title}
                </h3>
                <p className="text-white/80">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => console.log("View all projects")}
            data-testid="button-view-all-projects"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
