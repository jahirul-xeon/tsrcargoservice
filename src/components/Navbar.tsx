import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiChevronDown, FiX } from 'react-icons/fi';
import { services } from '../data/services';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="navbar__logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <img src="/images/logo-small.png" alt="TSR Cargo" style={{ height: '140px', width: 'auto' }} />
          {/* <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '22px', fontWeight: 800, color: '#1a2d50' }}>
            TSR Cargo
          </span> */}
        </Link>

        <ul className="navbar__menu">
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/about-us') ? 'active' : ''}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={location.pathname.includes('/service') ? 'active' : ''}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services <FiChevronDown style={{ fontSize: '12px' }} />
            </a>
            <ul className="dropdown-menu">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/service/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={isActive('/contact-us') ? 'active' : ''}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <a href="tel:+49015753244139" className="navbar__phone">
          <FiPhone style={{ fontSize: '18px' }} />
          +49015753244139
        </a>

        <button className="navbar__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'visible' : ''}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMobileOpen(false)} aria-label="Close Menu">
          <FiX />
        </button>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <div>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
              padding: '14px 0', color: 'rgba(255,255,255,0.85)', fontSize: '16px', fontWeight: 600,
              fontFamily: "'Barlow', sans-serif", borderBottom: '1px solid rgba(255,255,255,0.08)',
              background: 'none', border: 'none', borderBottomWidth: '1px', borderBottomStyle: 'solid',
              borderBottomColor: 'rgba(255,255,255,0.08)', cursor: 'pointer',
            }}
          >
            Services
            <FiChevronDown style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
          </button>
          {servicesOpen && (
            <div style={{ paddingLeft: '16px' }}>
              {services.map((s) => (
                <Link key={s.slug} to={`/service/${s.slug}`} style={{ fontSize: '14px', padding: '10px 0' }}>
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/contact-us">Contact Us</Link>
        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <a href="tel:+49015753244139" style={{ color: '#f5821f', fontSize: '15px', fontWeight: 700 }}>
            <FiPhone style={{ marginRight: '8px' }} />
            +49015753244139
          </a>
        </div>
      </div>
    </>
  );
}
