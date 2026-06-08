import styles from "./ViewToggle.module.css";

export default function ViewToggle({ viewMode, onChange }) {
  return (
    <div className={styles.toggle} role="group" aria-label="View mode">
      <button
        type="button"
        className={`${styles.btn} ${viewMode === "grid" ? styles.active : ""}`}
        onClick={() => onChange("grid")}
        aria-pressed={viewMode === "grid"}
        aria-label="Grid view"
      >
        <span className={styles.iconGrid} aria-hidden="true" />
      </button>

      <button
        type="button"
        className={`${styles.btn} ${viewMode === "list" ? styles.active : ""}`}
        onClick={() => onChange("list")}
        aria-pressed={viewMode === "list"}
        aria-label="List view"
      >
        <span className={styles.iconList} aria-hidden="true" />
      </button>
    </div>
  );
}
