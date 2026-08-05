import { useState } from 'react';
import { ArrowRight, Mountain } from 'lucide-react';
import sageImg from '../../assets/sage.png';

export default function WisdomSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.card}>
          <img src={sageImg} alt="Sage" style={styles.image} />
        </div>
        
        <h2 style={styles.title}>The Path of Wisdom</h2>
        <p style={styles.text}>
          Rooted in ancient traditions, our Gurukulam offers a sanctuary 
          away from the chaos of modern life. Here, seekers immerse themselves 
          in the sacred, yet deeply fulfilling way of living guided by 
          the timeless principles of Sanatana Dharma.
        </p>
        <p style={styles.text}>
          Through dedicated sadhana, scriptural study, and selfless service, 
          we aim to cultivate a transformative inner realm for a more 
          compassionate and spiritually awakened existence.
        </p>

        {isExpanded && (
          <div className="animate-fade-in">
            <p style={styles.text}>
              Our curriculum focuses on the deep integration of mind, body, and spirit. Students explore the wisdom of the Vedas, Upanishads, and Yoga Sutras, uncovering practical applications for these ancient texts in their daily lives. The serene environment acts as a catalyst for profound personal growth and self-discovery.
            </p>
            <p style={styles.text}>
              By living in harmony with nature and following a disciplined daily routine, inhabitants of the Gurukulam naturally develop resilience, clarity of thought, and an unwavering sense of peace that permeates all their actions.
            </p>
          </div>
        )}
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          style={{ ...styles.link, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          {isExpanded ? 'Read less' : 'Read full story'} 
          <ArrowRight 
            size={16} 
            style={{ 
              marginLeft: '8px', 
              transform: isExpanded ? 'rotate(-90deg)' : 'none',
              transition: 'transform 0.3s ease'
            }} 
          />
        </button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: 'var(--background-light)',
    position: 'relative',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  card: {
    maxWidth: '400px',
    margin: '0 auto 40px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    display: 'block',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  text: {
    marginBottom: '20px',
    color: 'var(--text-muted)',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'var(--primary-color)',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '14px',
  }
};
