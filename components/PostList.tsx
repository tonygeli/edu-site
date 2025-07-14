import Link from "next/link";
import styles from "../app/Homepage.module.css";
import { PostMeta } from "../lib/posts";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <div className={styles.card} key={post.slug}>
          <div className={styles.cardHeader}>
            <Link href={`/posts/${post.slug}`} className={styles.titleLink}>
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
            <Link
              href={`/posts?category=${encodeURIComponent(post.category || "")}`}
              className={styles.category}
            >
              {post.category}
            </Link>
          </div>
          <div className={styles.meta}>
            <span>{post.date}</span>
          </div>
          <div className={styles.desc}>
            {post.description || "暂无简介"}
          </div>
          <div>
            <Link href={`/posts/${post.slug}`} className={styles.readmore}>
              阅读全文 &gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}