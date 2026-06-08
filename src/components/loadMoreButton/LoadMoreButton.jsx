import styles from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
