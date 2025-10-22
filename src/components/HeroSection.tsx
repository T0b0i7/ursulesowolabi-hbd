const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "var(--hero-bg)",
          backgroundPosition: "center 30%",
          backgroundSize: "cover"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-rose-900/50 to-black/70" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60 delay-0"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-40 delay-1"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50 delay-2"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-30 delay-15"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="block text-glow animate-pulse-glow bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ursule
            </span>
            <span className="block text-glow animate-pulse-glow bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent delay-03">
              OWOLABI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            Une âme en rose et noir
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
