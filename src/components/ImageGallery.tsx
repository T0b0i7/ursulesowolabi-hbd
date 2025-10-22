import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import ursule1 from "@/assets/ursule-1.jpeg";
import ursule2 from "@/assets/ursule-2.jpeg";
import ursule3 from "@/assets/ursule-3.jpeg";
import ursule4 from "@/assets/ursule-4.jpeg";
import ursule5 from "@/assets/ursule-5.jpeg";

const images = [
  { src: ursule1, alt: "Ursule OWOLABI - Portrait 1" },
  { src: ursule2, alt: "Ursule OWOLABI - Portrait 2" },
  { src: ursule3, alt: "Ursule OWOLABI - Portrait 3" },
  { src: ursule4, alt: "Ursule OWOLABI - Portrait 4" },
  { src: ursule5, alt: "Ursule OWOLABI - Portrait 5" },
];

const ImageGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!api) return;

    const applyZoomEffect = (index: number) => {
      imageRefs.current.forEach((img, i) => {
        if (img) {
          if (i === index) {
            img.classList.add("animate-ken-burns");
          } else {
            img.classList.remove("animate-ken-burns");
          }
        }
      });
    };

    api.on("select", () => {
      const selectedIndex = api?.selectedScrollSnap() || 0;
      applyZoomEffect(selectedIndex);
    });

    applyZoomEffect(0);
  }, [api]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Souvenirs Précieux
        </h2>
        
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] border border-primary/20 shadow-elegant">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
                  
                  <img
                    ref={(el) => (imageRefs.current[index] = el)}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover scale-100"
                    loading="lazy"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ImageGallery;
