const QuoteSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="relative">
          {/* Decorative quotes */}
          <div className="absolute -top-8 -left-4 md:-left-12 text-8xl md:text-9xl text-primary/20 font-serif leading-none">"</div>
          <div className="absolute -bottom-8 -right-4 md:-right-12 text-8xl md:text-9xl text-primary/20 font-serif leading-none rotate-180">"</div>
          
          <div className="relative z-10 space-y-8 py-12">
            <p className="text-3xl md:text-5xl font-light leading-relaxed">
              <span className="block mb-4 text-primary text-glow">
                Y'a des gens qu'on oublie pas…
              </span>
              <span className="block text-foreground">
                Bon anniversaire, Ursule.
              </span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
