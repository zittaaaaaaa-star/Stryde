import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactInquirySchema, type ContactInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
      roomSize: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInquiry) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Inquiry Submitted",
          description: "Thank you for your interest. Our team will contact you within 24 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Unable to submit your inquiry. Please email us for assistance.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-teal-50 via-emerald-50 to-lime-50 dark:from-teal-950 dark:via-emerald-950 dark:to-lime-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary text-primary-foreground border-primary-border">Contact</Badge>
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight" data-testid="heading-contact">
              Get in touch
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-contact-description">
              Contact our team to discuss licensing opportunities and product inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form and we'll get back to you promptly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
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
                        name="roomSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Room Size (sq ft)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., 500 sq ft"
                                data-testid="input-room-size"
                                {...field}
                              />
                            </FormControl>
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
                                placeholder="Tell us about your needs..."
                                className="min-h-32 resize-none"
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
                        size="lg"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:strydeinc.ny@veinternational.org"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-email"
                    >
                      strydeinc.ny@veinternational.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a
                      href="tel:+17183772871"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="link-phone"
                    >
                      +1 (718) 377-2871
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-address">
                      Room 464<br />
                      1600 Avenue L<br />
                      Brooklyn, NY 11230
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team typically responds within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}