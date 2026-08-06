import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.topSection}>
          <h2 style={styles.title}>Sisu Bala · Garbha Viruthi</h2>
          <p style={styles.subtitle}>Easanamma Gurukulam · Rooted in Siddhar Lineage · Guided by Grace</p>
        </div>
        
        <div style={styles.links}>
          <a href="#" style={styles.link}>The Need</a>
          <a href="#" style={styles.link}>The Path</a>
          <a href="#" style={styles.link}>The Stages</a>
          <a href="#" style={styles.link}>90-Day Program</a>
          <a href="#" style={styles.link}>For Couples</a>
          <a href="#" style={styles.link}>FAQ</a>
        </div>
        
        <div style={styles.bottomSection}>
          <p style={styles.motto}>Rooted in Siddhar lineage · Guided by Grace · Held in devotion</p>
          <p style={styles.copyright}>
            © 2026 Easanamma Gurukulam · Sisu Bala Garbha Viruthi · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0a0a0a',
    padding: '60px 0 40px',
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'var(--font-serif)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    letterSpacing: '0.5px',
  },
  subtitle: {
    fontSize: '15px',
    margin: 0,
    color: '#eaeaea',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
    margin: '10px 0',
  },
  link: {
    fontSize: '14px',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '10px',
  },
  motto: {
    fontSize: '14px',
    color: '#999999',
    margin: 0,
  },
  copyright: {
    fontSize: '13px',
    color: '#777777',
    margin: 0,
  },
};
