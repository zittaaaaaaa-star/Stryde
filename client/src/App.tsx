
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import ProductsPage from "@/pages/Products";
import TechnologiesPage from "@/pages/Technologies";
import InteractivePage from "@/pages/Interactive";
import LicensingPage from "@/pages/Licensing";
import NotFound from "@/pages/not-found";
import AdminInquiries from "@/pages/AdminInquiries";
import AdminTeam from "@/pages/AdminTeam";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/technologies" component={TechnologiesPage} />
      <Route path="/interactive" component={InteractivePage} />
      <Route path="/licensing" component={LicensingPage} />
      <Route path="/admin/inquiries" component={AdminInquiries} />
      <Route path="/admin/team" component={AdminTeam} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
