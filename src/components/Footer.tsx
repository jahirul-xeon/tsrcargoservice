import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {/* Column 1 - Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '22px', fontWeight: 800, color: 'white' }}>
                TSR Cargo
              </span>
              <img src="/images/image%20logo%20tsr%20small.png" alt="TSR Cargo" style={{ height: '36px', width: 'auto' }} />
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              Your trusted logistics partner providing comprehensive freight forwarding and cargo solutions worldwide.
            </p>
            <div>
              <p style={{ color: 'white', fontWeight: 600, marginBottom: '12px', fontFamily: "'Barlow', sans-serif" }}>
                Track Your Freight
              </p>
              <div style={{ display: 'flex', gap: '0' }}>
                <input
                  type="email"
                  placeholder="Enter email"
                  style={{
                    flex: 1, padding: '12px 16px', background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)', color: 'white', fontSize: '14px',
                    borderRadius: '4px 0 0 4px', outline: 'none',
                  }}
                />
                <button style={{
                  background: '#f5821f', color: 'white', padding: '12px 20px', border: 'none',
                  fontWeight: 700, fontSize: '14px', cursor: 'pointer', borderRadius: '0 4px 4px 0',
                  fontFamily: "'Barlow', sans-serif",
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h5>Our Services</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/service/ocean-freight">Ocean Freight</Link></li>
              <li><Link to="/service/air-freight">Air Freight</Link></li>
              <li><Link to="/service/warehousing">Warehousing</Link></li>
              <li><Link to="/service/door-to-door">Door To Door</Link></li>
              <li><Link to="/service/international-courier">International Courier</Link></li>
              <li><Link to="/service/customs-brokerage">Customs Brokerage</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h5>Company Info</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Our Expertise</Link></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Transporters</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Case Studies</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h5>Contact Info</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <FiMail style={{ color: '#f5821f', marginTop: '4px', flexShrink: 0 }} />
                <a href="mailto:tarek@tsrcargoservice.com">tarek@tsrcargoservice.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <FiPhone style={{ color: '#f5821f', marginTop: '4px', flexShrink: 0 }} />
                <a href="tel:+49015753244139">+49015753244139</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <FiMapPin style={{ color: '#f5821f', marginTop: '4px', flexShrink: 0 }} />
                <span>Tarek Aziz - Business Development Manager</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>© 2026 TSR Cargo Service All Rights Reserved | <a href="#">Privacy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Site map</a> | <Link to="/contact-us">Contact</Link></p>
        </div>
      </div>
    </footer>
  );
}
