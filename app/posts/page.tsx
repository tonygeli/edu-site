import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";
import CategoryBar from "../../components/CategoryBar";
import { getAllPosts, getCategories, filterPostsByCategory } from "../../lib/posts";
import styles from "../Homepage.module.css";

export default async function PostsList({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const categories = getCategories(allPosts);
  const currentCategory = params?.category;
  const filteredPosts = filterPostsByCategory(allPosts, currentCategory);

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.heading}>文章归档</h1>
        <CategoryBar categories={categories} currentCategory={currentCategory} />
        <PostList posts={filteredPosts} />
      </main>
      <Footer />
    </>
  );
}