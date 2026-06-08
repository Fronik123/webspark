import { profile } from "../../data/profile";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";
import styles from "./ProfileHeader.module.css";
import background from "../../assets/background.png";
import logo from "../../assets/logo.png";

export default function ProfileHeader({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}) {
  const { username, startDate, stats } = profile;
  return (
    <header className={styles.header}>
      <img
        src={background}
        alt=""
        className={styles.background}
        aria-hidden="true"
      />

      <img src={logo} alt="" className={styles.logo} aria-hidden="true" />

      <div className={styles.headerContent}>
        <div className={styles.top}>
          <h1 className={styles.username}>{username}</h1>

          <p className={styles.startDate}>Start on {startDate}</p>
        </div>

        <div className={styles.stats}>
          <p>
            <strong>{stats.posts}</strong> posts
          </p>
          <p>
            <strong>{stats.followers.toLocaleString()}</strong> followers
          </p>
          <p>
            <strong>{stats.following}</strong> following
          </p>
        </div>

        <DateRangeFilter
          dateFrom={dateFrom}
          dateTo={dateTo}
          onDateFromChange={onDateFromChange}
          onDateToChange={onDateToChange}
        />
      </div>
    </header>
  );
}
