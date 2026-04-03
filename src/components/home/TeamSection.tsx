import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { teamMembers } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function TeamSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">OUR CORE TEAM</span>
          <h2 className="section-title">Meet the key Team members</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our experienced team of logistics professionals is dedicated to providing exceptional service and innovative solutions for your shipping needs.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              className="team-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="team-card__img-wrap">
                <img src={m.image} alt={m.name} className="team-card__img" />
              </div>
              <div className="team-card__overlay">
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  {[FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, j) => (
                    <a
                      key={j}
                      href="#"
                      style={{
                        width: '38px', height: '38px', background: 'rgba(255,255,255,0.2)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontSize: '14px', transition: 'background 0.2s, transform 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#f5821f'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              <div className="team-card__footer">
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '18px', fontWeight: 700, color: 'white', display: 'block' }}>
                  {m.name}
                </span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', display: 'block', marginTop: '4px' }}>
                  {m.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
