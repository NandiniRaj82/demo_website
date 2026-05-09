// ISSUE: All links go to "#" (empty href) and have no focus ring (global outline:none)
export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">© 2025 TechCo. All rights reserved.</div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
    </footer>
  );
}
