import { blogPosts } from '../../data/siteData';
import { FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function BlogPreview() {
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
          <span className="section-label">LATEST NEWS</span>
          <h2 className="section-title">Read All Our Logistics Blogs</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Stay updated with the latest trends and insights in the logistics and freight forwarding industry.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              style={{
                background: 'white', borderRadius: '8px', overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)', transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
            >
              <div style={{ overflow: 'hidden', height: '200px' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)'; }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', fontSize: '13px', color: 'var(--color-text)' }}>
                  <span>{post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FaUser style={{ fontSize: '10px' }} />
                    {post.author}
                  </span>
                </div>
                <h4 style={{
                  fontSize: '18px', fontWeight: 700, color: 'var(--color-text-dark)',
                  fontFamily: "'Barlow', sans-serif", marginBottom: '10px', lineHeight: 1.3,
                }}>
                  {post.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.6, marginBottom: '12px' }}>
                  {post.excerpt}
                </p>
                <a href="#" style={{ color: '#f5821f', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Read Article →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
