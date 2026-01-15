import { Heart, Sparkles, Shield } from "lucide-react";

interface WelcomeHeroProps {
  onStart: () => void;
}

const WelcomeHero = ({ onStart }: WelcomeHeroProps) => {
  return (
    <div className="min-h-screen gradient-sunset flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Soft glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-breathe" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-warmGlow/20 blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-lg text-center space-y-8">
        {/* Floating heart icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-float shadow-glow">
              <Heart className="w-10 h-10 text-primary fill-primary/30" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-sunsetCoral animate-pulse-soft" />
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight">
            A Safe Space for
            <span className="block text-primary">Your Heart</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
            I'm here to listen without judgment, support you through difficult moments, 
            and help you find clarity in matters of the heart.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border/50">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Safe & Private</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border/50">
            <Heart className="w-4 h-4 text-sunsetCoral" />
            <span className="text-sm font-medium">No Judgment</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border border-border/50">
            <Sparkles className="w-4 h-4 text-warmGlow" />
            <span className="text-sm font-medium">Always Here</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Begin Your Journey
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </span>
        </button>

        {/* Gentle disclaimer */}
        <p className="text-muted-foreground/70 text-sm max-w-sm mx-auto animate-fade-up" style={{ animationDelay: "0.6s" }}>
          I'm not a professional therapist, but I care deeply and I'm here to support you with warmth and understanding.
        </p>
      </div>
    </div>
  );
};

export default WelcomeHero;
