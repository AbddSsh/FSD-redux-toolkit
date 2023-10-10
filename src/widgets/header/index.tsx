import styles from "./styles.module.css";

export const Header = ({ image }: any) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__imgwrapper}>
        <img src={image} alt="logo" className={styles.header__imgwrapper} />
      </div>
    </div>
  );
};
