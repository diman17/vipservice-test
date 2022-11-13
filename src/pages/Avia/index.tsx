import styles from "./index.module.css";

const Avia = () => {
    return (
        <form>
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
                    />
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.label} htmlFor="there">
                        Туда
                    </label>
                    <input className={styles.input} id="there" type="date" />
                </div>
                <div className={styles.inputItem}>
                    <label className={styles.label} htmlFor="back">
                        Обратно
                    </label>
                    <input className={styles.input} id="back" type="date" />
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} type="submit">
                    Найти билеты
                </button>
            </div>
        </form>
    );
};

export default Avia;
