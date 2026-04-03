import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { servicesGrid } from '../data/siteData';
import { FaTruck, FaPlane, FaWarehouse, FaShip, FaTruckMoving, FaTrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const iconMap: Record<string, React.ReactNode> = {
  FaTruck: <FaTruck />,
  FaPlane: <FaPlane />,
  FaWarehouse: <FaWarehouse />,
  FaShip: <FaShip />,
  FaTruckMoving: <FaTruckMoving />,
  FaTrain: <FaTrain />,
};

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <PageHero
        title="Services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
            {servicesGrid.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Link to={`/service/${s.slug}`} style={{ display: 'block' }}>
                  <div style={{
                    position: 'relative', overflow: 'hidden', borderRadius: '8px',
                    height: '320px', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <img
                      src={s.image} alt={s.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1.08)'; }}
                      onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = 'scale(1)'; }}
                    />
                    {/* Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(13,27,53,0.92) 0%, rgba(13,27,53,0.3) 60%, rgba(13,27,53,0.1) 100%)',
                    }} />
                    {/* Icon */}
                    <div style={{
                      position: 'absolute', top: '20px', left: '20px',
                      width: '50px', height: '50px', background: '#f5821f', borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: '22px', zIndex: 2,
                    }}>
                      {iconMap[s.icon]}
                    </div>
                    {/* Content */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', zIndex: 2 }}>
                      <h5 style={{ color: 'white', fontSize: '20px', fontWeight: 700, fontFamily: "'Barlow', sans-serif", marginBottom: '8px' }}>
                        {s.title}
                      </h5>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>
                        We believe in leveraging technology to serve intelligence and deliver excellence in logistics.
                      </p>
                      <span style={{ color: '#f5821f', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
