import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { apiRequest, queryClient } from "@/lib/queryClient";
import BrandNavigation from "@/components/BrandNavigation";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  image: string;
}

export default function AdminTeam() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  const updateImageMutation = useMutation({
    mutationFn: async ({ id, file }: { id: number; file: File }) => {
      const formData = new FormData();
      formData.append("image", file);
      return apiRequest(`/api/team/${id}/image`, {
        method: "POST",
        body: formData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/team"] });
      toast({
        title: "Success",
        description: "Team member photo updated successfully",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to upload photo",
        variant: "destructive",
      });
    },
  });

  const handleFileChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      updateImageMutation.mutate({ id, file });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BrandNavigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              data-testid="button-back"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2" data-testid="heading-admin-team">
              Manage Team Photos
            </h1>
            <p className="text-muted-foreground mb-8" data-testid="text-admin-description">
              Upload photos for each team member
            </p>

            {isLoading ? (
              <div className="text-center py-12">Loading...</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers?.map((member) => (
                  <Card
                    key={member.id}
                    className="p-6"
                    data-testid={`card-admin-member-${member.id}`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary/20">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-lg font-semibold mb-1" data-testid={`text-admin-name-${member.id}`}>
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4" data-testid={`text-admin-role-${member.id}`}>
                        {member.role}
                      </p>

                      <label htmlFor={`file-${member.id}`}>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="w-full cursor-pointer"
                          onClick={() => document.getElementById(`file-${member.id}`)?.click()}
                          data-testid={`button-upload-${member.id}`}
                          disabled={updateImageMutation.isPending}
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          {updateImageMutation.isPending ? "Uploading..." : "Upload Photo"}
                        </Button>
                        <input
                          id={`file-${member.id}`}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileChange(member.id, e)}
                          data-testid={`input-file-${member.id}`}
                        />
                      </label>
                      <p className="text-xs text-muted-foreground mt-2">
                        Max 5MB • JPG, PNG
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
