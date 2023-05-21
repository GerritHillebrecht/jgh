'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Keyboard, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Keyboard, Navigation]);

export default function ProductGallery({ images }: { images: string[] }) {
  return (
    <Swiper
      spaceBetween={50}
      pagination={{ enabled: true, clickable: true }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      navigation={{
        enabled: true,
      }}
      slidesPerView={1}
      loop={true}
      className="relative"
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    >
      {images.map((image) => (
        <SwiperSlide
          key={image}
          className="grid place-items-center h-full"
        >
          <picture>
            <source srcSet={image} type="image/jpeg" />
            <img
              src={image}
              alt="Picture of the author"
              className="w-full aspect-video object-cover"
            />
          </picture>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
