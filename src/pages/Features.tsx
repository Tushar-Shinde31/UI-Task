import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Easy NFT Creation",
      description: "Create and mint your NFTs in minutes with our intuitive creator tools. No technical knowledge required.",
      highlights: ["One-click minting", "Batch uploads", "Custom royalties"],
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Built on secure blockchain technology with industry-leading security protocols to protect your assets.",
      highlights: ["Smart contracts", "Escrow protection", "2FA authentication"],
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant transactions with low gas fees thanks to our optimized infrastructure.",
      highlights: ["Low gas fees", "Fast confirmation", "Layer 2 support"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track your portfolio performance with detailed insights and real-time market data.",
      highlights: ["Price tracking", "Portfolio insights", "Market trends"],
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Connect with collectors and artists from around the world in our thriving marketplace.",
      highlights: ["180+ countries", "Multi-currency", "24/7 trading"],
    },
    {
      icon: Sparkles,
      title: "Creator Tools",
      description: "Powerful tools designed to help artists showcase their work and grow their audience.",
      highlights: ["Custom storefronts", "Social integration", "Fan engagement"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="absolute inset-0 bg-glow opacity-40" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to create, collect, and trade NFTs. Built with artists and collectors in mind.
          </p>
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-8 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">99.9%</p>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">&lt;1s</p>
                <p className="text-muted-foreground">Transaction Time</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">$0.01</p>
                <p className="text-muted-foreground">Average Gas Fee</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">24/7</p>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-glow opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Experience NFTme?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join thousands of artists and collectors who are already using our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg">
                  Start Creating <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg">
                  Explore Marketplace
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Features;
