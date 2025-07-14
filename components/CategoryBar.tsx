import Link from "next/link";
import styles from "../app/Homepage.module.css";

export default function CategoryBar({
  categories,
  currentCategory,
}: {
  categories: string[];
  currentCategory?: string;
}) {
  return (
    <div className={styles.categoriesBar}>
      <Link
        href="/posts"
        className={!currentCategory ? styles.categorySelected : styles.category}
      >
        全部
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`/posts?category=${encodeURIComponent(cat)}`}
          className={
            currentCategory === cat
              ? styles.categorySelected
              : styles.category
          }
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}