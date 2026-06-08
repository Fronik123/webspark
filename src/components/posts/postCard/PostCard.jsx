import styles from "./PostCard.module.css";
import likeIcon from "../../../assets/heart.svg";
import commentIcon from "../../../assets/comment.svg";

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <img src={post.imageUrl} alt="" className={styles.image} />

      <div className={styles.wrapperMetrics}>
        <div>
          <p>Today</p>
          <div className={styles.metric}>
            <img src={likeIcon} alt="like" />
            {post.today.likes}
          </div>
          <div className={styles.metric}>
            <img src={commentIcon} alt="comment" /> {post.today.comments}
          </div>
        </div>

        <div>
          <p>{post.snapshot.date}</p>

          <div className={styles.metric}>
            <img src={likeIcon} alt="like" /> {post.snapshot.likes}
          </div>
          <div className={styles.metric}>
            <img src={commentIcon} alt="comment" />
            {post.snapshot.comments}
          </div>
        </div>
      </div>

      <div className={styles.upload}>
        <p>Image upload</p>
        <p>{post.uploadDate}</p>
      </div>
    </article>
  );
}
