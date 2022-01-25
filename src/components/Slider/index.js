import React from "react";
import styles from "./Slider.module.scss";
import slide1 from "./slides/slide1.png";
import slide2 from "./slides/slide2.jpg";
import slide3 from "./slides/slide3.jpg";

const img = [
  <img className={styles.imgSlide} key={slide1} src={slide1} alt="Slide" />,
  <img className={styles.imgSlide} key={slide2} src={slide2} alt="Slide" />,
  <img className={styles.imgSlide} key={slide3} src={slide3} alt="Slide" />,
];

function Promo() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickSlide = () => {
    setActiveIndex((current) => {
      const res = current === img.length - 1 ? 0 : current + 1;
      return res;
    });
  };

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
        <a
          href="https://github.com/GlebSharipov"
          target="_blank"
          rel="noreferrer"
        >
          <button>Купить</button>
        </a>
      </div>
      <div key={activeIndex}>{img[activeIndex]}</div>
      <img
        className={styles.nextSlide}
        onClick={onClickSlide}
        height={35}
        width={35}
        src="/img/next-slide.png"
        alt="NextSlide"
      />
    </div>
  );
}

export default Promo;
