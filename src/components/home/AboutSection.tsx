import { Link } from 'react-router-dom';
import { FiCheck, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const bullets = [
  ['Secure Handling', 'Frozen Product Shipping', 'On-Time Delivery'],
  ['Customs Support', 'Safe Warehousing', 'Door to Door Delivery'],
];

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: 'var(--color-light-bg)' }} ref={ref}>
      <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* LEFT - Images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <img
              src="/images/photo-1553413077-190dd305871c.jpg"
              alt="Cargo workers"
              style={{ borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover' }}
            />
            <img
              src="/images/photo-1586528116311-ad8dd3c8310d.jpg"
              alt="Containers"
              style={{ borderRadius: '8px', width: '100%', height: '240px', objectFit: 'cover', marginTop: '30px' }}
            />
          </div>
          {/* Experience Badge */}
          <div style={{
            position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
            background: '#f5821f', color: 'white', padding: '20px 30px', borderRadius: '8px',
            textAlign: 'center', fontFamily: "'Barlow', sans-serif", boxShadow: '0 8px 24px rgba(245,130,31,0.4)',
          }}>
            <div style={{ fontSize: '36px', fontWeight: 800, lineHeight: 1 }}>29</div>
            <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '1px' }}>Years of Experience</div>
          </div>

          {/* Partner Logos (placeholder) */}
          {/* <div style={{ display: 'flex', gap: '16px', marginTop: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} style={{
                width: '80px', height: '40px', background: 'rgba(0,0,0,0.06)', borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px',
                color: '#999', fontWeight: 600,
              }}>
                PARTNER
              </div>
            ))}
          </div> */}
        </motion.div>

        {/* RIGHT - Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-label">ABOUT TSR CARGO</span>
          <h2 className="section-title">We keep your cargo damage-free</h2>
          <p style={{ marginBottom: '24px', lineHeight: 1.75 }}>
            From pickup to final delivery, we protect your shipment with careful handling, secure staging, and proactive monitoring. With air, ocean and road options—plus warehousing and customs support—you get smoother transit, fewer delays and full visibility.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px', marginBottom: '30px' }}>
            {bullets.flat().map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                <span style={{
                  width: '20px', height: '20px', background: '#f5821f', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                  fontSize: '10px', flexShrink: 0,
                }}>
                  <FiCheck />
                </span>
                {b}
              </div>
            ))}
          </div>

          <Link to="/contact-us" className="btn-primary" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            Contact Us
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245,130,31,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f5821f',
            }}>
              <FiPhone style={{ fontSize: '20px' }} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--color-text)' }}>Have Questions?</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-dark)', fontFamily: "'Barlow', sans-serif" }}>
                +49015753244139
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
