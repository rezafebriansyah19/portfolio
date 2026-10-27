import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { WhatsAppButton } from '../../common/WhatsAppButton/WhatsAppButton';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top upon navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent} id="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
