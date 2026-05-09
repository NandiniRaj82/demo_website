import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ---- INTENTIONAL WCAG VIOLATIONS ON THIS PAGE ----
// 1. <html> missing lang attribute (in public/index.html)
// 2. Heading jumps h1 → h3 (skips h2) on "What We Do" section
// 3. hero-sub paragraph color #484858 on #0e0e12 bg = ~2:1 contrast ratio (needs 4.5:1)
// 4. stat-label color #4a4a5e on #16161c = ~2:1 contrast ratio
// 5. Both <img> tags have no alt attribute
// 6. All interactive elements have no focus indicator (global outline:none)
// 7. No skip navigation link

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <main id="main-content">

        {/* HERO SECTION */}
        <section className="hero">
          <span className="hero-tag">AI · Design · Quality</span>

          <h1>
            Build <span className="accent-word">Faster.</span><br />
            Ship <span className="accent-word">Better.</span>
          </h1>

          {/* ISSUE: color var(--dark-muted) = #484858 — contrast ~2:1, fails WCAG 1.4.3 */}
          <p className="hero-sub">
            We help engineering teams deliver world-class digital products with speed,
            precision, and confidence at every stage.
          </p>

          <div className="hero-actions">
            {/* ISSUE: No focus ring visible when tabbing to this button */}
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Start a Project
            </button>
            <a href="/about" className="btn-secondary">Learn more →</a>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="stat-item">
            <div className="stat-num">200+</div>
            {/* ISSUE: color #4a4a5e on #16161c bg = ~2:1 contrast, fails WCAG 1.4.3 */}
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">12x</div>
            <div className="stat-label">Avg. Speed Improvement</div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="services">
          {/* ISSUE: h3 used here — heading order jumps h1 → h3, skipping h2 (WCAG 1.3.1) */}
          <h3 className="section-title">What We Do</h3>
          <p className="section-sub">
            Full-spectrum digital product development for startups and enterprises.
          </p>

          <div className="cards">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h4>Performance Engineering</h4>
              <p>We optimize your product for speed, scalability, and reliability under real-world conditions.</p>
            </div>
            <div className="card">
              <div className="card-icon">🎨</div>
              <h4>Design Systems</h4>
              <p>Consistent, accessible, and beautiful component libraries that scale with your team.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔐</div>
              <h4>Security Audits</h4>
              <p>End-to-end security reviews and hardening for web applications and APIs.</p>
            </div>
          </div>
        </section>

        {/* IMAGES — ISSUE: No alt attribute on either img (WCAG 1.1.1) */}
        <div className="image-row">
          <img
            className="promo-img"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
          />
          <img
            className="promo-img"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
