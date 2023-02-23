import Link from "next/link";
import styles from "./SidebarLayout.module.css";

export interface ISidebarLayout {}

export default function SidebarLayout({}: ISidebarLayout) {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
