import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { FiMail, FiPhone, FiMapPin, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast from 'react-hot-toast';

const contactCards = [
  {
    icon: <FiMail />,
    title: 'Send Us Mail',
    lines: ['tarek@tsrcargoservice.com'],
  },
  {
    icon: <FiPhone />,
    title: 'Call or WhatsApp',
    lines: ['+49015753244139'],
  },
  {
    icon: <FiMapPin />,
    title: 'Contact Person',
    lines: ['Tarek Aziz - Business Development Manager'],
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1, triggerOnce: true });

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', border: '1px solid var(--color-border)',
    borderRadius: '4px', fontSize: '15px', outline: 'none', fontFamily: "'Jost', sans-serif",
    transition: 'border-color 0.3s',
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      // NOTE: Replace the string below with your FREE access key from https://web3forms.com/
      formData.append("access_key", "d299d0ad-fd3b-4150-b58f-b8928050660a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Your message has been sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error('Failed to send message: ' + data.message);
      }
    } catch (err) {
      toast.error('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* Contact Cards */}
      <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '80px' }}>
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                style={{
                  background: 'white', borderRadius: '8px', padding: '36px 30px',
                  textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
              >
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
                  color: 'white', fontSize: '24px',
                }}>
                  {card.icon}
                </div>
                <h5 style={{ fontSize: '20px', fontWeight: 700, fontFamily: "'Barlow', sans-serif", marginBottom: '12px' }}>
                  {card.title}
                </h5>
                {card.lines.map((line, j) => (
                  <p key={j} style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.6 }}>{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Form + Map */}
          <div ref={ref2} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">DROP US A LINE</span>
              <h2 className="section-title">Write Us What You Want to Know</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                <input name="name" required placeholder="Your Name" style={inputStyle} />
                <input name="email" required type="email" placeholder="Email Address" style={inputStyle} />
                <input name="phone" required type="tel" placeholder="Phone Number" style={inputStyle} />
                <input name="subject" required placeholder="Subject" style={inputStyle} />
                <textarea name="message" required placeholder="Your Message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
                <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FiLoader className="animate-spin" /> Sending...</span> : 'Submit Configuration'}
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ borderRadius: '8px', overflow: 'hidden', height: '100%', minHeight: '500px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0!2d90.4154595!3d23.7880666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzE3LjAiTiA5MMKwMjQnNTUuNyJF!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TSR Cargo Office Location"
              />
            </motion.div>
          </div>

          {/* Secondary Contact Removed */}
        </div>
      </section>
    </>
  );
}
