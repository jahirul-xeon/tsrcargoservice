import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { premiumServices } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function PremiumServices() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: 'var(--color-light-bg)' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* LEFT - Service List */}
          <div>
            {premiumServices.map((s, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', cursor: 'pointer',
                  borderLeft: `3px solid ${active === i ? '#f5821f' : 'transparent'}`,
                  background: active === i ? 'white' : 'transparent',
                  transition: 'all 0.3s ease', borderRadius: '0 6px 6px 0',
                  marginBottom: '4px',
                  boxShadow: active === i ? '2px 2px 12px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <div>
                  <h5 style={{
                    fontSize: '17px', fontWeight: 700, color: active === i ? '#f5821f' : 'var(--color-text-dark)',
                    fontFamily: "'Barlow', sans-serif", marginBottom: '4px',
                  }}>
                    {s.title}
                  </h5>
                  <p style={{ fontSize: '14px', color: 'var(--color-text)', margin: 0 }}>{s.desc}</p>
                </div>
                <FiArrowRight style={{
                  fontSize: '20px', color: active === i ? '#f5821f' : '#ccc',
                  transition: 'transform 0.3s', transform: active === i ? 'translateX(4px)' : 'none',
                  flexShrink: 0, marginLeft: '16px',
                }} />
              </div>
            ))}
          </div>

          {/* RIGHT - Image */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'sticky', top: '100px' }}>
            <img
              src={premiumServices[active].image}
              alt={premiumServices[active].title}
              style={{
                width: '100%', height: '500px', objectFit: 'cover',
                transition: 'opacity 0.4s ease',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
