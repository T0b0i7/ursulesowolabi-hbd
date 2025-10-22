const MessageSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative gradient-rose rounded-3xl p-12 md:p-16 border border-primary/30 rose-glow overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary text-glow">
                Pour Toi, Ursule
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
              Un site, une chanson, un souvenir — 
              <span className="block mt-4 text-primary font-medium">
                pour te dire que t'es toujours lumière,
              </span>
              <span className="block mt-2 text-secondary">
                même de loin.
              </span>
            </p>

            <div className="pt-8 flex flex-col items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-0"></div>
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse delay-02"></div>
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse delay-04"></div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Avec toute mon affection 🌹
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
