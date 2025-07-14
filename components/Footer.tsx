export default function Footer() {
  return (
    <footer style={{
      textAlign: "center", padding: "1rem", background: "#f4f4f4", marginTop: "2rem"
    }}>
      <p>© {new Date().getFullYear()} 初高中教育资料下载网站</p>
    </footer>
  );
}