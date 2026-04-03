import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HeroNavigation() {
  const swiper = useSwiper();
  return (
    <>
      <div
        onClick={() => swiper.slidePrev()}
        className="absolute top-1/2 left-4 lg:left-6 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md cursor-pointer text-white/80 hover:text-white hover:bg-black/80 transition-all duration-500 opacity-0 -translate-x-8 group-hover/hero:opacity-100 group-hover/hero:translate-x-0 group/btn shadow-[0_0_20px_rgba(245,130,31,0.3)]"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover/btn:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </div>

      <div
        onClick={() => swiper.slideNext()}
        className="absolute top-1/2 right-4 lg:right-6 -translate-y-1/2 z-50 flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-md cursor-pointer text-white/80 hover:text-white hover:bg-black/80 transition-all duration-500 opacity-0 translate-x-8 group-hover/hero:opacity-100 group-hover/hero:translate-x-0 shadow-[0_0_20px_rgba(245,130,31,0.3)] group/btn"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </>
  );
}

export function HeroSlider() {
  return (
    <div className="hero-slider relative h-[calc(100vh-105px)] min-h-[600px] w-full overflow-hidden bg-[#060c17] group/hero">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{
          type: 'custom',
          el: '.premium-pagination',
          renderCustom: (_, current, total) => {
            return `<span class="text-white font-light">${String(current).padStart(2, '0')}</span><span class="text-white/30 mx-2">/</span><span class="text-white/50 text-sm">${String(total).padStart(2, '0')}</span>`;
          }
        }}
        loop
        speed={1400}
        style={{ width: '100%', height: '100%' }}
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="relative w-full h-full overflow-hidden">
                {/* Background Image or Video with Ultra-Slow Premium Zoom Effect */}
                {(slide as any).video ? (
                  <video
                    src={(slide as any).video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[12000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
                      }`}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
                      }`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                  />
                )}

                {/* Dark overlay to make centered text readable against bright video/images */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                <div className="relative z-20 max-w-[1400px] w-full h-full mx-auto px-6 lg:px-16 flex items-center justify-center">
                  {/* Perfect Center Alignment */}
                  <div className="max-w-5xl text-center flex flex-col items-center w-full translate-y-[-2%]">
                    <AnimatePresence>
                      {isActive && (
                        <>
                          {/* Label line reveal */}
                          <div className="overflow-hidden mb-8 flex items-center justify-center gap-4">
                            <motion.div
                              className="h-[2px] bg-[#f5821f]"
                              initial={{ width: 0 }}
                              animate={{ width: 60 }}
                              exit={{ width: 0 }}
                              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                            <motion.span
                              className="text-[13px] md:text-[14px] font-medium tracking-[5px] uppercase text-[#f5821f] font-jost"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                              {slide.label}
                            </motion.span>
                            <motion.div
                              className="h-[2px] bg-[#f5821f]"
                              initial={{ width: 0 }}
                              animate={{ width: 60 }}
                              exit={{ width: 0 }}
                              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>

                          {/* Staggered Title Reveal */}
                          <div className="flex flex-col gap-3 mb-10 text-center">
                            <div className="overflow-hidden py-1">
                              <motion.h1
                                className="text-white text-6xl md:text-8xl lg:text-[100px] font-extrabold leading-[0.95] font-barlow tracking-tight"
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-100%', opacity: 0 }}
                                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                              >
                                {slide.title[0]}
                              </motion.h1>
                            </div>
                            <div className="overflow-hidden py-1">
                              <motion.h1
                                className="text-white text-6xl md:text-8xl lg:text-[100px] font-extrabold leading-[0.95] font-barlow tracking-tight"
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-100%', opacity: 0 }}
                                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <span className="text-[#f5821f] drop-shadow-md">{slide.title[1]}</span>
                              </motion.h1>
                            </div>
                          </div>

                          <div className="overflow-hidden mb-14 text-center">
                            <motion.p
                              className="text-white/75 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 30 }}
                              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                              {slide.subtitle}
                            </motion.p>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="flex justify-center"
                          >
                            <Link to="/contact-us" className="btn-primary">
                              Contact Us
                            </Link>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        <HeroNavigation />
      </Swiper>
    </div>
  );
}
