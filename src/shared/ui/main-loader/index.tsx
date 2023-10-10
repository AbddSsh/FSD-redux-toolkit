import styles from "./styles.module.css";

export const MainLoader = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.pan_loader}>
        <div className={styles.loader}></div>
        <div className={styles.pan_container}>
          <div className={styles.pan}></div>
          <div className={styles.handle}></div>
        </div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};
