import { caseStudies } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function CaseStudies() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">OUR CASE STUDIES</span>
          <h2 className="section-title">Best Cases</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {caseStudies.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              style={{
                position: 'relative', overflow: 'hidden', borderRadius: '8px',
                cursor: 'pointer', aspectRatio: i === 0 || i === 4 ? '1/1.2' : '1/1',
                gridRow: i === 0 || i === 4 ? 'span 1' : 'auto',
              }}
            >
              <img
                src={c.image}
                alt={c.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.08)'; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
              {/* Category Tag */}
              <span style={{
                position: 'absolute', top: '16px', left: '16px', background: '#f5821f',
                color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '12px',
                fontWeight: 600, letterSpacing: '1px', zIndex: 2,
              }}>
                {c.category}
              </span>
              {/* Overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(13,27,53,0.9) 0%, transparent 100%)',
                padding: '30px 20px 20px', zIndex: 1,
              }}>
                <h5 style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: "'Barlow', sans-serif" }}>
                  {c.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
