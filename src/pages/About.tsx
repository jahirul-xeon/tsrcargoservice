import { PageHero } from '../components/PageHero';
import { FiAward } from 'react-icons/fi';
import { StatsCounter } from '../components/home/StatsCounter';
import { TeamSection } from '../components/home/TeamSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { CtaBanner } from '../components/home/CtaBanner';
import { ProcessSteps } from '../components/home/ProcessSteps';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* About Content Section */}
      <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
        <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">EXPLORE TSR CARGO</span>
            <h2 className="section-title">About TSR Cargo Service</h2>
            <p style={{ marginBottom: '16px', lineHeight: 1.75 }}>
              Established in 1997, TSR Cargo Service has grown to become one of Bangladesh's most trusted freight forwarding and logistics companies. With our aspiration to be the leading freight forwarder, we have continuously invested in our people and technology.
            </p>
            <p style={{ marginBottom: '30px', lineHeight: 1.75 }}>
              Our trained employees and updated IT infrastructure enable us to deliver world-class logistics solutions. We connect businesses across continents with reliable ocean freight, air cargo, warehousing, and customs brokerage services.
            </p>

            {/* Awards Badge */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px',
              background: 'var(--color-light-bg)', borderRadius: '8px', marginBottom: '30px',
              border: '1px solid var(--color-border)',
            }}>
              <FiAward style={{ fontSize: '32px', color: '#f5821f' }} />
              <div>
                <span style={{ fontWeight: 700, color: 'var(--color-text-dark)', fontFamily: "'Barlow', sans-serif", fontSize: '18px' }}>
                  1+ Awards
                </span>
                <span style={{ fontSize: '14px', color: 'var(--color-text)', display: 'block' }}>
                  from all over the world
                </span>
              </div>
            </div>

            {/* Certification Logos */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={i} style={{
                  width: '70px', height: '50px', background: 'var(--color-light-bg)',
                  borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '9px', color: '#999', fontWeight: 600, border: '1px solid var(--color-border)',
                }}>
                  CERT {i + 1}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/photo-1494412574643-ff11b0a5eb19.jpg"
              alt="TSR Operations"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
            />
          </motion.div>
        </div>
      </section>

      <StatsCounter />
      <TeamSection />
      <WhyChooseUs />
      <TestimonialSlider />
      <CtaBanner />
      <ProcessSteps />
    </>
  );
}
