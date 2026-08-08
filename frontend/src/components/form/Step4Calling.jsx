import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Step4Calling({ nextStep, prevStep }) {
  const [livedInAshram, setLivedInAshram] = useState('no');

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <BookOpen size={24} color="var(--primary-color)" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>ஆன்மீக அழைப்பு மற்றும் ஒழுக்கம்</h2>
          <p style={styles.bannerSubtitle}>Section 4 — Inner Calling &amp; Discipline</p>
        </div>
      </div>

      <div style={styles.form}>
        {/* Q19 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">நீங்கள் ஏன் ஒரு சாதுவாக மாறி குருகுலத்தில் வாழ விரும்புகிறீர்கள்? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Why do you wish to become a Sadhu and live at the Gurukulam? <span style={{color: 'red'}}>*</span></div>
          </div>
          <textarea 
            name="whyJoin"
            style={styles.textarea} 
            placeholder="Please describe your spiritual calling and reasons for joining..."
            required 
            rows={4}
          ></textarea>
        </div>

        {/* Q20 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">நீங்கள் முன்பு ஆசிரமம், குருகுலம் அல்லது ஆன்மீக சமூகத்தில் வாழ்ந்திருக்கிறீர்களா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Have you previously lived in an Ashram, Gurukulam or spiritual community? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="previousAshram" value="yes" checked={livedInAshram === 'yes'} onChange={() => setLivedInAshram('yes')} /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="previousAshram" value="no" checked={livedInAshram === 'no'} onChange={() => setLivedInAshram('no')} /> இல்லை / No
            </label>
          </div>
          {livedInAshram === 'yes' && (
            <input type="text" name="previousAshramDetails" style={{ ...styles.input, marginTop: '8px' }} placeholder="Please provide details of previous ashram experience" required />
          )}
        </div>

        {/* Q21 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">ஒழுக்கம், மௌனம், ஆன்மீக பயிற்சி மற்றும் சேவை ஆகியவற்றின் எளிய வாழ்க்கையை வாழ நீங்கள் தயாரா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Are you prepared to follow a simple life of discipline, silence, spiritual practice and seva? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="dailyPractice" value="yes" required /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="dailyPractice" value="no" required /> இல்லை / No
            </label>
          </div>
        </div>

        {/* Q22 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">குரு, குருகுலம், குடியிருப்பாளர்கள், பார்வையாளர்கள் மற்றும் ஆன்மீக சூழலை மதிக்க நீங்கள் தயாரா? <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Are you willing to respect the Guru, Gurukulam, residents, visitors and the spiritual environment? <span style={{color: 'red'}}>*</span></div>
          </div>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="longTermCommitment" value="yes" required /> ஆம் / Yes
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="longTermCommitment" value="no" required /> இல்லை / No
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
