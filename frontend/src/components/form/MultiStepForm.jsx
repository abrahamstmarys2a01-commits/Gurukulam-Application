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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      nextStep();
    } else {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        navigate('/');
      }, 3000);
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
        <h1 style={styles.mainTitle}>சிசு பால கர்ப்ப விருத்தி</h1>
        <h2 style={styles.subTitle}>Deep Couples Study Application</h2>
        <div style={styles.badge}>
          <span style={styles.sparkle}>✨</span> SPIRITUAL JOURNEY APPROACH
        </div>
      </div>

      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      
      <div style={styles.card} className="responsive-form-card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', minHeight: '800px', justifyContent: 'space-between' }}>
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
              disabled={currentStep === 1}
              style={{ opacity: currentStep === 1 ? 0 : 1 }}
            >
              <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Previous Page
            </button>
            
            {currentStep < totalSteps ? (
              <button type="button" className="btn btn-primary" onClick={nextStep}>
                Next Page <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Submit Application <CheckCircle size={16} style={{ marginLeft: '8px' }} />
              </button>
            )}
          </div>
        </div>
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
    borderRadius: '8px',
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
    fontSize: '48px',
    color: 'var(--primary-dark)', // Using theme variable
    margin: '0 0 16px 0',
    fontWeight: 'normal',
  },
  subTitle: {
    fontSize: '28px',
    color: 'var(--primary-color)', // Using theme variable
    margin: '0 0 20px 0',
    fontStyle: 'italic',
    fontFamily: 'var(--font-serif)',
    fontWeight: 'normal',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    letterSpacing: '2px',
    color: '#666',
    textTransform: 'uppercase',
  },
  sparkle: {
    color: '#f59e0b',
    fontSize: '16px',
  }
};
