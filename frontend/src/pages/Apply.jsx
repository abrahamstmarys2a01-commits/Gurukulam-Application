import { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import MultiStepForm from '../components/form/MultiStepForm';

export default function Apply() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Automatically transition to the form after the zoom animation completes
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2500); // 2.5 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  if (!showForm) {
    return (
      <div style={styles.splashContainer}>
        <img src="/logo.jpg" alt="Gurukulam Logo" style={styles.splashImage} className="animate-zoom-in" />
      </div>
    );
  }

  return (
    <div style={styles.page} className="google-form-theme animate-fade-in">
      <main style={styles.main}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '40px 0',
  },
  splashContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--background-light)',
  },
  splashImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  }
};
