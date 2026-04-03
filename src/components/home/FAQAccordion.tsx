import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { faqItems } from '../../data/siteData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-padding" style={{ background: 'var(--color-light-bg)' }} ref={ref}>
      <div className="container-custom" style={{ maxWidth: '800px' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">Do you have any question? Find answer here</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Some frequently asked questions about our services.
          </p>
        </motion.div>

        {faqItems.map((item, i) => (
          <motion.div
            key={i}
            className={`faq-item ${openIndex === i ? 'open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <button className="faq-item__trigger" onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <span className="faq-item__arrow">
                <FiChevronDown />
              </span>
            </button>
            <div className="faq-item__body">
              <div className="faq-item__body-inner">
                {item.answer}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
