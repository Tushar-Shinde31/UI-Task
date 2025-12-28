import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import NFTCard from "@/components/NFTCard";
import ArtistCard from "@/components/ArtistCard";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Flame, TrendingUp } from "lucide-react";

// Import images
import heroNft from "@/assets/hero-nft.png";
import bitcoinArt from "@/assets/bitcoin-art.png";
import nft1 from "@/assets/nft-1.png";
import nft2 from "@/assets/nft-2.png";
import nft3 from "@/assets/nft-3.png";
import nft4 from "@/assets/nft-4.png";
import community from "@/assets/community.png";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const Home = () => {
  const stats = [
    { value: "32K+", label: "Artworks" },
    { value: "20K+", label: "Artists" },
    { value: "10K+", label: "Auctions" },
  ];

  const nfts = [
    { image: nft1, title: "Geometric Dreams", creator: "alexart", creatorAvatar: avatar1, price: "1.25", likes: 342 },
    { image: nft2, title: "Fluid Motion", creator: "sarahnft", creatorAvatar: avatar2, price: "0.89", likes: 281 },
    { image: nft3, title: "Cyber Guardian", creator: "mikecreates", creatorAvatar: avatar3, price: "2.15", likes: 456 },
    { image: nft4, title: "Cosmic Journey", creator: "emmadigital", creatorAvatar: avatar4, price: "1.45", likes: 198 },
  ];

  const artists = [
    { avatar: avatar1, name: "Alex Chen", sales: "245.8", rank: 1 },
    { avatar: avatar2, name: "Sarah Mills", sales: "198.2", rank: 2 },
    { avatar: avatar3, name: "Mike Johnson", sales: "156.9", rank: 3 },
    { avatar: avatar4, name: "Emma Davis", sales: "134.5", rank: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover Rare Collections of{" "}
                <span className="text-gradient">Art & NFT's</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Buy, sell and discover exclusive digital assets by the world's leading artists. Start your collection today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="gradient" size="lg">
                  Explore <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg">
                  Create NFT
                </Button>
              </div>
              <div className="flex gap-8 md:gap-12 justify-center lg:justify-start pt-4">
                {stats.map((stat, index) => (
                  <StatCard key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 glow-purple rounded-3xl opacity-30 animate-pulse-slow" />
              <div className="relative glass-card p-4 animate-float">
                <img
                  src={heroNft}
                  alt="Featured NFT"
                  className="w-full max-w-md rounded-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-xl flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src={avatar1} alt="Bidder" className="w-8 h-8 rounded-full ring-2 ring-background" />
                    <img src={avatar2} alt="Bidder" className="w-8 h-8 rounded-full ring-2 ring-background" />
                    <img src={avatar3} alt="Bidder" className="w-8 h-8 rounded-full ring-2 ring-background" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Current Bid</p>
                    <p className="font-semibold text-foreground">2.45 ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Auction Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="text-primary" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Auction</h2>
          </div>
          <div className="glass-card p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={bitcoinArt}
                  alt="Bitcoin Art Work"
                  className="w-full aspect-square md:aspect-[4/3] object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Featured Artwork</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">Bitcoin Art Work</h3>
                </div>
                <div className="flex items-center gap-3">
                  <img src={avatar1} alt="Creator" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="text-sm text-muted-foreground">Created by</p>
                    <p className="font-semibold text-foreground">@cryptoartist</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass p-4 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">Current Bid</p>
                    <p className="text-2xl font-bold text-foreground">1.09 ETH</p>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Clock size={14} />
                      <p className="text-sm">Ends in</p>
                    </div>
                    <p className="text-2xl font-bold text-foreground">05:23:47</p>
                  </div>
                </div>
                <Button variant="gradient" size="lg" className="w-full">
                  Place Bid
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trending NFTs Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-primary" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trending This Week</h2>
            </div>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              View All <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nfts.map((nft, index) => (
              <NFTCard key={index} {...nft} delay={index * 100} />
            ))}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Button variant="ghost" size="sm">
              View All <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Popular Artists Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Popular Artists</h2>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              View All <ArrowRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {artists.map((artist, index) => (
              <ArtistCard key={index} {...artist} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Community CTA Section */}
      <SectionWrapper className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-glow opacity-30" />
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Join Our Creative Community
                </h2>
                <p className="text-muted-foreground text-lg">
                  Connect with thousands of artists, collectors, and enthusiasts. Be part of the NFT revolution and shape the future of digital art.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gradient" size="lg">
                    Join Community
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={community}
                  alt="Community"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Home;
