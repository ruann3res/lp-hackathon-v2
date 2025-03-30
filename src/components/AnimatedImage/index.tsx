import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AnimatedImage = ({ src, alt, className, priority = false }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsLoaded(false); // Reset loading state when `src` changes
    }
  }, [src, priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder blur */}
      <div
        className={cn(
          "absolute inset-0 bg-muted/30 blur-2xl scale-110 transform transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          className,
          "transition-all duration-300",
          isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-lg scale-105"
        )}
        onLoad={handleImageLoad}
      />
    </div>
  );
};


export default AnimatedImage;