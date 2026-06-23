import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="floating-nav" aria-label="Main navigation">
      <div className="nav-pill">
        <Link to="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>
          Our Story
        </Link>
        <Link to="/vibes" className={`nav-link${pathname === '/vibes' ? ' active' : ''}`}>
          Our Vibes
        </Link>
      </div>
    </nav>
  );
}
