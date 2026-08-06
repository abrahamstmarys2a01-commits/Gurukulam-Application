export default function StepIndicator({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  const getStepLabel = () => {
    switch (currentStep) {
      case 1: return 'Personal Information';
      case 2: return 'Emergency Contacts';
      case 3: return 'Health & Safety';
      case 4: return 'Spiritual Calling';
      case 5: return 'Conduct Rules';
      case 6: return 'Declaration';
      default: return `Page ${currentStep}`;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.stepText}>Page {currentStep} of {totalSteps}</span>
        <span style={styles.stepLabel}>{getStepLabel()}</span>
      </div>
      <div style={styles.progressBarBg}>
        <div style={styles.progressBarFill(progress)}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: '30px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--primary-dark)',
  },
  stepText: {},
  stepLabel: {},
  progressBarBg: {
    height: '4px',
    backgroundColor: '#e0d8c8',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressBarFill: (progress) => ({
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'var(--primary-color)',
    transition: 'width 0.3s ease',
  })
};
