import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Icon from './AppIcon';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ slides }) => {
  const navigate = useNavigate();

  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full h-full"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`w-full h-full bg-gradient-to-br ${slide.backgroundGradient} flex items-center justify-center relative`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full"></div>
                <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-20 left-32 w-24 h-24 border-2 border-white/25 rounded-full"></div>
                <div className="absolute bottom-32 right-10 w-12 h-12 border-2 border-white/20 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-white/90">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => handleButtonClick(slide.buttonLink)}
                    className="bg-white text-slate-900 hover:bg-white/90 font-semibold px-8 py-4 text-lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
        <Icon name="ChevronLeft" size={24} className="text-white" />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
        <Icon name="ChevronRight" size={24} className="text-white" />
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides?.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-white/40 cursor-pointer transition-colors hover:bg-white/60"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;