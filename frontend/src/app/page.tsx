"use client";
import { useState, useEffect } from "react";
import AppName from "@/components/atoms/AppName/AppName";
import styles from "./page.module.css";
import Logo from "@/components/atoms/Logo/Logo";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();
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
  }, [redirect]);

  const handleClick = () => {
    setRedirect(true);
  };

  return (
    <div className={styles.splash} onClick={handleClick}>
      <div>
        <Logo />
        <AppName />
      </div>
    </div>
  );
}
