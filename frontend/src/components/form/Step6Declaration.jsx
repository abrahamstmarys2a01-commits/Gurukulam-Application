import { ArrowLeft, CheckCircle, ShieldAlert } from 'lucide-react';

export default function Step6Declaration({ prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted Successfully!');
  };

  return (
    <div className="animate-fade-in">
      <div style={styles.header}>
        <h2 style={styles.title}>Important<br/>Declaration</h2>
      </div>

      <div style={styles.declarationBox}>
        <div style={styles.iconBox}>
          <ShieldAlert size={20} color="var(--primary-color)" />
        </div>
        <div style={styles.textStack}>
          <p style={styles.declText}>I confirm that the information given by me is true and complete to the best of my knowledge.</p>
          <p style={styles.declText}>I voluntarily seek residence at Shree Datta Easanamma Gurukulam. I understand that food and accommodation may be provided as seva/support to accepted seekers, subject to the Gurukulam’s rules, capacity and terms.</p>
          <p style={styles.declText}>I understand that the Gurukulam is a spiritual residential environment and not a hospital or medical treatment facility.</p>
          <p style={styles.declText}>I understand and accept that accidents, illness, injury, natural events and other unforeseen circumstances can occur during residential life. To the maximum extent permitted by applicable law, the Gurukulam does not assume responsibility for risks or incidents arising from my own actions, undisclosed conditions, ordinary unavoidable risks or circumstances beyond its reasonable control. This does not exclude any responsibility that cannot lawfully be excluded.</p>
          <p style={styles.declText}>I agree to immediately inform the Gurukulam about any serious health, safety or safeguarding concern.</p>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Applicant Name</label>
            <input type="text" placeholder="Full Name" style={styles.input} required />
          </div>
        </div>
        
        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Signature</label>
            <input type="text" placeholder="Type name to sign" style={styles.input} required />
          </div>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>Date</label>
            <input type="date" style={styles.input} required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Place</label>
          <input type="text" placeholder="City, Country" style={styles.input} required />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
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
    gap: '20px',
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
    fontWeight: '500',
    color: 'var(--primary-dark)',
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
