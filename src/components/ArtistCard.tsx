interface ArtistCardProps {
  avatar: string;
  name: string;
  sales: string;
  rank: number;
}

const ArtistCard = ({ avatar, name, sales, rank }: ArtistCardProps) => {
  return (
    <div className="glass-card p-4 flex items-center gap-4 group hover:border-primary/50 transition-all duration-300">
      <div className="relative">
        <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-xs font-bold flex items-center justify-center text-primary-foreground">
          {rank}
        </span>
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-all duration-300"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground truncate">{name}</h4>
        <p className="text-sm text-muted-foreground">{sales} ETH</p>
      </div>
    </div>
  );
};

export default ArtistCard;
