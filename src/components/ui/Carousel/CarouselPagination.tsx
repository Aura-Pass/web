import { useEffect, useState } from 'react';
import { type CarouselApi } from '.';

interface CarouselPaginationProps {
  api: CarouselApi;
}

export const CarouselPagination = ({ api }: CarouselPaginationProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<number[]>([]);

  const handleSetCurrentSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    if (!api) return;
    setSlides(api.scrollSnapList());
    const changeCurrentPageCallback = api.on('select', (emblaApi) => {
      handleSetCurrentSlide(emblaApi.selectedScrollSnap());
    });

    const slideChangeCallback = api.on('slidesChanged', (emblaApi) => {
      setSlides(emblaApi.scrollSnapList());
    });

    return () => {
      changeCurrentPageCallback.clear();
      slideChangeCallback.clear();
    };
  }, [api]);

  const handleChangeSlide = (slideIndex: number) => {
    api?.scrollTo(slideIndex, false);
  };

  if (!api) return null;
  return (
    <div className='absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2'>
      {slides.map((slide, i) => (
        <button
          key={slide}
          data-active={currentSlide === i}
          onClick={() => handleChangeSlide(i)}
          className='size-[10px] cursor-pointer rounded-full bg-[#FEFDFF1A] shadow-md transition-all data-[active="true"]:border-transparent data-[active="true"]:bg-[#62E7DE]'
        />
      ))}
    </div>
  );
};

CarouselPagination.displayName = 'CarouselPagination';
