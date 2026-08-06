import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Step2Emergency({ nextStep, prevStep }) {
  const [hasDependents, setHasDependents] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <Phone size={24} color="#1976d2" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>Emergency &amp; Family</h2>
          <p style={styles.bannerSubtitle}>Section 2 — Emergency Contacts &amp; Family Responsibilities</p>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Emergency Contact Name <span style={{color: 'red'}}>*</span></label>
          <input type="text" style={styles.input} placeholder="Enter emergency contact name" required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Relationship <span style={{color: 'red'}}>*</span></label>
          <input type="text" style={styles.input} placeholder="Enter relationship (e.g., Father, Spouse)" required />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number <span style={{color: 'red'}}>*</span></label>
          <input type="tel" style={styles.input} placeholder="Enter phone number" required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Parent / Spouse / Family Contact <span style={{color: 'red'}}>*</span></label>
          <input type="text" style={styles.input} placeholder="Enter parent/spouse contact details" required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Do you have children, dependents or important family responsibilities? <span style={{color: 'red'}}>*</span></label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="dependents" value="no" checked={hasDependents === 'no'} onChange={() => setHasDependents('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="dependents" value="yes" checked={hasDependents === 'yes'} onChange={() => setHasDependents('yes')} /> Yes
            </label>
          </div>
          {hasDependents === 'yes' && (
            <input type="text" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details about dependents" required />
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Is your family aware of your decision to join the Gurukulam? <span style={{color: 'red'}}>*</span></label>
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
    fontWeight: '600',
    color: 'var(--primary-dark)',
  },
  input: {
    padding: '20px 24px',
    height: '60px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'white',
    fontSize: '16px',
    fontFamily: 'inherit',
    color: 'var(--text-main)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s ease',
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
