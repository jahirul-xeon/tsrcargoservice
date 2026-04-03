import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
}

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <div
      className="page-hero"
      style={{
        backgroundImage: `url('/images/photo-1494412574643-ff11b0a5eb19.jpg')`,
      }}
    >
      <div className="page-hero__content">
        <h1>{title}</h1>
        <div className="page-hero__breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.5)' }}>›</span>}
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span style={{ color: 'white' }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
