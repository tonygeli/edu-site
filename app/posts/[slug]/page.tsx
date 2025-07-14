import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../Homepage.module.css";
import 'github-markdown-css/github-markdown-light.css';


export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.card} style={{ marginTop: 40 }}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title} style={{ fontSize: "2em" }}>{data.title}</h1>
            <Link
              href={`/posts?category=${encodeURIComponent(data.category || "")}`}
              className={styles.category}
            >
              {data.category}
            </Link>
          </div>
          <div className={styles.meta}>{data.date}</div>
          {data.description && (
            <div className={styles.desc} style={{ marginBottom: 8 }}>
              {data.description}
            </div>
          )}
          <hr style={{ margin: "18px 0" }} />
          <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <div style={{ marginTop: 32 }}>
            <Link href="/posts" className={styles.readmore}>
              &lt; 返回文章列表
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}