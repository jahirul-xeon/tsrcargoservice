import { Link } from 'react-router-dom';
import { servicePreview } from '../../data/siteData';
import { FaTruck, FaPlane, FaWarehouse } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const iconMap: Record<string, React.ReactNode> = {
  FaTruck: <FaTruck />,
  FaPlane: <FaPlane />,
  FaWarehouse: <FaWarehouse />,
};

export function ServicesPreview() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
      <div className="container-custom" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          OUR SERVICES
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Comprehensive Logistics Services
        </motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: '0 auto' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Air, ocean and road freight supported by warehousing and customs expertise to move your cargo smoothly from pickup to delivery.
        </motion.p>
      </div>

      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {servicePreview.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
            >
              <Link to={`/service/${s.slug}`} className="service-card" style={{ display: 'block' }}>
                <img src={s.image} alt={s.title} className="service-card__img" />
                <div className="service-card__body">
                  <div className="service-card__icon">{iconMap[s.icon]}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <span className="service-card__link">Read More →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
