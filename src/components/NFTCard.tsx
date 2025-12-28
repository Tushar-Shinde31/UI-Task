import { Heart } from "lucide-react";

interface NFTCardProps {
  image: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  price: string;
  likes: number;
  delay?: number;
}

const NFTCard = ({ image, title, creator, creatorAvatar, price, likes, delay = 0 }: NFTCardProps) => {
  return (
    <div 
      className="glass-card p-3 group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
          <Heart size={16} />
        </button>
      </div>
      <div className="space-y-3 px-1">
        <h3 className="font-semibold text-foreground truncate">{title}</h3>
        <div className="flex items-center gap-2">
          <img
            src={creatorAvatar}
            alt={creator}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground">@{creator}</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Current Bid</p>
            <p className="font-semibold text-foreground">{price} ETH</p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Heart size={14} className="fill-primary text-primary" />
            <span className="text-sm">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
