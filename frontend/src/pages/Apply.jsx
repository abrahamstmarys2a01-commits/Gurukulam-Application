import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import MultiStepForm from '../components/form/MultiStepForm';

export default function Apply() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div className="container" style={styles.container}>
          <Link to="/" style={styles.logoGroup}>
            <Home size={24} color="var(--primary-dark)" />
            <span style={styles.logoText} className="responsive-logo-text">
              SHREE DATTA EASANAMMA GURUKULAM
            </span>
          </Link>
        </div>
      </header>
      
      <main style={styles.main}>
        <div className="container">
          <MultiStepForm />
        </div>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--background-light)',
  },
  header: {
    padding: '20px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
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
    color: 'var(--primary-dark)',
    lineHeight: '1.2',
    whiteSpace: 'nowrap',
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
  }
};
