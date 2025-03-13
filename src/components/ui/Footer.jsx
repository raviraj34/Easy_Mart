export const Footer = () => {
    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    return (
        <footer className="footer">
          <div className="footer-content">
            <nav className="footer-nav">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="footer-time">
              Current Local Time: {currentTime}
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 EasyMart. All rights reserved.</p>
          </div>
        </footer>
      );
};