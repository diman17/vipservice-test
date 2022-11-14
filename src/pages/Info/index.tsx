import { useAppSelector } from "../../hooks";
import Flight from "../../components/Flight";
import { airline, price, times } from "../../constants";

const Info = () => {
    const from = useAppSelector((state) => state.tickets.from);
    const to = useAppSelector((state) => state.tickets.to);
    const there = useAppSelector((state) => state.tickets.there);

    return (
        <Flight 
            from={from} 
            to={to} 
            date={there} 
            airline={airline} 
            times={times} 
            price={price} 
        />
    );
};

export default Info;
