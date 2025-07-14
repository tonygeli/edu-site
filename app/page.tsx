import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import PostList from "../components/PostList";
import { getAllPosts } from "../lib/posts";


export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 10);

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.heading}>最新文章</h1>
        <PostList posts={latestPosts} />
      </main>
      <Footer />
    </>
  );
}