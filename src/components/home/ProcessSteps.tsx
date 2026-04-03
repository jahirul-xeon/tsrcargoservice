import { processSteps } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ProcessSteps() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">OUR WORK PROCESS</span>
          <h2 className="section-title">TSR Cargo Service follows proven logistics processes</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', position: 'relative' }}>
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              style={{ textAlign: 'center', position: 'relative' }}
            >
              {/* Image with step number */}
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div style={{
                  position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)',
                  width: '48px', height: '48px', borderRadius: '50%', background: '#f5821f',
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', fontWeight: 800, fontFamily: "'Barlow', sans-serif",
                  boxShadow: '0 4px 16px rgba(245,130,31,0.4)',
                }}>
                  {step.step}
                </div>
              </div>

              <h5 style={{ fontSize: '20px', fontWeight: 700, marginTop: '30px', marginBottom: '12px', fontFamily: "'Barlow', sans-serif" }}>
                {step.title}
              </h5>
              <p style={{ fontSize: '15px', color: 'var(--color-text)', lineHeight: 1.7, maxWidth: '320px', margin: '0 auto' }}>
                {step.desc}
              </p>

              {/* Dashed connector (not on last) */}
              {i < processSteps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '110px', right: '-24px',
                  width: '48px', borderTop: '2px dashed #f5821f', opacity: 0.4,
                  display: 'none', // Visible on desktop via media query
                }} className="step-connector" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
