
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Mail, Building2, Calendar, MessageSquare, Ruler } from "lucide-react";

interface SavedInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  technology: string;
  roomSize: string;
  message: string;
  submittedAt: string;
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<SavedInquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact/inquiries");
      const data = await response.json();
      if (data.success) {
        setInquiries(data.inquiries);
      }
    } catch (error) {
      console.error("Failed to fetch inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const getTechnologyBadgeColor = (tech: string) => {
    switch (tech) {
      case "piezoelectricity": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
      case "rewod": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      default: return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
    }
  };

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Contact Inquiries</h1>
            <p className="text-muted-foreground">View all submitted contact forms</p>
          </div>
          <Button onClick={fetchInquiries} disabled={loading} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No inquiries submitted yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{inquiry.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {inquiry.email}
                      </CardDescription>
                    </div>
                    <Badge className={getTechnologyBadgeColor(inquiry.technology)}>
                      {inquiry.technology}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>{inquiry.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      <span>{inquiry.roomSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(inquiry.submittedAt).toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-start gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span className="font-medium text-sm">Message:</span>
                    </div>
                    <p className="text-sm pl-6">{inquiry.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
