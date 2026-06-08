import { profile } from "../../data/profile";
import styles from "./ProfileHeader.module.css";

export default function ProfileHeader() {
  const { username, startDate, stats } = profile;
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.top}>
          <h1 className={styles.username}>{username}</h1>
          <div className={styles.startDate}>
            <p>Start on {startDate}</p>
          </div>
        </div>

        <div className={styles.stats}>
          <div>
            <strong>{stats.posts}</strong> posts
          </div>
          <div>
            <strong>{stats.followers.toLocaleString()}</strong> followers
          </div>
          <div>
            <strong>{stats.following}</strong> following
          </div>
        </div>

        <div>
          <p>Date</p>
        </div>
      </div>
    </header>
  );
}
