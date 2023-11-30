import React from 'react';
import styles from './Hero.module.css';
import iconScroll from '../../assets/scroll-icon.svg';
import logoPascom from '../../assets/logo-pascom-horizontal.svg';

const Hero = () => {
  return (
    <header className={styles.container}>
      <span className={styles.logo}>
        <a
          href="https://www.facebook.com/paroquiassuncao"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoPascom} alt="Logo Pascom Oeiras do Pará" />
        </a>
      </span>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title} data-aos="fade-right">
            Jornada Litúrgica
          </h1>
          <p
            className={styles.subtitle}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Explorando os Ritos que Conduzem ao Sagrado
          </p>
        </div>
        <div className={styles.iconBox}>
          <a href="#welcome">
            <img src={iconScroll} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
