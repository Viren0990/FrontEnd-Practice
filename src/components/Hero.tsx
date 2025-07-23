
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  return (
    
    <div className="max-w-xl mx-auto w-full relative px-4 md:px-0">
      
      <h1 className="text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 leading-tight">
        Forget About Code
      </h1>

      {/* Carousel for Text */}
      <Carousel>
        <CarouselContent>
          {/* Carousel Item 1 (Paragraph) */}
          {/* text-base: Default font size for mobile, md:text-lg: for medium screens */}
          {/* opacity-90: Slight transparency for better background contrast (optional) */}
          {/* leading-relaxed: Improves line height for readability */}
          <CarouselItem>
            <p className="text-center text-base md:text-lg text-white opacity-90 leading-relaxed">
              Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.
            </p>
          </CarouselItem>

          {/* Carousel Item 2 (Paragraph) */}
          <CarouselItem>
            <p className="text-center text-base md:text-lg text-white opacity-90 leading-relaxed">
              Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.
            </p>
          </CarouselItem>

          {/* Carousel Item 3 (Paragraph - with the interesting text!) */}
          <CarouselItem>
            <p className="text-center text-base md:text-lg text-white opacity-90 leading-relaxed">
              That sign you found near the map to the hidden village says "Arato shrine", and the area you were at was designated as a natural monument on June 1st Showa 41 (1966) That's so cool, and part of what I love about Japan, how much stuff that has been around for centuries and has been meticulously preserved.
            </p>
          </CarouselItem>
        </CarouselContent>

        {/* Carousel Navigation Arrows */}
        {/*
          - absolute: Positions them relative to the parent div (.max-w-xl.mx-auto.w-full.relative)
          - top-1/2 -translate-y-1/2: Centers them vertically
          - left-0 / right-0: Positions them at the edges of the text block
          - w-10 h-10: Sizing
          - text-white: Color of the arrow icon
          - z-10: Ensures they are above the text, but below other potential overlays
        */}
        <CarouselPrevious className="bg-transparent border-0 w-10 h-10 text-white z-10 hidden md:flex" />
        <CarouselNext className="bg-transparent border-0 w-10 h-10 text-white z-10 hidden md:flex" />
      </Carousel>
    </div>
  );
};