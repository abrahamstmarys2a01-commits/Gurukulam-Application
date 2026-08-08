import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step1Personal from './Step1Personal';
import Step2Emergency from './Step2Emergency';
import Step3Health from './Step3Health';
import Step4Calling from './Step4Calling';
import Step5Conduct from './Step5Conduct';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const totalSteps = 5;
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep < totalSteps) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const formElement = e.target;
      const formData = new FormData(formElement);
      
      if (!formData.get('declarationSigned')) {
        setError('Please check the declaration box to agree to the terms and conditions.');
        return;
      }
      
      const response = await fetch('http://localhost:5001/api/applications', {
        method: 'POST',
        body: formData, // fetch automatically sets the correct multipart/form-data boundary
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setError(data.error ? `Validation Error: ${data.error}` : (data.message || 'Something went wrong. Please try again.'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      console.error(err);
      setError('Network error. Please make sure the backend is running.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }} className="animate-fade-in">
          <CheckCircle size={64} color="var(--primary-color)" style={{ margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: '32px', color: 'var(--primary-dark)', marginBottom: '16px' }}>
            Submitted Successfully
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '18px', lineHeight: '1.6' }}>
            Thank you for applying to Shree Datta Easanamma Gurukulam. We will review your application and get back to you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.headerSection}>
        <h2 style={styles.mainTitle}>SADHU SPIRITUAL LIFE RESIDENTIAL APPLICATION</h2>
        <p style={styles.subTitle}>For sincere seekers wishing to live a life of surrender, discipline, simplicity, spiritual practice and selfless seva.</p>
      </div>

      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      
      {error && (
        <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '15px', borderRadius: '0', marginBottom: '20px', textAlign: 'center' }}>
          {error}
        </div>
      )}

      <div style={styles.card} className="responsive-form-card">
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '60px', minHeight: '800px', justifyContent: 'space-between' }}>
          <div>
          
          <div className="animate-fade-in" style={{ display: currentStep === 1 ? 'flex' : 'none', flexDirection: 'column', gap: '60px' }}>
            <Step1Personal />
          </div>

          <div className="animate-fade-in" style={{ display: currentStep === 2 ? 'flex' : 'none', flexDirection: 'column', gap: '60px' }}>
            <Step2Emergency />
          </div>

          <div className="animate-fade-in" style={{ display: currentStep === 3 ? 'flex' : 'none', flexDirection: 'column', gap: '60px' }}>
            <Step3Health />
          </div>

          <div className="animate-fade-in" style={{ display: currentStep === 4 ? 'flex' : 'none', flexDirection: 'column', gap: '60px' }}>
            <Step4Calling />
          </div>

          <div className="animate-fade-in" style={{ display: currentStep === 5 ? 'flex' : 'none', flexDirection: 'column', gap: '60px' }}>
            <Step5Conduct />
          </div>
          </div>

          <div style={styles.actions} className="responsive-actions">
            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={prevStep}
              disabled={currentStep === 1 || isSubmitting}
              style={{ opacity: currentStep === 1 ? 0 : 1 }}
            >
              <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Previous Page
            </button>
            
            {currentStep < totalSteps ? (
              <button type="button" className="btn btn-primary" onClick={nextStep}>
                Next Page <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            ) : (
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'} <CheckCircle size={16} style={{ marginLeft: '8px' }} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '900px', // Reduced width as requested
    margin: '0 auto',
    padding: '0 20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px 50px',
    borderRadius: '0',
    border: '1px solid #dadce0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    width: '100%',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    paddingTop: '30px',
  },
  headerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px',
    textAlign: 'center',
  },
  mainTitle: {
    fontSize: '28px',
    color: 'var(--primary-dark)',
    margin: '0 0 16px 0',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: '16px',
    color: '#555',
    margin: '0',
    lineHeight: '1.5',
    maxWidth: '700px',
  }
};
