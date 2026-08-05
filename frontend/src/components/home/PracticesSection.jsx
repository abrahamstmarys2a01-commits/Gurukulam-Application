import { Flower2, Flame, HeartHandshake, Sunrise } from 'lucide-react';

export default function PracticesSection() {
  const practices = [
    {
      title: 'Dhyana (Meditation)',
      description: 'Cultivate inner peace and clarity through guided meditation sessions in a tranquil environment.',
      icon: <Flower2 size={24} color="var(--primary-color)" />
    },
    {
      title: 'Puja & Rituals',
      description: 'Daily ceremonies to honor the divine presence and cultivate devotion.',
      icon: <Flame size={24} color="var(--primary-color)" />
    },
    {
      title: 'Nithya Seva',
      description: 'Selfless service for the community, seeing the divine in all beings.',
      icon: <HeartHandshake size={24} color="var(--primary-color)" />
    },
    {
      title: 'Yoga & Pranayama',
      description: 'Physical postures and breath control to prepare the body and mind for deeper spiritual practices.',
      icon: <Sunrise size={24} color="var(--primary-color)" />
    }
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 style={styles.title}>Spiritual Practices</h2>
        <p style={styles.subtitle}>
          The pillars of our Gurukulam experience, designed to purify the mind, body, and soul.
        </p>

        <div style={styles.grid}>
          {practices.map((practice, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{practice.icon}</div>
              <h3 style={styles.cardTitle}>{practice.title}</h3>
              <p style={styles.cardDesc}>{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: 'var(--background-alt)',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '16px',
  },
  subtitle: {
    textAlign: 'center',
    color: 'var(--text-muted)',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  },
  icon: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '12px',
    color: 'var(--secondary-color)',
  },
  cardDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
  }
};
