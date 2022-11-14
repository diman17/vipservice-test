import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { times } from "../../pages/Info/constants";
import { Time } from "../../pages/Info/types";
import styles from "./index.module.css";

type TimeButtonProps = {
    time: Time;
    setSelectedTime: Dispatch<SetStateAction<number | undefined>>;
};

const TimeButton = ({ time, setSelectedTime }: TimeButtonProps) => {
    const handleButtonClick = () => {
        setSelectedTime(time.id);
        times.forEach((item) => {
            item.isSelect = false;
            if (item.id === time.id) time.isSelect = true;
        });
    };

    return (
        <button
            onClick={handleButtonClick}
            className={time.isSelect ? classNames(styles.button, styles.active) : styles.button}
        >
            <span>
                <span className={styles.start}>{time.start} - </span>
                {time.finish}
            </span>
        </button>
    );
};

export default TimeButton;
