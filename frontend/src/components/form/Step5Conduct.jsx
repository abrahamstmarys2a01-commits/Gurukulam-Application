import { ArrowRight, ArrowLeft, Shield } from 'lucide-react';

export default function Step5Conduct({ nextStep, prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <Shield size={24} color="#1976d2" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>Safety, Conduct &amp; Responsibility</h2>
          <p style={styles.bannerSubtitle}>Section 5 — Rules &amp; Guidelines</p>
        </div>
      </div>

      <div style={styles.form}>
        {/* Q23 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            I agree not to engage in violence, threats, harassment, abuse, theft or unlawful activities within the Gurukulam. <span style={{color: 'red'}}>*</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            I Agree
          </label>
        </div>

        {/* Q24 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            I agree to follow the Gurukulam’s safety, accommodation, spiritual and conduct rules. <span style={{color: 'red'}}>*</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            I Agree
          </label>
        </div>

        {/* Q25 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            I understand that Gurukulam life involves ordinary residential, travel, physical, environmental and other risks, and I will take reasonable care of my own safety and follow safety instructions. <span style={{color: 'red'}}>*</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            I Understand & Agree
          </label>

        </div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1976d2',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    gap: '20px',
    color: 'white',
  },
  bannerIconBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '12px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  bannerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    color: 'white',
  },
  bannerSubtitle: {
    fontSize: '14px',
    margin: '4px 0 0 0',
    opacity: 0.9,
    fontStyle: 'italic',
  },
  title: {
    fontSize: '28px',
    color: 'var(--primary-dark)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  label: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'var(--primary-dark)',
    lineHeight: '1.5',
  },
  checkboxLabel: {
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    color: 'var(--primary-color)',
    fontWeight: '600',
    padding: '12px',
    backgroundColor: 'var(--background-light)',
    borderRadius: '8px',
    border: '1px solid #ccc',
    transition: 'border-color 0.3s ease',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    accentColor: 'var(--primary-color)',
    cursor: 'pointer',
  },
  line: {
    height: '2px',
    backgroundColor: 'var(--primary-color)',
    marginTop: '20px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  }
};
