"use client";
import { useState, useEffect } from "react";
import AppName from "@/components/atoms/AppName/AppName";
import styles from "./page.module.css";
import Logo from "@/components/atoms/Logo/Logo";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router: any = useRouter();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (redirect) {
      router.push("/welcome");
    }
  }, [redirect, router]);

  const handleClick = () => {
    setRedirect(true);
  };

  return (
    <div className={styles.splashContainer} onClick={handleClick}>
      <div className={styles.splashContent}>
        <Logo />
        <AppName />
      </div>
    </div>
  );
}
