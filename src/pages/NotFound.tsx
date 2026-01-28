import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, MapPin, Phone, ArrowRight, Compass } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestedLinks = [
    { label: "Return Home", href: "/", icon: Home },
    { label: "Explore Destinations", href: "/destinations", icon: MapPin },
    { label: "Take Safari Quiz", href: "/quiz", icon: Compass },
    { label: "Contact Us", href: "/#contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section with Safari Theme */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number with Safari Styling */}
            <div className="relative mb-8">
              <h1 className="text-[150px] sm:text-[200px] font-display font-bold text-primary/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Compass className="w-10 h-10 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message */}
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Lost in the Savanna?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              The trail you're looking for seems to have wandered off. Don't worry, even the best explorers take a wrong turn sometimes.
            </p>
            
            {/* Suggested Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {suggestedLinks.map((link) => (
                <Link key={link.label} to={link.href}>
                  <Button 
                    variant="outline" 
                    className="w-full h-auto flex flex-col items-center gap-2 py-4 hover:bg-primary/5 hover:border-primary transition-all group"
                  >
                    <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">{link.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
            
            {/* Main CTA */}
            <Link to="/">
              <Button size="lg" className="btn-gold group">
                Back to Safari Base
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            {/* Fun Fact */}
            <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Safari Fact:</span> The word "safari" comes from Swahili and means "journey." 
                Your journey continues – let us help you find your way!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
