import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function CtaBanner() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      ref={ref}
      style={{
        position: 'relative', padding: '100px 0',
        backgroundImage: `url('/images/photo-1586528116311-ad8dd3c8310d.jpg')`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,27,53,0.85)' }} />
      <div className="container-custom" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.h2
          style={{ color: 'white', marginBottom: '16px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          We ensure safe transportation & delivery
        </motion.h2>
        <motion.p
          style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '640px', margin: '0 auto 30px', lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From pickup to final drop-off, TSR Cargo Service focuses on protecting cargo, reducing delays, and ensuring timely delivery.
        </motion.p>
        <motion.div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '28px', fontWeight: 800, color: '#f5821f', fontFamily: "'Barlow', sans-serif", marginBottom: '30px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FiPhone />
          +49015753244139
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/contact-us" className="btn-primary">Contact Us</Link>
        </motion.div>
      </div>
    </section>
  );
}
