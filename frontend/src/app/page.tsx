import styles from "./page.module.css";
import BasicCard from "@/components/BasicCard";

export default function Home() {
  return (
    <main className={styles.main}>
      Sample Page
      <BasicCard />
    </main>
  );
}
