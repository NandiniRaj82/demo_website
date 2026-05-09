import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ---- INTENTIONAL WCAG VIOLATIONS ON THIS PAGE ----
// 1. Heading order: h1 → h4 → h2 (completely broken hierarchy)
// 2. All team <img> tags missing alt attribute
// 3. Social icon buttons have no aria-label ("in", "tw", "gh" are meaningless to screen readers)
// 4. Auto-scrolling ticker has no pause/stop control (WCAG 2.2.2)
// 5. team-role text color #484858 — ~2:1 contrast ratio
// 6. page-hero paragraph color #484858 — ~2:1 contrast ratio

const team = [
  { name: 'Sarah Chen',  role: 'CEO & Co-Founder',    img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Marcus Reid', role: 'CTO',                  img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Nair',  role: 'Lead Designer',        img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'James Okafor',role: 'Head of Engineering',  img: 'https://randomuser.me/api/portraits/men/71.jpg' },
];

const values = [
  { num: '01', title: 'Quality Without Compromise', desc: 'Every pixel, every line of code, every interaction is crafted with care and intention.' },
  { num: '02', title: 'Radical Transparency',       desc: 'We communicate openly, share progress honestly, and never hide behind jargon.' },
  { num: '03', title: 'Ship Fast, Iterate Faster',  desc: 'Speed matters. We move quickly, learn continuously, and never stop improving.' },
  { num: '04', title: 'People Over Process',         desc: 'Great teams build great products. We invest in people first, process second.' },
];

const tickerItems = ['Performance','•','Design Systems','•','Security','•','Engineering','•','Innovation','•'];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* ISSUE: Ticker scrolls indefinitely with no pause button — WCAG 2.2.2 violation */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <main>

        <section className="page-hero">
          {/* h1 is fine on this page */}
          <h1>
            We Build the Web<br />
            <span style={{ color: 'var(--accent)' }}>Others Dream Of</span>
          </h1>
          {/* ISSUE: color #484858 on #0e0e12 = ~2:1 contrast ratio */}
          <p>
            TechCo is a product engineering studio working with teams who are serious
            about quality, speed, and long-term impact.
          </p>
        </section>

        <section className="team-section">
          {/* ISSUE: h4 used directly after h1 — skips h2 and h3 entirely (WCAG 1.3.1) */}
          <h4 className="section-title">Meet the Team</h4>
          <p className="section-sub">The people behind the work.</p>

          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>

                {/* ISSUE: img has no alt attribute (WCAG 1.1.1) */}
                <img src={member.img} />

                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  {/* ISSUE: color #484858 — ~2:1 contrast ratio */}
                  <div className="team-role">{member.role}</div>
                </div>

                <div className="team-social">
                  {/* ISSUE: No aria-label — screen reader reads "in", "tw", "gh" literally */}
                  <button>in</button>
                  <button>tw</button>
                  <button>gh</button>
                </div>

              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="values-inner">
            {/* ISSUE: h2 after h4 — totally broken heading structure on this page */}
            <h2 className="val-title">Our Values</h2>
            <div className="values-list">
              {values.map((v) => (
                <div className="value-item" key={v.num}>
                  <div className="value-num">{v.num}</div>
                  <div className="value-text">
                    <h5>{v.title}</h5>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
