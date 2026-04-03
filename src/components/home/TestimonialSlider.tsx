import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';

export function TestimonialSlider() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="testimonial-section section-padding" style={{ background: 'var(--color-light-bg)' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">TESTIMONIAL</span>
          <h2 className="section-title">What our clients say about us</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            speed={800}
            style={{ paddingBottom: '50px' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', padding: '20px 40px' }}>
                  {/* Stars */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px', color: '#f5821f', fontSize: '18px' }}>
                    {Array.from({ length: t.rating }).map((_, j) => <FaStar key={j} />)}
                  </div>

                  {/* Quote */}
                  <p style={{ fontSize: '20px', lineHeight: 1.8, color: '#333', fontStyle: 'italic', marginBottom: '36px' }}>
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover',
                      border: '4px solid #f5821f', margin: '0 auto 16px',
                    }}
                  />
                  <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--color-text-dark)', display: 'block' }}>
                    {t.name}
                  </span>
                  <span style={{ fontSize: '14px', color: '#f5821f', display: 'block', marginTop: '4px' }}>
                    {t.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Decorative Background Avatars */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {testimonials.map((t, i) => (
            <img
              key={i}
              src={t.image}
              alt=""
              style={{
                position: 'absolute', width: '54px', height: '54px', borderRadius: '50%',
                objectFit: 'cover', opacity: 0.3, border: '3px solid white',
                top: `${20 + i * 25}%`, left: i % 2 === 0 ? '5%' : '90%',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
