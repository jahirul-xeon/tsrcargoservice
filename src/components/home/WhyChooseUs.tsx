import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { whyChooseTabs } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const tab = whyChooseTabs[activeTab];

  return (
    <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
      <div className="container-custom">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">WHY CHOOSE TSR</span>
          <h2 className="section-title">Trusted logistics support with TSR</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}
        >
          {/* Tab Nav */}
          <div style={{ width: '280px', flexShrink: 0 }}>
            {whyChooseTabs.map((t, i) => (
              <button
                key={i}
                className={`tabs__nav-item ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
                style={{ display: 'block', width: '100%', border: 'none', textAlign: 'left' }}
              >
                {t.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ flex: 1, display: 'flex', gap: '40px', padding: '0 40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--color-text-dark)' }}>{tab.title}</h3>
              <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>{tab.content}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
                {tab.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    <span style={{
                      width: '20px', height: '20px', background: '#f5821f', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                      fontSize: '10px', flexShrink: 0,
                    }}>
                      <FiCheck />
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ width: '280px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
              <img
                src={tab.image}
                alt={tab.title}
                style={{ width: '100%', height: '320px', objectFit: 'cover', transition: 'transform 0.5s' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
