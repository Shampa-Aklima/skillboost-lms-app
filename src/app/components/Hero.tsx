import Image from "next/image"
import Container from "./Container"
import type React from "react"

interface HeroProps {
  variant: 'home' | 'about';
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  topButton?: {
    text: string;
    onClick?: () => void;
  };
}

export default function Hero({
  variant = 'home',
  title,
  subtitle,
  description,
  imageSrc,
  topButton
}: HeroProps): React.ReactElement {
  const ContentSection = () => (
    <div className="space-y-6 pl-16">
      {topButton && (
        <button 
          onClick={topButton.onClick}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11 px-8 text-base bg-purple-900 text-white hover:bg-purple-800"
        >
          {topButton.text}
        </button>
      )}
      {subtitle && <p className="text-xl text-[#F2277E]">{subtitle}</p>}
      <h2 className="text-xl md:text-xl lg:text-6xl font-bold">
        {title}
      </h2>
      {description && (
        <div 
          className="text-lg md:text-xl opacity-90 max-w-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <div className="flex flex-wrap gap-4">
        {variant === 'home' ? (
          <>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11 px-8 text-base bg-white text-purple-900 hover:bg-gray-100">
              View courses
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 h-11 px-8 text-base border border-white text-white hover:bg-white/10">
              Find out more
            </button>
          </>
        ) : (
          <>
            
          </>
        )}
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="flex justify-center p-7 lg:justify-center">
      <div className="relative z-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
        <Image
          src={imageSrc}
          alt={variant === 'home' ? "Hero Image" : "About Us"}
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );

  return (
    <section className={`py-16 md:py-24 ${variant === 'home' ? 'bg-[#170F2F] text-white' : 'bg-white text-[#170F2F]'}`}>
      <Container>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center">
          {variant === 'home' ? (
            <>
              <ContentSection />
              <ImageSection />
            </>
          ) : (
            <>
              <ImageSection />
              <ContentSection />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

