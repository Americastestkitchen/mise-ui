import React from 'react';

import Logo from './Logo';
import { LogoType } from './svgs/useLogoMap';

import styles from './doc_logo.module.scss';

type DocLogoProps = {
  name: string;
  mode: 'light' | 'dark';
  type: LogoType;
};

const DocLogo = ({ name, mode, type }: DocLogoProps) => (
  <div className={`${styles.docLogo} ${mode === 'dark' ? styles.docLogoDark : styles.docLogoLight}`}>
    <div className={styles.docLogoSvg}>
      <Logo type={type} />
    </div>
    <div>
      <p className={styles.docLogoText}>
        <span className={styles.docLogoLabel}>Name: </span>{name}
      </p>
      <p className={styles.docLogoText}>
        <span className={styles.docLogoLabel}>Type: </span>{type}
      </p>
    </div>
  </div>
);

export default DocLogo;
