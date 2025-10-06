import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
            Let's power your next project
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Getting started is simple, let us walk you through it step by step
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-primary-foreground">
                Name *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                placeholder="Your name"
                data-testid="input-name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-primary-foreground">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                placeholder="your@email.com"
                data-testid="input-email"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-primary-foreground">
                Company
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                placeholder="Your company"
                data-testid="input-company"
              />
            </div>

            <div>
              <Label htmlFor="projectType" className="text-primary-foreground">
                Project Type
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) =>
                  setFormData({ ...formData, projectType: value })
                }
              >
                <SelectTrigger
                  className="bg-white/10 border-white/20 text-primary-foreground"
                  data-testid="select-project-type"
                >
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smart-cities">Smart Cities</SelectItem>
                  <SelectItem value="events">Events & Activations</SelectItem>
                  <SelectItem value="retail">Retail Spaces</SelectItem>
                  <SelectItem value="transit">Transit Hubs</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-primary-foreground">
                Message *
              </Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 min-h-32"
                placeholder="Tell us about your project..."
                data-testid="input-message"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-chart-2 hover:bg-chart-2/90 text-white border-0"
              data-testid="button-submit-contact"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-4">
                Why PowerStep?
              </h3>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-start">
                  <span className="text-chart-2 mr-2">✓</span>
                  Proven technology with 500+ installations worldwide
                </li>
                <li className="flex items-start">
                  <span className="text-chart-2 mr-2">✓</span>
                  Sustainable energy generation from foot traffic
                </li>
                <li className="flex items-start">
                  <span className="text-chart-2 mr-2">✓</span>
                  Engaging interactive experiences for your audience
                </li>
                <li className="flex items-start">
                  <span className="text-chart-2 mr-2">✓</span>
                  Custom solutions for any space or event
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-2xl mb-4">
                Contact Information
              </h3>
              <div className="space-y-2 text-primary-foreground/90">
                <p>Email: info@powerstep.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Energy Street, London, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
