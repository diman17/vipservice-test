import { useAppSelector } from "../../hooks";
import { airline, price, times } from "../../constants";
import styles from "./index.module.css";
import Airline from "../../components/Airline";
import FlightInfo from "../../components/FlightInfo";
import FlightPrice from "../../components/FlightPrice";

const Info = () => {
    const from = useAppSelector((state) => state.tickets.from);
    const to = useAppSelector((state) => state.tickets.to);
    const there = useAppSelector((state) => state.tickets.there);
    const back = useAppSelector((state) => state.tickets.back);

    if (back) {
        return (
            <div className={styles.container}>
                <div>
                    <div className={styles.flight}>
                        <div className={styles.wrapper}>
                            <span className={styles.tag}>Невозвратный</span>
                            <Airline airline={airline} />
                        </div>
                        <FlightInfo from={from} to={to} date={there} times={times} />
                    </div>
                    <div className={styles.flight}>
                        <div className={styles.wrapper}>
                            <span className={styles.tag}>Невозвратный</span>
                            <Airline airline={airline} />
                        </div>
                        <FlightInfo from={to} to={from} date={back} times={times} />
                    </div>
                </div>
                <FlightPrice price={price * 2} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.tag}>Невозвратный</span>
                <Airline airline={airline} />
            </div>
            <FlightInfo from={from} to={to} date={there} times={times} />
            <FlightPrice price={price} />
        </div>
    );
};

export default Info;
