import PostCard from "../postCard/PostCard";
import PostRow from "../postRow/PostRow";
import styles from "./PostList.module.css";

export default function PostList({ posts, viewMode }) {
  if (posts.length === 0) {
    return <p className={styles.noPosts}>No posts found</p>;
  }

  if (viewMode === "grid") {
    return (
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
}
