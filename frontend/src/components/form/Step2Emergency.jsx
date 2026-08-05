import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function Step2Emergency({ nextStep, prevStep }) {
  const [hasDependents, setHasDependents] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.header}>
        <h2 style={styles.title}>Emergency &<br/>Family</h2>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Emergency Contact Name</label>
          <input type="text" placeholder="Contact Name" style={styles.input} required />
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Relationship</label>
            <input type="text" placeholder="Relationship" style={styles.input} required />
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Phone Number</label>
            <input type="tel" placeholder="Phone Number" style={styles.input} required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Parent / Spouse / Family Contact</label>
          <input type="text" placeholder="Family Contact Details" style={styles.input} required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Do you have children, dependents or important family responsibilities?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="dependents" value="no" checked={hasDependents === 'no'} onChange={() => setHasDependents('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="dependents" value="yes" checked={hasDependents === 'yes'} onChange={() => setHasDependents('yes')} /> Yes
            </label>
          </div>
          {hasDependents === 'yes' && (
            <input type="text" placeholder="Please provide details" style={{ ...styles.input, marginTop: '8px' }} required />
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Is your family aware of your decision to join the Gurukulam?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="familyAware" value="yes" required /> Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="familyAware" value="no" required /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="familyAware" value="na" required /> Not Applicable
            </label>
          </div>
          <div style={styles.line}></div>
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
    gap: '20px',
  },
  row: {
    display: 'flex',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--primary-dark)',
  },
  input: {
    padding: '10px 0',
    border: 'none',
    borderBottom: '1px solid #999',
    backgroundColor: 'transparent',
    fontSize: '16px',
    fontFamily: 'inherit',
    color: 'var(--text-main)',
    outline: 'none',
    width: '100%',
  },
  radioGroup: {
    display: 'flex',
    gap: '16px',
    marginTop: '4px',
  },
  radioLabel: {
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    color: 'var(--text-main)',
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
