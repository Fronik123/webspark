import styles from "./PostRow.module.css";

import likeIcon from "../../../assets/heart.svg";
import commentIcon from "../../../assets/comment.svg";

export default function PostRow({ post }) {
  return (
    <article className={styles.row}>
      <img src={post.imageUrl} alt="" className={styles.thumb} />

      <div className={styles.wrapperContent}>
        <div className={styles.wrapperMetrics}>
          <p>Today</p>

          <div className={styles.mainMetric}>
            <div className={styles.metric}>
              <img src={likeIcon} alt="like" /> {post.today.likes}
            </div>

            <div className={styles.metric}>
              <img src={commentIcon} alt="like" /> {post.today.comments}
            </div>
          </div>
        </div>

        <div>
          <p>{post.snapshot.date}</p>

          <div className={styles.mainMetric}>
            <div className={styles.metric}>
              <img src={likeIcon} alt="like" /> {post.today.likes}
            </div>

            <div className={styles.metric}>
              <img src={commentIcon} alt="like" /> {post.today.comments}
            </div>
          </div>
        </div>

        <div className={styles.upload}>
          <p>Image upload</p>

          <p>{post.uploadDate}</p>
        </div>
      </div>
    </article>
  );
}
