import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../i18n';
import { LanguageSwitcher } from '../../common/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from '../../common/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../../common/Button/Button';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
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
    setIsMoreOpen(false);
  }, [location.pathname, location.hash]);

  // Close open navigation surfaces with Escape or an outside click.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
        setIsMoreOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !moreMenuRef.current?.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMobileOpen]);

  const primaryNavItems = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/pricing', label: t.nav.pricing },
    { to: '/portfolio', label: t.nav.portfolio },
  ];

  const secondaryNavItems = [
    { to: '/payment', label: t.nav.payment },
    { to: '/about', label: t.nav.about },
    { to: '/services/ai-video-promotion', label: 'Video Promosi AI' },
    { to: '/#process', label: t.nav.process },
  ];

  const isMoreActive = secondaryNavItems.some((item) =>
    item.to === '/#process'
      ? location.pathname === '/' && location.hash === '#process'
      : location.pathname === item.to,
  );

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
          {primaryNavItems.map((item) => (
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
          <div className={styles.moreMenu} ref={moreMenuRef}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.moreToggle} ${isMoreActive ? styles.active : ''}`}
              onClick={() => setIsMoreOpen((open) => !open)}
              aria-expanded={isMoreOpen}
              aria-haspopup="true"
              aria-controls="navbar-more-menu"
            >
              {t.nav.more}
              <ChevronDown size={14} aria-hidden="true" />
            </button>
            {isMoreOpen && (
              <div className={styles.moreDropdown} id="navbar-more-menu">
                {secondaryNavItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `${styles.dropdownLink} ${
                        (isActive || (item.to === '/#process' && location.hash === '#process'))
                          ? styles.dropdownActive
                          : ''
                      }`
                    }
                    end={item.to === '/#process'}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actionsDesktop}>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight size={16} />}
          >
            {t.nav.contact}
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className={styles.mobileHeaderActions}>
          <ThemeSwitcher />
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
              {[
                ...primaryNavItems,
                ...secondaryNavItems,
                { to: '/contact', label: t.nav.contact },
              ].map((item) => (
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
