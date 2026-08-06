import { useState } from 'react';
import { Camera, ArrowRight, User } from 'lucide-react';

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
      <div style={styles.banner} className="section-banner">
        <div style={styles.bannerIconBox}>
          <User size={24} color="#1976d2" />
        </div>
        <div style={styles.bannerTextContainer}>
          <h2 style={styles.bannerTitle}>Personal Information</h2>
          <p style={styles.bannerSubtitle}>Section 1 — Couple Identity & Marital Foundation</p>
        </div>
      </div>

      <div style={styles.header}>
        <div style={styles.photoUpload}>
          <label style={styles.photoCircle}>
            <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageChange} />
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" style={styles.previewImage} />
            ) : (
              <Camera size={24} color="var(--primary-color)" />
            )}
          </label>
          <div style={styles.uploadText}>Upload Image</div>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name <span style={{color: 'red'}}>*</span></label>
          <input type="text" style={styles.input} placeholder="Enter your full name" required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Date of Birth <span style={{color: 'red'}}>*</span></label>
          <div style={styles.inputWrapper}>
            <input type="date" style={styles.input} required />
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Aadhaar / Passport Number <span style={{color: 'red'}}>*</span></label>
          <input type="text" style={styles.input} placeholder="Enter Aadhaar or Passport number" required />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Current Address <span style={{color: 'red'}}>*</span></label>
          <input type="text" style={styles.input} placeholder="Enter your full current address" required />

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
  photoUpload: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  },
  uploadText: {
    fontSize: '12px',
    color: 'var(--text-muted)',
    fontWeight: '500',
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
