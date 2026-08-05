import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function Step4Calling({ nextStep, prevStep }) {
  const [livedInAshram, setLivedInAshram] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.header}>
        <h2 style={styles.title}>Spiritual Calling</h2>
      </div>

      <div style={styles.form}>
        {/* Q19 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Why do you wish to become a Sadhu and live at the Gurukulam?</label>
          <textarea 
 
            style={styles.textarea} 
            required 
            rows={4}
          ></textarea>
        </div>

        {/* Q20 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Have you previously lived in an Ashram, Gurukulam or spiritual community?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="livedInAshram" value="no" checked={livedInAshram === 'no'} onChange={() => setLivedInAshram('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="livedInAshram" value="yes" checked={livedInAshram === 'yes'} onChange={() => setLivedInAshram('yes')} /> Yes
            </label>
          </div>
          {livedInAshram === 'yes' && (
            <input type="text" style={{ ...styles.input, marginTop: '8px' }} required />
          )}
        </div>

        {/* Q21 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Are you prepared to follow a simple life of discipline, silence, spiritual practice and seva?</label>
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
          <label style={styles.label}>Are you willing to respect the Guru, Gurukulam, residents, visitors and the spiritual environment?</label>
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
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--primary-dark)',
    lineHeight: '1.4',
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
  textarea: {
    padding: '12px',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    backgroundColor: 'var(--background-light)',
    fontSize: '15px',
    fontFamily: 'inherit',
    color: 'var(--text-main)',
    outline: 'none',
    resize: 'vertical',
    marginTop: '4px',
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
