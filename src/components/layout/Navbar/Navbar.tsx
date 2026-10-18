import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { LanguageSwitcher } from '../../common/LanguageSwitcher/LanguageSwitcher';
import { Button } from '../../common/Button/Button';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/pricing', label: t.nav.pricing },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/about', label: t.nav.about },
    { to: '/#process', label: t.nav.process },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Brand Logo */}
        <Link to="/" className={styles.brand} aria-label="SIDQAVEN Studio Home">
          <div className={styles.logoMark} aria-hidden="true">
            S
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>SIDQAVEN</span>
            <span className={styles.brandSub}>STUDIO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop} aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actionsDesktop}>
          <LanguageSwitcher />
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight size={16} />}
          >
            {t.nav.discussProject}
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? t.nav.closeMenu : t.nav.openMenu}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer & Overlay */}
      {isMobileOpen && (
        <>
          <div
            className={styles.mobileOverlay}
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className={styles.mobileDrawer}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <nav className={styles.mobileNavLinks} aria-label="Mobile Navigation Links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                  }
                  end={item.to === '/'}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} />
                </NavLink>
              ))}
            </nav>

            <div className={styles.mobileActions}>
              <div className={styles.mobileLangRow}>
                <span>Bahasa / Language:</span>
                <LanguageSwitcher />
              </div>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                fullWidth
                icon={<ArrowUpRight size={18} />}
              >
                {t.nav.discussProject}
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
