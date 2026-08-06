import { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import MultiStepForm from '../components/form/MultiStepForm';
import Footer from '../components/layout/Footer';

export default function Apply() {

  return (
    <div style={styles.page} className="google-form-theme animate-fade-in">
      <header style={styles.header}>
        <div style={styles.logoGroup}>
          <img src="/logo.jpg" alt="Garbha Viruthi Logo" style={styles.headerLogo} />
          <div style={styles.titleContainer}>
            <h1 style={styles.headerTitleStyled}>Garbha Viruthi</h1>
            <div style={styles.titleDecoration}>
              <div style={styles.goldLineLeft}></div>
              <div style={styles.lotusWrapper}>
                <div style={styles.goldDot}></div>
                <svg width="20" height="12" viewBox="0 0 24 16" fill="#d3a73b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C12 16 16.5 13 16.5 7.5C16.5 4 12 0 12 0C12 0 7.5 4 7.5 7.5C7.5 13 12 16 12 16Z" />
                  <path d="M10 15C10 15 4 13.5 2 8.5C0 3.5 6 3 6 3C6 3 7.5 9 10 15Z" />
                  <path d="M14 15C14 15 20 13.5 22 8.5C24 3.5 18 3 18 3C18 3 16.5 9 14 15Z" />
                </svg>
                <div style={styles.goldDot}></div>
              </div>
              <div style={styles.goldLineRight}></div>
            </div>
          </div>
        </div>
      </header>
      <main style={styles.main}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <MultiStepForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--background-light)',
  },
  header: {
    padding: '12px 40px',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  headerLogo: {
    height: '40px',
    width: 'auto',
    objectFit: 'contain',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
    marginLeft: '8px',
  },
  headerTitleStyled: {
    fontFamily: 'var(--font-serif)',
    fontSize: '26px',
    fontWeight: '600',
    color: '#0e3a1f', // Dark green color
    margin: 0,
    letterSpacing: '0.5px',
    textAlign: 'center',
  },
  titleDecoration: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '6px',
    paddingTop: '2px',
  },
  goldLineLeft: {
    flex: 1,
    height: '1.5px',
    background: 'linear-gradient(to right, transparent, #d3a73b)',
  },
  goldLineRight: {
    flex: 1,
    height: '1.5px',
    background: 'linear-gradient(to left, transparent, #d3a73b)',
  },
  lotusWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  goldDot: {
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    backgroundColor: '#d3a73b',
  },
  headerTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#1a472a',
    margin: 0,
    letterSpacing: '0.5px',
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '40px 0',
  }
};
