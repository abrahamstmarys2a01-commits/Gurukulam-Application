import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.logoGroup}>
          <div style={styles.iconBox}>
            <Home size={20} color="var(--background-light)" />
          </div>
          <span style={styles.logoText}>
            SHREE DATTA EASANAMMA GURUKULAM
          </span>
        </div>
        
        <div style={styles.links}>
          <a href="#">Sacred Teachings</a>
          <a href="#">Daily Sadhana</a>
          <a href="#">eSeva Donation</a>
          <a href="#">Contact Us</a>
        </div>
        
        <div style={styles.contactInfo}>
          <p style={styles.contactText}>SHREE DATTA EASANAMMA GURUKULAM</p>
          <p style={styles.contactText}>Nanthavanapatti, Thanjavur, Tamil Nadu, India</p>
          <p style={styles.contactText}>📞 9600014331 | 🌐 easanamma.com</p>
        </div>
        
        <p style={styles.copyright}>
          © 2024 Shree Datta Easanamma Gurukulam.<br/>All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#e6ded3',
    padding: '40px 0',
    textAlign: 'center',
    borderTop: '1px solid var(--border-color)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'left',
  },
  iconBox: {
    backgroundColor: 'var(--secondary-color)',
    padding: '8px',
    borderRadius: '4px',
    display: 'flex',
  },
  logoText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    lineHeight: '1.2',
    whiteSpace: 'nowrap',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    fontSize: '14px',
    color: 'var(--text-muted)',
  },
  copyright: {
    fontSize: '12px',
    color: 'var(--primary-color)',
    opacity: 0.8,
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    textAlign: 'center',
    margin: '10px 0',
  },
  contactText: {
    fontSize: '14px',
    color: 'var(--secondary-color)',
    lineHeight: '1.4',
  }
};
