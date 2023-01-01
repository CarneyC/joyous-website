import styles from './Bulldozer.module.css'
import Header from "@components/Header";
import Gears from "@components/Gears";

export default function Bulldozer() {
    return (
        <>
            <div className={styles["machine-wrap"]}>
                <div className={styles["machine"]}>
                    <div className={styles["machine-roof"]}>
                        <div className={styles["machine-silencer"]}>
                            <div className={styles["machine-smoke"]}></div>
                        </div>
                    </div>
                    <div className={styles["machine-main"]}>
                        <div className={styles["machine-body"]}></div>
                        <div className={styles["machine-back"]}></div>
                        <div className={styles["machine-front"]}></div>
                    </div>
                </div>
                <br/>
                <h1>Under Construction</h1>
                <Gears/>
                <p className="description">
                    Please forgive the inconvenience.<br/>
                    We are currently initializing our brand new site.<br/><br/>
                    It's okay, we're excited too!
                </p>
            </div>
        </>
    )
}
