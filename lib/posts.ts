import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  description?: string;
}

export function getAllPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || filename,
        date: data.date || "",
        category: data.category || "未分类",
        description: data.description || "",
      } as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCategories(posts: PostMeta[]) {
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function filterPostsByCategory(posts: PostMeta[], category?: string) {
  if (!category) return posts;
  return posts.filter((p) => p.category === category);
}