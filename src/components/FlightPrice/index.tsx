import { formatPrice } from "../../utils";
import styles from "./index.module.css";

type FlightPriceProps = {
    price: number;
};

const FlightPrice = ({ price }: FlightPriceProps) => {
    return <div className={styles.container}>{formatPrice(price)} &#8381;</div>;
};

export default FlightPrice;
