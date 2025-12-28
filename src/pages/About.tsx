import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Award, ArrowRight } from "lucide-react";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We prioritize our community of artists and collectors, fostering an environment where creativity thrives.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible in the digital art and NFT space.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Supporting and celebrating artists who dare to explore new forms of digital expression.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality platform and experience for all users.",
    },
  ];

  const team = [
    { avatar: avatar1, name: "Alex Chen", role: "CEO & Founder" },
    { avatar: avatar2, name: "Sarah Mills", role: "Head of Design" },
    { avatar: avatar3, name: "Mike Johnson", role: "Lead Developer" },
    { avatar: avatar4, name: "Emma Davis", role: "Community Manager" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="absolute inset-0 bg-glow opacity-40" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient">NFTme</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to empower artists and collectors by building the most innovative and accessible NFT marketplace in the world.
          </p>
        </div>
      </SectionWrapper>

      {/* Story Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2021, NFTme emerged from a simple yet powerful vision: to create a platform where digital artists could showcase their work and connect with collectors from around the globe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a small project has grown into one of the most vibrant NFT marketplaces, hosting thousands of artists and facilitating millions in transactions. We believe that blockchain technology has the power to revolutionize how we create, own, and appreciate art.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push the boundaries of what's possible, constantly innovating to provide the best experience for our growing community of creators and collectors.
              </p>
            </div>
            <div className="glass-card p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient">50K+</p>
                  <p className="text-sm text-muted-foreground mt-1">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient">100K+</p>
                  <p className="text-sm text-muted-foreground mt-1">NFTs Created</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient">$25M+</p>
                  <p className="text-sm text-muted-foreground mt-1">Trading Volume</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gradient">180+</p>
                  <p className="text-sm text-muted-foreground mt-1">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at NFTme.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind NFTme who work tirelessly to build the best NFT experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center group">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-border group-hover:ring-primary/50 transition-all duration-300"
                />
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
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
                Ready to Join Our Journey?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Become part of the NFTme community and start your NFT adventure today.
              </p>
              <Button variant="gradient" size="lg">
                Get Started <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default About;
