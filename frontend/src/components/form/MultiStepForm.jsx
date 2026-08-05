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
  const totalSteps = 2;
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
    if (currentStep === 1) {
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
    <div style={styles.container} className="responsive-form-card">
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {currentStep === 1 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            <Step1Personal />
            <Step2Emergency />
            <Step3Health />
          </div>
        )}

        {currentStep === 2 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            <Step4Calling />
            <Step5Conduct />
          </div>
        )}

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
            <button type="submit" className="btn btn-primary">
              Next Page <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit Application <CheckCircle size={16} style={{ marginLeft: '8px' }} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '40px 50px',
    borderRadius: '8px',
    border: '1px solid #dadce0',
    borderTop: '8px solid var(--primary-color)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    paddingTop: '30px',
  }
};
