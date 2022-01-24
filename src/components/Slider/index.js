import React from "react";
import styles from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styles.slide}>
      <div className={styles.slideLeft}>
        <img
          className={styles.logo}
          height={40}
          width={99}
          src="/img/logoslide.png"
          alt="Logo"
        />
        <h2>Stan Smith, Forever!</h2>
        <button>Купить</button>
      </div>

      <img className={styles.imgSlide} src="/img/slide1.png" alt="Slide" />
    </div>
  );
}

export default Slider;
