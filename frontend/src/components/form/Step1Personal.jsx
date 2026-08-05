import { useState } from 'react';
import { Camera, ArrowRight } from 'lucide-react';

export default function Step1Personal({ nextStep, prevStep, currentStep }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate-fade-in">
      <div style={styles.header}>
        <h2 style={styles.title}>Personal<br/>Information</h2>
        <div style={styles.photoUpload}>
          <label style={styles.photoCircle}>
            <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageChange} />
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" style={styles.previewImage} />
            ) : (
              <Camera size={24} color="var(--primary-color)" />
            )}
          </label>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Legal Name</label>
          <input type="text" placeholder="John Doe" style={styles.input} required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Date of Birth</label>
          <div style={styles.inputWrapper}>
            <input type="date" style={styles.input} required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Aadhaar / Passport Number</label>
          <input type="text" placeholder="Enter ID number" style={styles.input} required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Current Address</label>
          <input type="text" placeholder="Full residential address" style={styles.input} required />
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
  photoUpload: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '2px dashed #d0c5b3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
  line: {
    height: '2px',
    backgroundColor: 'var(--primary-color)',
    marginTop: '20px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  }
};
