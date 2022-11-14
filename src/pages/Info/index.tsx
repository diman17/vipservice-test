import logo from "../../assets/images/logo.png";
import baggageIcon1 from "../../assets/icons/baggage-1.svg";
import baggageIcon2 from "../../assets/icons/baggage-2.svg";
import styles from "./index.module.css";
import classnames from "classnames";

const Info = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperAirline}>
                <span className={styles.tag}>Невозвратный</span>
                <figure className={styles.airline}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <figcaption className={styles.name}>S7 Airlines</figcaption>
                </figure>
            </div>
            <div className={styles.wrapperInfo}>
                <div className={styles.details}>
                    <div className={styles.wrapperDetails}>
                        <p className={styles.time}>9:20</p>
                        <p className={styles.city}>Москва</p>
                        <p className={styles.date}>19.05.2022</p>
                    </div>
                    <div className={styles.wrapperDrawing}>
                        <div className={styles.drawing}>
                            <p className={styles.code}>SVO</p>
                            <p className={styles.code}>ROV</p>
                        </div>
                        <span className={styles.line}></span>
                        <p className={styles.duration}>В пути 1 ч 55 мин</p>
                    </div>
                    <div className={styles.wrapperDetails}>
                        <p className={styles.time}>11:05</p>
                        <p className={styles.city}>Ростов на Дону</p>
                        <p className={styles.date}>19.05.2022</p>
                    </div>
                    <div className={styles.baggage}>
                        <img src={baggageIcon1} alt="" width={20} height={20} />
                        <img src={baggageIcon2} alt="" width={20} height={38} />
                    </div>
                </div>
                <ul className={styles.timeList}>
                    <li>
                        <button className={classnames(styles.timeButton, styles.active)}>
                            <span>
                                <span className={styles.start}>9:20 - </span>11:05
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className={styles.timeButton}>
                            <span>
                                <span className={styles.start}>10:20 - </span>12:05
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className={styles.timeButton}>
                            <span>
                                <span className={styles.start}>11:20 - </span>13:05
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.wrapperPrice}>4 150 &#8381;</div>
        </div>
    );
};

export default Info;
