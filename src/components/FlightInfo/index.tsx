import baggageIcon1 from "../../assets/icons/baggage-1.svg";
import baggageIcon2 from "../../assets/icons/baggage-2.svg";
import styles from "./index.module.css";
import { useState } from "react";
import { Time } from "../../types";
import TimeButton from "../TimeButton";

type FlightInfoProps = {
    from: string;
    to: string;
    date: string;
    times: Time[];
};

const FlightInfo = ({ from, to, date, times }: FlightInfoProps) => {
    const [, setSelectedTime] = useState(times.find((time) => time.isSelect)?.id);

    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.wrapper}>
                    <p className={styles.time}>{times.find((time) => time.isSelect)?.start}</p>
                    <p className={styles.city}>{from}</p>
                    <p className={styles.date}>{date.split("-").reverse().join(".")}</p>
                </div>
                <div className={styles.wrapperDrawing}>
                    <div className={styles.drawing}>
                        <p className={styles.code}>SVO</p>
                        <p className={styles.code}>ROV</p>
                    </div>
                    <span className={styles.line}></span>
                    <p className={styles.duration}>В пути 1 ч 55 мин</p>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles.time}>{times.find((time) => time.isSelect)?.finish}</p>
                    <p className={styles.city}>{to}</p>
                    <p className={styles.date}>{date.split("-").reverse().join(".")}</p>
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
    );
};

export default FlightInfo;
