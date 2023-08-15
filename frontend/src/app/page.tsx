import AppName from "@/components/atoms/AppName/AppName";
import styles from "./page.module.css";
import Logo from "@/components/atoms/Logo/Logo";

export default function Splash() {
  return (
    <div className={styles.splash}>
      <div>
        <Logo />
        <AppName />
      </div>
    </div>
  );
}
