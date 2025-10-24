import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactInquirySchema, type ContactInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function LicensingContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactInquiry>({
    resolver: zodResolver(contactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      technology: "all",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInquiry) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Contact inquiry:", data);
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-contact">
              Get Started with Patent Licensing
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-contact-description">
              Contact our team to discuss licensing opportunities and how our technology can benefit your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Licensing Inquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you promptly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  data-testid="input-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company name"
                                data-testid="input-company"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="technology"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Technology of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-technology">
                                  <SelectValue placeholder="Select a technology" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="piezoelectricity">Piezoelectricity</SelectItem>
                                <SelectItem value="thermoelectricity">Thermoelectricity</SelectItem>
                                <SelectItem value="rewod">REWOD</SelectItem>
                                <SelectItem value="all">All Technologies</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your licensing needs..."
                                className="min-h-32"
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <a
                          href="mailto:licensing@harnesswetech.com"
                          className="text-sm text-muted-foreground hover:text-foreground"
                          data-testid="link-email"
                        >
                          licensing@harnesswetech.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Phone</p>
                        <a
                          href="tel:+1-555-0123"
                          className="text-sm text-muted-foreground hover:text-foreground"
                          data-testid="link-phone"
                        >
                          +1 (555) 012-3456
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Address</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-address">
                          Innovation Center<br />
                          123 Technology Drive<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Our licensing team typically responds within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
