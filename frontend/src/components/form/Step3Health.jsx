import { ArrowRight, ArrowLeft, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Step3Health({ nextStep, prevStep }) {
  const [hasMedicalCondition, setHasMedicalCondition] = useState('no');
  const [takingMeds, setTakingMeds] = useState('no');
  const [specialFood, setSpecialFood] = useState('no');
  const [wellbeingInfo, setWellbeingInfo] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <Heart size={24} color="var(--primary-color)" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>ஆரோக்கியம் மற்றும் பாதுகாப்பு</h2>
          <p style={styles.bannerSubtitle}>Section 3 — Medical Information &amp; Well-being</p>
        </div>
      </div>

      <div style={styles.form}>
        {/* Q14 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">உங்களுக்கு ஏதேனும் மருத்துவ நிலை, ஒவ்வாமை, இயலாமை அல்லது உடல் வரம்பு உள்ளதா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Do you have any medical condition, allergy, disability or physical limitation? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="medicalCondition" value="yes" checked={hasMedicalCondition === 'yes'} onChange={() => setHasMedicalCondition('yes')} /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="medicalCondition" value="no" checked={hasMedicalCondition === 'no'} onChange={() => setHasMedicalCondition('no')} /> இல்லை / No
            </label>
          </div>
          {hasMedicalCondition === 'yes' && (
            <input type="text" name="medicalConditionDetails" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details" required />
          )}
        </div>

        {/* Q15 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">நீங்கள் தற்போது வழக்கமான மருந்துகளை எடுத்துக்கொள்கிறீர்களா அல்லது தொடர்ந்து சிகிச்சை பெறுகிறீர்களா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Are you currently taking regular medicines or receiving ongoing treatment? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="takingMedicines" value="yes" checked={takingMeds === 'yes'} onChange={() => setTakingMeds('yes')} /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="takingMedicines" value="no" checked={takingMeds === 'no'} onChange={() => setTakingMeds('no')} /> இல்லை / No
            </label>
          </div>
          {takingMeds === 'yes' && (
            <input type="text" name="takingMedicinesDetails" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details about medicines" required />
          )}
        </div>

        {/* Q16 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">உங்களுக்கு ஏதேனும் சிறப்பு உணவு / உணவு கட்டுப்பாடுகள் தேவையா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Do you have any special food / dietary requirements? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="specialFood" value="yes" checked={specialFood === 'yes'} onChange={() => setSpecialFood('yes')} /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="specialFood" value="no" checked={specialFood === 'no'} onChange={() => setSpecialFood('no')} /> இல்லை / No
            </label>
          </div>
          {specialFood === 'yes' && (
            <input type="text" name="specialFoodDetails" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide dietary requirements" required />
          )}
        </div>

        {/* Q17 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">உங்கள் பாதுகாப்பிற்காக உங்கள் உடல் அல்லது மன நலம் பற்றி குருகுலம் தெரிந்து கொள்ள வேண்டியது ஏதேனும் உள்ளதா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Is there anything about your physical or mental well-being that the Gurukulam should know for your safety? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="mentalHealth" value="yes" checked={wellbeingInfo === 'yes'} onChange={() => setWellbeingInfo('yes')} /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="mentalHealth" value="no" checked={wellbeingInfo === 'no'} onChange={() => setWellbeingInfo('no')} /> இல்லை / No
            </label>
          </div>
          {wellbeingInfo === 'yes' && (
            <input type="text" name="mentalHealthDetails" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details about your well-being" required />
          )}
        </div>

        {/* Q18 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">இரத்த வகை (தெரிந்திருந்தால்)</div>
            <div className="label-english">Blood Group (if known)</div>
          </div>
          <select name="physicalFitness" style={styles.input} required>
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
    backgroundColor: 'var(--primary-color)',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    gap: '20px',
    color: 'white',
    boxShadow: '0 4px 15px rgba(211, 84, 0, 0.15)',
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
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
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
