"use client";

import Link from "next/link";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { HomeOutlined, DownloadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import styles from "./Navbar.module.css";

const items: MenuProps["items"] = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link href="/">首页</Link>,
  },
  {
    key: "downloads",
    icon: <DownloadOutlined />,
    label: <Link href="/downloads">下载中心</Link>,
  },
  {
    key: "about",
    icon: <InfoCircleOutlined />,
    label: <Link href="/about">关于</Link>,
  },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Menu
        mode="horizontal"
        theme="dark"
        selectable={false}
        items={items}
        className={styles.menu}
      />
    </nav>
  );
}