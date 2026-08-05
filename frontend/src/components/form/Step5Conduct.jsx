import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Step5Conduct({ nextStep, prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="animate-fade-in">
      <div style={styles.header}>
        <h2 style={styles.title}>Safety, Conduct &amp; Responsibility</h2>
      </div>

      <div style={styles.form}>
        {/* Q23 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            I agree not to engage in violence, threats, harassment, abuse, theft or unlawful activities within the Gurukulam.
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            I Agree
          </label>
        </div>

        {/* Q24 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            I agree to follow the Gurukulam’s safety, accommodation, spiritual and conduct rules.
          </label>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            I Agree
          </label>
        </div>

        {/* Q25 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            I understand that Gurukulam life involves ordinary residential, travel, physical, environmental and other risks, and I will take reasonable care of my own safety and follow safety instructions.
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
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
    fontWeight: '500',
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
    border: '1px solid var(--border-color)',
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
