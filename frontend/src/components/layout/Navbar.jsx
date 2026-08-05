import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logoGroup}>
          <Home size={24} color="var(--primary-color)" />
          <span style={styles.logoText}>
            SHREE DATTA EASANAMMA GURUKULAM
          </span>
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: '40px 0 20px 0',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: '20px',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'left',
  },
  logoText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    lineHeight: '1.2',
    letterSpacing: '1px',
    whiteSpace: 'nowrap',
  }
};
