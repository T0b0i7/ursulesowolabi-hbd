import posterVideo from "@/assets/poster-ursule.mp4";

const VideoSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden my-20">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={posterVideo}
          type="video/mp4"
        />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-3xl animate-fade-in-up">
          <div className="inline-block px-8 py-4 rounded-full gradient-rose border border-primary/30 backdrop-blur-sm">
            <p className="text-2xl md:text-4xl font-light text-foreground italic">
              "Une lumière qui brille, même de loin"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
