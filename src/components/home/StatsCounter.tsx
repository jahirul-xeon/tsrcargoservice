import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../../data/siteData';
import { motion } from 'framer-motion';

export function StatsCounter() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} style={{ background: 'var(--color-dark)', padding: '80px 0' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              style={{ textAlign: 'center', padding: '20px' }}
            >
              <div className="stat-item__number" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                {inView ? (
                  <CountUp end={s.value} duration={2} />
                ) : (
                  <span>0</span>
                )}
                {s.suffix && <span style={{ fontSize: '40px', fontWeight: 800, color: '#f5821f' }}>{s.suffix}</span>}
              </div>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginTop: '10px', letterSpacing: '0.5px' }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
