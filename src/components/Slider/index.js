import React from "react";
import styles from "./Slider.module.scss";

function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div className={styles.slideLeft}>
          <img className={styles.logo} src="/img/logoslide.png" alt="Logo" />
          <h2>Stan Smith, Forever!</h2>
          <button>Купить</button>
        </div>

        <div>
          <img src="/img/slide1.png" alt="Slide" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
