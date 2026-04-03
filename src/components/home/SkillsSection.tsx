import { skills } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: 'var(--color-light-bg)' }} ref={ref}>
      <div className="container-custom" style={{ maxWidth: '800px' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">OUR SKILLS</span>
          <h2 className="section-title">Why we are considered the best in business</h2>
        </motion.div>

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            style={{ marginBottom: '28px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 600, fontSize: '15px', color: 'var(--color-text-dark)' }}>
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="skill-bar__track">
              <div
                className="skill-bar__fill"
                style={{ width: inView ? `${skill.percent}%` : '0%' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
