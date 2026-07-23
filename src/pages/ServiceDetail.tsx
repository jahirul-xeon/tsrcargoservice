import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { PageHero } from '../components/PageHero';
import { FiCheck, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Seo } from '../components/Seo';
import { serviceLd, breadcrumbLd } from '../lib/structuredData';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!service) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <Seo
          title="Service Not Found"
          description="The requested service does not exist. Browse all TSR Cargo Service logistics and freight services."
          path={`/service/${slug ?? ''}`}
          noindex
        />
        <h2>Service Not Found</h2>
        <p>The requested service does not exist.</p>
        <Link to="/services" className="btn-primary" style={{ marginTop: '20px', display: 'inline-flex' }}>
          View All Services
        </Link>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  const servicePath = `/service/${service.slug}`;

  return (
    <>
      <Seo
        title={`${service.name} Services | TSR Cargo Service`}
        description={service.shortDesc}
        path={servicePath}
        image={service.image}
        jsonLd={[
          serviceLd({
            name: service.name,
            description: service.shortDesc,
            path: servicePath,
            image: service.image,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.name, path: servicePath },
          ]),
        ]}
      />
      <PageHero
        title={service.name}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.name },
        ]}
      />

      <section className="section-padding" style={{ background: '#fff' }} ref={ref}>
        <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '50px' }}>
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
              src={service.image}
              alt={service.name}
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '30px' }}
            />

            <h2 style={{ marginBottom: '20px' }}>{service.name}</h2>

            {service.description.map((p, i) => (
              <p key={i} style={{ marginBottom: '16px', lineHeight: 1.75 }}>{p}</p>
            ))}

            {/* Benefits */}
            <div style={{ margin: '30px 0', padding: '30px', background: 'var(--color-light-bg)', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '20px', fontSize: '22px' }}>Key Benefits</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {service.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                    <span style={{
                      width: '22px', height: '22px', background: '#f5821f', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                      fontSize: '10px', flexShrink: 0,
                    }}>
                      <FiCheck />
                    </span>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary image */}
            <img
              src={`/images/photo-1578575437130-527eed3abbec.jpg`}
              alt={`${service.name} operations`}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '30px' }}
            />

            {/* Why Choose Us Mini */}
            <div style={{ padding: '30px', background: 'var(--color-dark)', borderRadius: '8px', color: 'white' }}>
              <h3 style={{ color: 'white', marginBottom: '16px' }}>Why Choose TSR for {service.name}?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                With decades of experience and a dedicated team of logistics professionals, TSR Cargo Service delivers reliable, efficient, and cost-effective {service.name.toLowerCase()} solutions tailored to your business needs.
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ position: 'sticky', top: '100px', alignSelf: 'start' }}
          >
            {/* All Services Widget */}
            <div style={{
              background: 'var(--color-light-bg)', borderRadius: '8px', padding: '24px', marginBottom: '24px',
            }}>
              <h5 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 700, fontFamily: "'Barlow', sans-serif" }}>
                All Services
              </h5>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/service/${s.slug}`}
                  style={{
                    display: 'block', padding: '12px 16px', marginBottom: '4px', borderRadius: '4px',
                    fontSize: '14px', fontWeight: 600,
                    background: s.slug === slug ? '#f5821f' : 'white',
                    color: s.slug === slug ? 'white' : 'var(--color-text-dark)',
                    transition: 'all 0.2s',
                    border: `1px solid ${s.slug === slug ? '#f5821f' : 'var(--color-border)'}`,
                  }}
                >
                  {s.name}
                </Link>
              ))}
            </div>

            {/* Contact Widget */}
            <div style={{
              background: 'var(--color-light-bg)', borderRadius: '8px', padding: '24px', marginBottom: '24px',
            }}>
              <h5 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 700, fontFamily: "'Barlow', sans-serif" }}>
                Contact Info
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiPhone style={{ color: '#f5821f', flexShrink: 0 }} />
                  <span>+49015753244139</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiMail style={{ color: '#f5821f', flexShrink: 0 }} />
                  <span>tarek@tsrcargoservice.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <FiMapPin style={{ color: '#f5821f', flexShrink: 0, marginTop: '3px' }} />
                  <span>Tarek Aziz - Business Development Manager</span>
                </div>
              </div>
            </div>

            {/* Quote CTA */}
            <div style={{
              background: '#f5821f', borderRadius: '8px', padding: '30px', textAlign: 'center',
            }}>
              <h5 style={{ color: 'white', marginBottom: '12px', fontSize: '20px' }}>Request A Quote</h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.6 }}>
                Get a customized quote for your logistics needs. Our team will respond within 24 hours.
              </p>
              <Link
                to="/contact-us"
                style={{
                  display: 'inline-block', background: 'white', color: '#f5821f',
                  padding: '12px 30px', borderRadius: '4px', fontWeight: 700,
                  fontFamily: "'Barlow', sans-serif", transition: 'all 0.3s',
                }}
              >
                Get a Quote
              </Link>
            </div>
          </motion.aside>
        </div>

        {/* Related Services */}
        <div className="container-custom" style={{ marginTop: '80px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Related Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {relatedServices.map((s) => (
              <Link key={s.slug} to={`/service/${s.slug}`} className="service-card" style={{ display: 'block' }}>
                <img src={s.image} alt={s.name} className="service-card__img" />
                <div className="service-card__body">
                  <div className="service-card__icon" style={{ width: '44px', height: '44px', fontSize: '18px' }}>
                    <FiCheck />
                  </div>
                  <h3 className="service-card__title" style={{ fontSize: '18px' }}>{s.name}</h3>
                  <span className="service-card__link">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
