import styles from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className={styles.loader}>
                Загрузка...
            </div>
        </div>
    );
}