import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5">
        Made with 
        <Heart className="w-4 h-4 text-primary fill-primary inline-block animate-pulse-soft" /> 
        by Janvi Kataria
      </p>
    </footer>
  );
};

export default Footer;
