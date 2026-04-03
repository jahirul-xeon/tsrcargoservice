import { FiMail, FiClock, FiMapPin } from 'react-icons/fi';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container-custom flex justify-between items-center flex-wrap gap-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <a href="mailto:tarek@tsrcargoservice.com" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiMail className="icon" style={{ color: '#f5821f', fontSize: '12px' }} />
          tarek@tsrcargoservice.com
        </a>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiClock className="icon" style={{ color: '#f5821f', fontSize: '12px' }} />
          9.30am – 06.30pm
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiMapPin className="icon" style={{ color: '#f5821f', fontSize: '12px' }} />
          <span className="hidden md:inline">Tarek Aziz - Business Development Manager</span>
          <span className="md:hidden" style={{ display: 'none' }}>Tarek Aziz</span>
        </span>
      </div>
    </div>
  );
}
