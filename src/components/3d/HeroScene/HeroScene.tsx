import React from 'react';
import logo from '../../../assets/SIDQAVEN Gold Monogram Branding.png';
import styles from './HeroScene.module.scss';

export const HeroScene: React.FC = () => (
  <div className={styles.sceneShell}>
    <img
      className={styles.brandLogo}
      src={logo}
      alt="SIDQAVEN — Digital Solution Partner"
    />
  </div>
);
