import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ---- INTENTIONAL WCAG VIOLATIONS ON THIS PAGE ----
// 1. Every <label htmlFor="x"> mismatches its <input id="y"> — inputs unassociated (WCAG 1.3.1)
// 2. Checkbox label for= doesn't match checkbox id= (WCAG 1.3.1)
// 3. Required fields marked only by a red star color — color alone conveys meaning (WCAG 1.4.1)
// 4. Error state shown only with red border color — no aria-invalid, no aria-describedby
// 5. Error message not in an aria-live region — screen readers won't announce it
// 6. Form has no aria-label or accessible name
// 7. Social icon buttons have no aria-label
// 8. h3 used for form heading after h1 — skips h2
// 9. placeholder text color #3a3a50 — extremely low contrast
// 10. No focus management after validation failure
// 11. All interactive elements: no focus ring (global outline:none)

export default function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError(true);
      // ISSUE: Focus not moved to error field after failure
      // ISSUE: No aria-live region announces this error to screen readers
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '8rem 4rem', textAlign: 'center' }}>
          <h1>Message Sent!</h1>
          <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>
            We'll be in touch within one business day.
          </p>
          <button
            className="btn-primary"
            style={{ marginTop: '2rem' }}
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main>
        <div className="contact-wrap">

          {/* LEFT — INFO PANEL */}
          <div className="contact-info">

            <h1>
              Let's Build<br />
              <span style={{ color: 'var(--accent)' }}>Something Great</span>
            </h1>

            {/* ISSUE: color #484858 on #0e0e12 = ~2:1 contrast ratio */}
            <p className="intro-text">
              Tell us about your project. We'll respond within one business day
              with a tailored proposal.
            </p>

            <div className="contact-detail">
              <div className="detail-row">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <strong>Office</strong>
                  <span>42 Harbour Street, San Francisco, CA</span>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-icon">✉️</div>
                <div className="detail-content">
                  <strong>Email</strong>
                  {/* ISSUE: plain text, not a clickable mailto: link */}
                  <span>hello@techco.io</span>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <strong>Phone</strong>
                  {/* ISSUE: plain text, not a tel: link */}
                  <span>+1 (415) 000-0000</span>
                </div>
              </div>
            </div>

            <div className="social-row">
              {/* ISSUE: No aria-label on any button — completely inaccessible to screen readers */}
              <button className="social-btn">in</button>
              <button className="social-btn">tw</button>
              <button className="social-btn">dr</button>
              <button className="social-btn">gh</button>
            </div>

          </div>

          {/* RIGHT — FORM PANEL */}
          <div className="contact-form-wrap">

            {/* ISSUE: h3 skips h2 — broken heading hierarchy */}
            <h3 className="form-title">Send a Message</h3>

            {/* ISSUE: form has no aria-label */}
            <form onSubmit={handleSubmit} noValidate>

              <div className="form-row">
                <div className="form-group">
                  {/* ISSUE: htmlFor="fname" but input id="first-name" — MISMATCHED, not linked */}
                  <label className="form-label" htmlFor="fname">
                    First Name <span className="required-star">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="first-name"
                    name="first_name"
                    placeholder="Jane"
                  />
                </div>

                <div className="form-group">
                  {/* ISSUE: htmlFor="lname" but input id="last-name" — MISMATCHED */}
                  <label className="form-label" htmlFor="lname">
                    Last Name <span className="required-star">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="last-name"
                    name="last_name"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="form-group">
                {/* ISSUE: htmlFor="email-field" but input id="user-email" — MISMATCHED */}
                <label className="form-label" htmlFor="email-field">
                  Email Address <span className="required-star">*</span>
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="user-email"
                  name="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                  // ISSUE: error only shown via red border color — no aria-invalid, no aria-describedby
                  style={emailError ? { borderColor: '#ff4444' } : {}}
                />
                {/* ISSUE: not in aria-live region — screen readers won't read this */}
                {emailError && (
                  <p className="field-error">This field is required</p>
                )}
              </div>

              <div className="form-group">
                {/* ISSUE: htmlFor="company" but input id="org" — MISMATCHED */}
                <label className="form-label" htmlFor="company">Company</label>
                <input
                  className="form-input"
                  type="text"
                  id="org"
                  name="company"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="form-group">
                {/* ISSUE: htmlFor="budget" but select id="budget-select" — MISMATCHED */}
                <label className="form-label" htmlFor="budget">Project Budget</label>
                <select className="form-input" id="budget-select" name="budget">
                  <option value="">Select a range...</option>
                  <option value="10k">$10k – $25k</option>
                  <option value="25k">$25k – $50k</option>
                  <option value="50k">$50k – $100k</option>
                  <option value="100k">$100k+</option>
                </select>
              </div>

              <div className="form-group">
                {/* ISSUE: htmlFor="msg" but textarea id="message-box" — MISMATCHED */}
                <label className="form-label" htmlFor="msg">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  className="form-input"
                  id="message-box"
                  name="message"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* ISSUE: checkbox id="consent-check" but label htmlFor="agree" — MISMATCHED */}
              <div className="checkbox-group">
                <input type="checkbox" id="consent-check" name="consent" />
                <label className="checkbox-label" htmlFor="agree">
                  I agree to the{' '}
                  <a href="#" style={{ color: 'var(--accent)' }}>Privacy Policy</a>
                  {' '}and consent to being contacted about my inquiry.
                </label>
              </div>

              {/* ISSUE: No focus ring on submit button */}
              <button type="submit" className="form-submit">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
