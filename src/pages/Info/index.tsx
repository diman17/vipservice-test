import logo from "../../assets/images/logo.png";
import baggageIcon1 from "../../assets/icons/baggage-1.svg";
import baggageIcon2 from "../../assets/icons/baggage-2.svg";
import styles from "./index.module.css";
import { times } from "./constants";
import TimeButton from "../../components/TimeButton";
import { useState } from "react";

const Info = () => {
    const [, setSelectedTime] = useState(times.find((time) => time.isSelect)?.id);

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
                        <p className={styles.time}>{times.find((time) => time.isSelect)?.start}</p>
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
                        <p className={styles.time}>{times.find((time) => time.isSelect)?.finish}</p>
                        <p className={styles.city}>Ростов на Дону</p>
                        <p className={styles.date}>19.05.2022</p>
                    </div>
                    <div className={styles.baggage}>
                        <img src={baggageIcon1} alt="" width={20} height={20} />
                        <img src={baggageIcon2} alt="" width={20} height={38} />
                    </div>
                </div>
                <ul className={styles.timeList}>
                    {times.map((time) => {
                        return (
                            <li key={time.id}>
                                <TimeButton time={time} setSelectedTime={setSelectedTime} />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.wrapperPrice}>4 150 &#8381;</div>
        </div>
    );
};

export default Info;
