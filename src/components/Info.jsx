import React from "react"
import AppContext from "../context";
import styles from "./Drawer/Drawer.module.scss"

const Info = ({title, image, description}) => {
    const {setCartOpened} = React.useContext(AppContext);

    return (
        <div className={styles.emptyCart}>
            <img  width={120} src={image} alt="Box" />
            <h2> {title} </h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened(false)} className={styles.greenButton}>
              Закрыть корзину <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
    )
}

export default Info;