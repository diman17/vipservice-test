import classNames from "classnames";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { setStateBack, setStateFrom, setStateThere, setStateTo } from "../../store/slice";
import styles from "./index.module.css";

const Avia = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [there, setThere] = useState("");
    const [back, setBack] = useState("");

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (from && to && there) {
            dispatch(setStateFrom(from));
            dispatch(setStateTo(to));
            dispatch(setStateThere(there));
            dispatch(setStateBack(back));

            navigate("/avia/info");
        }
    };

    const validateTextInput = (value: string, cb: Dispatch<SetStateAction<string>>) => {
        if (/^[а-я\s]+$/i.test(value) || value === "") cb(value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={styles.inputWrapper}>
                <div className={styles.inputItem}>
                    <label className={styles.label} htmlFor="from">
                        Откуда
                    </label>
                    <input
                        className={styles.input}
                        id="from"
                        type="text"
                        placeholder="Город вылета"
                        value={from}
                        onChange={({ target: { value } }) => validateTextInput(value, setFrom)}
                        autoFocus
                        autoComplete="off"
                    />
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.label} htmlFor="to">
                        Куда
                    </label>
                    <input
                        className={styles.input}
                        id="to"
                        type="text"
                        placeholder="Город прилёта"
                        value={to}
                        onChange={({ target: { value } }) => validateTextInput(value, setTo)}
                        autoComplete="off"
                    />
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.label} htmlFor="there">
                        Туда
                    </label>
                    <input
                        className={there ? classNames(styles.input, styles.active) : styles.input}
                        id="there"
                        type="date"
                        value={there}
                        onChange={({ target: { value } }) => setThere(value)}
                    />
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.label} htmlFor="back">
                        Обратно
                    </label>
                    <input
                        className={back ? classNames(styles.input, styles.active) : styles.input}
                        id="back"
                        type="date"
                        value={back}
                        onChange={({ target: { value } }) => setBack(value)}
                    />
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button
                    className={styles.button}
                    type="submit"
                    disabled={from && to && there ? false : true}
                >
                    Найти билеты
                </button>
            </div>
        </form>
    );
};

export default Avia;
