import { ArrowLeft, CheckCircle, ShieldAlert, CheckSquare } from 'lucide-react';

export default function Step6Declaration({ prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted Successfully!');
  };

  return (
    <div className="animate-fade-in">
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <CheckSquare size={24} color="#1976d2" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>முக்கியமான அறிவிப்பு</h2>
          <p style={styles.bannerSubtitle}>Section 6 — Acknowledgment &amp; Submission</p>
        </div>
      </div>

      <div style={styles.declarationBox}>
        <div style={styles.iconBox}>
          <ShieldAlert size={20} color="var(--primary-color)" />
        </div>
        <div style={styles.textStack}>
          <p style={styles.declText}>I confirm that the information given by me is true and complete to the best of my knowledge. (நான் அளித்த தகவல்கள் என் அறிவுக்கு எட்டியவரை உண்மையானவை மற்றும் முழுமையானவை என்று உறுதிப்படுத்துகிறேன்.)</p>
          <p style={styles.declText}>I voluntarily seek residence at Shree Datta Easanamma Gurukulam. I understand that food and accommodation may be provided as seva/support to accepted seekers, subject to the Gurukulam’s rules, capacity and terms. (ஸ்ரீ தத்த ஈசானம்மா குருகுலத்தில் நான் தானாக முன்வந்து தங்குமிடம் தேடுகிறேன். குருகுலத்தின் விதிகள், திறன் மற்றும் விதிமுறைகளுக்கு உட்பட்டு, ஏற்றுக்கொள்ளப்பட்ட சாதகர்களுக்கு உணவு மற்றும் தங்குமிடம் சேவையாக/ஆதரவாக வழங்கப்படலாம் என்பதை நான் புரிந்துகொள்கிறேன்.)</p>
          <p style={styles.declText}>I understand that the Gurukulam is a spiritual residential environment and not a hospital or medical treatment facility. (குருகுலம் ஒரு ஆன்மீக உறைவிடச் சூழல் என்றும் மருத்துவமனை அல்லது மருத்துவ சிகிச்சை வசதி அல்ல என்றும் நான் புரிந்துகொள்கிறேன்.)</p>
          <p style={styles.declText}>I understand and accept that accidents, illness, injury, natural events and other unforeseen circumstances can occur during residential life. To the maximum extent permitted by applicable law, the Gurukulam does not assume responsibility for risks or incidents arising from my own actions, undisclosed conditions, ordinary unavoidable risks or circumstances beyond its reasonable control. This does not exclude any responsibility that cannot lawfully be excluded. (குடியிருப்பு வாழ்க்கையின் போது விபத்துக்கள், நோய், காயம், இயற்கை நிகழ்வுகள் மற்றும் பிற எதிர்பாராத சூழ்நிலைகள் ஏற்படலாம் என்பதை நான் புரிந்துகொள்கிறேன் மற்றும் ஏற்றுக்கொள்கிறேன். பொருந்தக்கூடிய சட்டத்தால் அனுமதிக்கப்பட்ட அதிகபட்ச அளவிற்கு, குருகுலம் எனது சொந்த செயல்கள், வெளிப்படுத்தப்படாத நிலைமைகள், சாதாரண தவிர்க்க முடியாத அபாயங்கள் அல்லது அதன் நியாயமான கட்டுப்பாட்டிற்கு அப்பாற்பட்ட சூழ்நிலைகளால் ஏற்படும் அபாயங்கள் அல்லது சம்பவங்களுக்கு பொறுப்பேற்காது. சட்டப்பூர்வமாக விலக்க முடியாத எந்தவொரு பொறுப்பையும் இது விலக்காது.)</p>
          <p style={styles.declText}>I agree to immediately inform the Gurukulam about any serious health, safety or safeguarding concern. (ஏதேனும் தீவிரமான உடல்நலம், பாதுகாப்பு அல்லது பாதுகாப்பு கவலைகள் குறித்து உடனடியாக குருகுலத்திற்கு தெரிவிக்க நான் ஒப்புக்கொள்கிறேன்.)</p>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">விண்ணப்பதாரர் பெயர்: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Applicant Name: <span style={{color: 'red'}}>*</span></div>
            </div>
            <input type="text" style={styles.input} placeholder="Enter your full name" required />
          </div>
        </div>
        
        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">கையொப்பம்: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Signature: <span style={{color: 'red'}}>*</span></div>
            </div>
            <input type="text" style={styles.input} placeholder="Type your full name as signature" required />
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <div style={styles.labelContainer}>
              <div className="label-tamil">தேதி: <span style={{color: 'red'}}>*</span></div>
              <div className="label-english">Date: <span style={{color: 'red'}}>*</span></div>
            </div>
            <input type="date" style={styles.input} required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <div style={styles.labelContainer}>
            <div className="label-tamil">இடம்: <span style={{color: 'red'}}>*</span></div>
            <div className="label-english">Place: <span style={{color: 'red'}}>*</span></div>
          </div>
          <input type="text" style={styles.input} placeholder="Enter your city/town" required />
        </div>

        {/* Office Use Section */}
        <div style={styles.officeUse}>
          <h3 style={styles.officeTitle}>FOR GURUKULAM USE</h3>
          <p style={styles.officeSubtitle}>(Do not fill this section)</p>
          
          <div style={styles.row}>
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Interviewed by</label>
              <input type="text" style={styles.input} disabled />
            </div>
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Date</label>
              <input type="date" style={styles.input} disabled />
            </div>
          </div>
          
          <div style={styles.radioGroupVertical}>
            <label style={styles.radioLabel}><input type="radio" disabled /> Accepted</label>
            <label style={styles.radioLabel}><input type="radio" disabled /> Further Interview Required</label>
            <label style={styles.radioLabel}><input type="radio" disabled /> Medical/Safety Clarification Required</label>
            <label style={styles.radioLabel}><input type="radio" disabled /> Not Accepted</label>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Authorised Signature</label>
            <input type="text" style={styles.input} disabled />
          </div>
        </div>

        <div style={styles.line}></div>
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
  declarationBox: {
    backgroundColor: '#f9f6f0',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '30px',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  iconBox: {
    paddingTop: '4px',
  },
  textStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  declText: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    textAlign: 'justify',
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
  officeUse: {
    marginTop: '30px',
    padding: '24px',
    border: '2px dashed #d0c5b3',
    borderRadius: '12px',
    backgroundColor: '#faf8f5',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    opacity: 0.7,
  },
  officeTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'var(--text-muted)',
    textAlign: 'center',
    letterSpacing: '1px',
  },
  officeSubtitle: {
    fontSize: '12px',
    color: '#999',
    textAlign: 'center',
    marginTop: '-16px',
  },
  radioGroupVertical: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  radioLabel: {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#888',
  },
  line: {
    height: '2px',
    backgroundColor: 'var(--primary-color)',
    marginTop: '10px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  }
};
