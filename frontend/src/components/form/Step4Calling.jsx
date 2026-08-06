import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Step4Calling({ nextStep, prevStep }) {
  const [livedInAshram, setLivedInAshram] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <BookOpen size={24} color="#1976d2" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>Spiritual Calling</h2>
          <p style={styles.bannerSubtitle}>Section 4 — Inner Calling &amp; Discipline</p>
        </div>
      </div>

      <div style={styles.form}>
        {/* Q19 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Why do you wish to become a Sadhu and live at the Gurukulam? <span style={{color: 'red'}}>*</span></label>
          <textarea 
 
            style={styles.textarea} 
            placeholder="Please describe your spiritual calling and reasons for joining..."
            required 
            rows={4}
          ></textarea>
        </div>

        {/* Q20 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Have you previously lived in an Ashram, Gurukulam or spiritual community? <span style={{color: 'red'}}>*</span></label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="livedInAshram" value="no" checked={livedInAshram === 'no'} onChange={() => setLivedInAshram('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="livedInAshram" value="yes" checked={livedInAshram === 'yes'} onChange={() => setLivedInAshram('yes')} /> Yes
            </label>
          </div>
          {livedInAshram === 'yes' && (
            <input type="text" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details of previous ashram experience" required />
          )}
        </div>

        {/* Q21 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Are you prepared to follow a simple life of discipline, silence, spiritual practice and seva? <span style={{color: 'red'}}>*</span></label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="discipline" value="yes" required /> Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="discipline" value="no" required /> No
            </label>
          </div>
        </div>

        {/* Q22 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Are you willing to respect the Guru, Gurukulam, residents, visitors and the spiritual environment? <span style={{color: 'red'}}>*</span></label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="respect" value="yes" required /> Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="respect" value="no" required /> No
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
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--primary-dark)',
    lineHeight: '1.4',
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
  textarea: {
    padding: '16px 20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'white',
    fontSize: '16px',
    fontFamily: 'inherit',
    color: 'var(--text-main)',
    outline: 'none',
    resize: 'vertical',
    marginTop: '4px',
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
