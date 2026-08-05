import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function Step3Health({ nextStep, prevStep }) {
  const [hasMedicalCondition, setHasMedicalCondition] = useState('no');
  const [takingMeds, setTakingMeds] = useState('no');
  const [specialFood, setSpecialFood] = useState('no');
  const [wellbeingInfo, setWellbeingInfo] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.header}>
        <h2 style={styles.title}>Health &<br/>Safety</h2>
      </div>

      <div style={styles.form}>
        {/* Q14 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Do you have any medical condition, allergy, disability or physical limitation?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="medicalCondition" value="no" checked={hasMedicalCondition === 'no'} onChange={() => setHasMedicalCondition('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="medicalCondition" value="yes" checked={hasMedicalCondition === 'yes'} onChange={() => setHasMedicalCondition('yes')} /> Yes
            </label>
          </div>
          {hasMedicalCondition === 'yes' && (
            <input type="text" placeholder="Please provide details" style={{ ...styles.input, marginTop: '8px' }} required />
          )}
        </div>

        {/* Q15 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Are you currently taking regular medicines or receiving ongoing treatment?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="medicines" value="no" checked={takingMeds === 'no'} onChange={() => setTakingMeds('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="medicines" value="yes" checked={takingMeds === 'yes'} onChange={() => setTakingMeds('yes')} /> Yes
            </label>
          </div>
          {takingMeds === 'yes' && (
            <input type="text" placeholder="Please provide details" style={{ ...styles.input, marginTop: '8px' }} required />
          )}
        </div>

        {/* Q16 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Do you have any special food / dietary requirements?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="diet" value="no" checked={specialFood === 'no'} onChange={() => setSpecialFood('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="diet" value="yes" checked={specialFood === 'yes'} onChange={() => setSpecialFood('yes')} /> Yes
            </label>
          </div>
          {specialFood === 'yes' && (
            <input type="text" placeholder="Please provide details" style={{ ...styles.input, marginTop: '8px' }} required />
          )}
        </div>

        {/* Q17 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Is there anything about your physical or mental well-being that the Gurukulam should know for your safety?</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="wellbeing" value="no" checked={wellbeingInfo === 'no'} onChange={() => setWellbeingInfo('no')} /> No
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="wellbeing" value="yes" checked={wellbeingInfo === 'yes'} onChange={() => setWellbeingInfo('yes')} /> Yes
            </label>
          </div>
          {wellbeingInfo === 'yes' && (
            <input type="text" placeholder="Please provide details" style={{ ...styles.input, marginTop: '8px' }} required />
          )}
        </div>

        {/* Q18 */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>Blood Group (if known)</label>
          <select style={styles.input}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
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
