import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast from 'react-hot-toast';
import { FiLoader } from 'react-icons/fi';

export function QuoteForm() {
  const [distance, setDistance] = useState(100);
  const [freight, setFreight] = useState('Incoterms');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px', color: 'white',
    fontSize: '15px', outline: 'none', fontFamily: "'Jost', sans-serif",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      // NOTE: Replace the string below with your FREE access key from https://web3forms.com/
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
      // Appending extra structured data for the quote payload
      formData.append("distance_km", distance.toString());
      formData.append("freight_type", freight);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Your quote request has been sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error('Failed to send request: ' + data.message);
      }
    } catch (err) {
      toast.error('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} style={{ background: 'var(--color-dark)', padding: '100px 0' }}>
      <div className="container-custom">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: 'white' }}>Request Quote Form</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <input name="name" required placeholder="Your Name" style={inputStyle} />
            <input name="email" required type="email" placeholder="Email Address" style={inputStyle} />
            <input name="phone" required type="tel" placeholder="Phone Number" style={inputStyle} />
          </div>

          {/* Distance Slider */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '8px' }}>
              <span>Distance</span>
              <span style={{ color: '#f5821f', fontWeight: 700 }}>{distance} km</span>
            </div>
            <input
              type="range" min="1" max="500" value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f5821f' }}
            />
          </div>

          {/* Freight Type */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>Freight Type</p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['Incoterms', 'Express Delivery', 'Insurance', 'Packaging'].map((type) => (
                <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', fontSize: '14px' }}>
                  <input
                    type="radio" name="freight" value={type}
                    checked={freight === type}
                    onChange={() => setFreight(type)}
                    style={{ accentColor: '#f5821f' }}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Load */}
          <div style={{ marginBottom: '30px' }}>
            <select style={{ ...inputStyle, cursor: 'pointer', background: 'rgba(255,255,255,0.08)' }}>
              <option value="" style={{ background: '#0d1b35' }}>Select Load</option>
              {[0, 1, 2, 3].map((n) => (
                <option key={n} value={n} style={{ background: '#0d1b35' }}>{n}</option>
              ))}
            </select>
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '18px', opacity: isSubmitting ? 0.7 : 1 }}>
            {isSubmitting ? <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FiLoader className="animate-spin" /> Sending...</span> : 'Get A Quote'}
          </button>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '20px' }}>
            Or Give us a call <span style={{ color: '#f5821f', fontWeight: 700 }}>+49015753244139</span> | The Support Centre is available 24/7
          </p>
        </motion.form>
      </div>
    </section>
  );
}
