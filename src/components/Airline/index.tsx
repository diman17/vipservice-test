import { Airline as AirlineType } from "../../types";
import styles from "./index.module.css";

type AirlineProps = {
    airline: AirlineType;
};

const Airline = ({ airline }: AirlineProps) => {
    return (
        <figure className={styles.container}>
            <img className={styles.logo} src={airline.logoPath} alt={airline.name} />
            <figcaption className={styles.name}>{airline.name}</figcaption>
        </figure>
    );
};

export default Airline;
