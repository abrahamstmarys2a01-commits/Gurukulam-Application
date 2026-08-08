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
          <h2 style={styles.bannerTitle}>அவசரகால தொடர்பு மற்றும் குடும்ப பொறுப்புகள்</h2>
          <p style={styles.bannerSubtitle}>Section 2 — Emergency Contacts &amp; Family Responsibilities</p>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">அவசரகால தொடர்பு பெயர்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Emergency Contact Name: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="text" style={styles.input} placeholder="Enter emergency contact name" required />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">உறவுமுறை: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Relationship: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="text" style={styles.input} placeholder="Enter relationship (e.g., Father, Spouse)" required />
        </div>
        
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">தொலைபேசி எண்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Phone Number: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="tel" style={styles.input} placeholder="Enter phone number" required />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">பெற்றோர் / துணைவர் / குடும்ப தொடர்பு: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Parent / Spouse / Family Contact: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="text" style={styles.input} placeholder="Enter parent/spouse contact details" required />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">உங்களுக்கு குழந்தைகள், சார்ந்திருப்பவர்கள் அல்லது முக்கியமான குடும்ப பொறுப்புகள் உள்ளனவா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Do you have children, dependents or important family responsibilities? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="dependents" value="yes" checked={hasDependents === 'yes'} onChange={() => setHasDependents('yes')} /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="dependents" value="no" checked={hasDependents === 'no'} onChange={() => setHasDependents('no')} /> இல்லை / No
            </label>
          </div>
          {hasDependents === 'yes' && (
            <input type="text" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details about dependents" required />
          )}
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">நீங்கள் குருகுலத்தில் சேரும் முடிவு உங்கள் குடும்பத்தினருக்கு தெரியுமா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Is your family aware of your decision to join the Gurukulam? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="familyAware" value="yes" required /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="familyAware" value="no" required /> இல்லை / No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="familyAware" value="na" required /> பொருந்தாது / Not Applicable
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
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
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
