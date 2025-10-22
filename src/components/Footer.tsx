const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-lg text-primary font-light">
            Joyeux Anniversaire, Ursule OWOLABI
          </p>
          <p className="text-sm text-muted-foreground">
            Un hommage artistique et émotionnel dans l'esprit de Taïk
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
        
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} • Créé avec amour 🌹
        </p>
      </div>
    </footer>
  );
};

export default Footer;
