import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Droplets, CheckCircle2 } from "lucide-react";

export default function TechnologyShowcase() {
  return (
    <section id="technologies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4" data-testid="badge-section-title">
            Our Patent Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-technologies">
            Three Revolutionary Technologies
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-technologies-description">
            Each patent represents breakthrough innovations in energy harvesting, ready for commercial licensing.
          </p>
        </div>

        <Tabs defaultValue="piezo" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8" data-testid="tabs-technologies">
            <TabsTrigger value="piezo" data-testid="tab-piezo">
              <Zap className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Piezoelectricity</span>
              <span className="sm:hidden">Piezo</span>
            </TabsTrigger>
            <TabsTrigger value="thermo" data-testid="tab-thermo">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Thermoelectricity</span>
              <span className="sm:hidden">Thermo</span>
            </TabsTrigger>
            <TabsTrigger value="rewod" data-testid="tab-rewod">
              <Droplets className="h-4 w-4 mr-2" />
              REWOD
            </TabsTrigger>
          </TabsList>

          <TabsContent value="piezo" data-testid="content-piezo">
            <Card>
              <CardHeader className="gap-1">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Piezoelectric Energy Harvesting</CardTitle>
                    <CardDescription>Convert mechanical pressure into electrical energy</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Our piezoelectric patent covers innovative methods for capturing energy from mechanical stress, 
                  vibrations, and pressure. This technology transforms everyday movements and forces into usable 
                  electrical power with unprecedented efficiency.
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {[
                      "Smart flooring systems in high-traffic areas",
                      "Wearable devices and health monitors",
                      "Industrial machinery vibration harvesting",
                      "Transportation infrastructure",
                      "Building structural health monitoring"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Patent Advantages:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      High energy conversion efficiency
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Scalable design architecture
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Minimal maintenance requirements
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Diverse material compatibility
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="thermo" data-testid="content-thermo">
            <Card>
              <CardHeader className="gap-1">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Thermoelectric Power Generation</CardTitle>
                    <CardDescription>Harvest energy from temperature gradients</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Our thermoelectric patent enables efficient conversion of waste heat into electricity. 
                  By leveraging temperature differentials, this technology recovers energy that would otherwise 
                  be lost, making it ideal for industrial and automotive applications.
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {[
                      "Industrial waste heat recovery systems",
                      "Automotive exhaust energy harvesting",
                      "Data center cooling optimization",
                      "Geothermal power enhancement",
                      "Building HVAC efficiency improvements"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Patent Advantages:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Operates on low-grade heat
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      No moving parts
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Long operational lifespan
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Silent operation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewod" data-testid="content-rewod">
            <Card>
              <CardHeader className="gap-1">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>REWOD Technology</CardTitle>
                    <CardDescription>Reverse Electrowetting on Dielectric for energy recovery</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Our REWOD (Reverse Electrowetting on Dielectric) patent represents a groundbreaking approach 
                  to energy harvesting through liquid manipulation. This technology reverses the electrowetting 
                  process to generate electrical power from fluid movement and surface interactions.
                </p>

                <div>
                  <h4 className="font-semibold mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {[
                      "Microfluidic energy harvesting devices",
                      "Self-powered lab-on-chip systems",
                      "Rainwater energy capture systems",
                      "Ocean wave energy conversion",
                      "Portable water-activated power sources"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Patent Advantages:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Novel energy source
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Compact design potential
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Environmentally friendly
                    </Badge>
                    <Badge variant="secondary" className="justify-start py-2 px-4">
                      Scalable technology
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
