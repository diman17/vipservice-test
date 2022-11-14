import styles from "./index.module.css";
import Airline from "../Airline";
import { Airline as AirlineType, Time } from "../../types";
import FlightInfo from "../FlightInfo";
import FlightPrice from "../FlightPrice";

type FlightProps = {
    from: string;
    to: string;
    date: string;
    airline: AirlineType;
    times: Time[];
    price: number;
};

const Flight = ({ from, to, date, airline, times, price }: FlightProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.tag}>Невозвратный</span>
                <Airline airline={airline} />
            </div>
            <FlightInfo from={from} to={to} date={date} times={times} />
            <FlightPrice price={price} />
        </div>
    );
};

export default Flight;
