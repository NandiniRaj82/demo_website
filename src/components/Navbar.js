import { Link, useNavigate } from 'react-router-dom';

// ISSUE: No skip-to-main-content link anywhere
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/" className="logo">TechCo</Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* ISSUE: Button text is just "→" — no aria-label, screen reader reads arrow literally */}
      <button className="nav-cta" onClick={() => navigate('/contact')}>
        →
      </button>
    </nav>
  );
}
