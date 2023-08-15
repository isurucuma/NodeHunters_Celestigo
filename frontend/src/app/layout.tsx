import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CelestiGo | Powered by Intergalactic",
  description:
    "Get ready to launch into a new era of exploration and adventure. Your interstellar journey begins now. Let's explore the cosmos together!",
};

export default function RootLayout(props: any) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <main>
            <Container className={styles.base} maxWidth="xs">
              {children}
            </Container>
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
