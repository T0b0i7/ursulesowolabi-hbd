import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import ImageGallery from "@/components/ImageGallery";
import VideoSection from "@/components/VideoSection";
import QuoteSection from "@/components/QuoteSection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MusicPlayer />
      <ImageGallery />
      <VideoSection />
      <QuoteSection />
      <MessageSection />
      <Footer />
    </div>
  );
};

export default Index;
