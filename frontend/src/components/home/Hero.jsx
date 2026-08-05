import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/hero-bg.png';
import { Leaf } from 'lucide-react';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>
      <div className="container animate-fade-in" style={styles.content}>
        <div style={styles.badge}>
          WELCOME TO THE SANCTUARY
        </div>
        <h1 className="hero-title" style={styles.title}>
          SHREE DATTA EASANAMMA<br/>GURUKULAM
        </h1>
        <p className="hero-subtitle" style={styles.subtitle}>
          Unearthing the timeless essence of Sanatana Dharma.
          Embark on a journey of inner peace and spiritual awakening.
        </p>
        <button 
          className="btn btn-primary" 
          style={styles.button}
          onClick={() => navigate('/apply')}
        >
          Apply Now <Leaf size={18} style={{ marginLeft: '8px' }}/>
        </button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px', // for navbar
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(253, 250, 246, 0.6)', // light overlay
  },
  content: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '600px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--primary-color)',
    letterSpacing: '1px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '16px',
    color: 'var(--secondary-color)',
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '16px',
    color: 'var(--secondary-color)',
    marginBottom: '32px',
    lineHeight: '1.8',
  },
  button: {
    padding: '14px 32px',
    fontSize: '16px',
    borderRadius: '40px',
  }
};
