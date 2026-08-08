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
          <Shield size={24} color="var(--primary-color)" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>பாதுகாப்பு, நடத்தை மற்றும் பொறுப்பு</h2>
          <p style={styles.bannerSubtitle}>Section 5 — Rules &amp; Guidelines</p>
        </div>
      </div>

      <div style={styles.form}>
        {/* Q23 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">குருகுலத்திற்குள் வன்முறை, மிரட்டல், துன்புறுத்தல், துஷ்பிரயோகம், திருட்டு அல்லது சட்டவிரோத நடவடிக்கைகளில் ஈடுபட மாட்டேன் என்று ஒப்புக்கொள்கிறேன். <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">I agree not to engage in violence, threats, harassment, abuse, theft or unlawful activities within the Gurukulam. <span style={{color: 'red'}}>*</span></div>
          </div>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            நான் ஒப்புக்கொள்கிறேன் / I Agree
          </label>
        </div>

        {/* Q24 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">குருகுலத்தின் பாதுகாப்பு, தங்குமிடம், ஆன்மீகம் மற்றும் நடத்தை விதிகளைப் பின்பற்ற நான் ஒப்புக்கொள்கிறேன். <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">I agree to follow the Gurukulam’s safety, accommodation, spiritual and conduct rules. <span style={{color: 'red'}}>*</span></div>
          </div>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" required style={styles.checkbox} />
            நான் ஒப்புக்கொள்கிறேன் / I Agree
          </label>
        </div>

        {/* Q25 */}
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">குருகுல வாழ்க்கையில் சாதாரண குடியிருப்பு, பயணம், உடல், சுற்றுச்சூழல் மற்றும் பிற அபாயங்கள் உள்ளன என்பதை நான் புரிந்துகொள்கிறேன், மேலும் எனது சொந்த பாதுகாப்பில் நான் நியாயமான கவனம் செலுத்துவேன் மற்றும் பாதுகாப்பு வழிமுறைகளைப் பின்பற்றுவேன். <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">I understand that Gurukulam life involves ordinary residential, travel, physical, environmental and other risks, and I will take reasonable care of my own safety and follow safety instructions. <span style={{color: 'red'}}>*</span></div>
          </div>
          <label style={styles.checkboxLabel}>
            <input type="checkbox" name="declarationSigned" value="true" required style={styles.checkbox} />
            நான் புரிந்துகொண்டு ஒப்புக்கொள்கிறேன் / I Understand & Agree
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
