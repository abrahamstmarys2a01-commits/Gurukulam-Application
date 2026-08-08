import { ArrowRight, User } from 'lucide-react';

export default function Step1Personal({ nextStep, prevStep, currentStep }) {

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <User size={24} color="#1976d2" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>தனிப்பட்ட தகவல் (Personal Information)</h2>
          <p style={styles.bannerSubtitle}>Section A — Personal Information</p>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">முழுப் பெயர்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Full Name: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="text" style={styles.input} placeholder="Enter your full name" required />
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">பிறந்த தேதி: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Date of Birth: <span style={{color: 'red'}}>*</span></div>
            </div>
            <input type="date" style={styles.input} required />
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">வயது: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Age: <span style={{color: 'red'}}>*</span></div>
            </div>
            <input type="number" style={styles.input} placeholder="Enter your age" required />
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">பாலினம்: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Gender: <span style={{color: 'red'}}>*</span></div>
            </div>
            <select style={styles.input} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">தேசியம்: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Nationality: <span style={{color: 'red'}}>*</span></div>
            </div>
            <input type="text" style={styles.input} placeholder="Enter your nationality" required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">ஆதார் / பாஸ்போர்ட் / அரசு அடையாள எண்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Aadhaar / Passport / Government ID No.: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="text" style={styles.input} placeholder="Enter your ID number" required />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">மொபைல் / வாட்ஸ்அப்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Mobile / WhatsApp: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="tel" style={styles.input} placeholder="Enter your mobile number" required />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">சமீபத்திய பாஸ்போர்ட் அளவு புகைப்படம்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Recent Passport-Size Photograph: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="file" style={styles.fileInput} accept="image/*" required />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">மின்னஞ்சல்:</div>
            <div className="label-english">Email:</div>
          </div>
          <input type="email" style={styles.input} placeholder="Enter your email ID" />
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">நிரந்தர முகவரி: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Permanent Address: <span style={{color: 'red'}}>*</span></div>
          </div>
          <textarea 
            style={styles.textarea} 
            placeholder="Enter your permanent address"
            required 
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
    gap: '4px',
  },
  labelContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--primary-dark)',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    right: '0',
    color: 'var(--text-muted)',
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
  fileInput: {
    padding: '16px 24px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'white',
    fontSize: '16px',
    fontFamily: 'inherit',
    color: 'var(--text-main)',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s ease',
    cursor: 'pointer',
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
