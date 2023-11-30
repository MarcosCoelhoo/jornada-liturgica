import React from 'react';
import styles from './Stage.module.css';
import imageStage1 from '../../assets/rito-inicial.webp';
import imageStage2 from '../../assets/rito-palavra.webp';
import imageStage3 from '../../assets/rito-sacramental.webp';
import imageStage4 from '../../assets/rito-final.webp';

const IMAGES = {
  stage1: imageStage1,
  stage2: imageStage2,
  stage3: imageStage3,
  stage4: imageStage4,
};

const Stage = ({ data }) => {
  return (
    <li className={styles.stageBox}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-left">
          {data.title}
        </h1>
        <p className={styles.text} data-aos="fade-left" data-aos-delay="100">
          {data.text}
        </p>
      </div>

      <div className={styles.image} data-aos="zoom-in">
        <img src={IMAGES[data.image]} alt="" />
        <span
          className={styles.imageDetail}
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {data.number}
        </span>
      </div>
    </li>
  );
};

export default Stage;
