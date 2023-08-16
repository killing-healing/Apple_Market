"use client";
import styles from "./page.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { browserTest } from "@/mocks/browserTest";
import { worker } from "@/mocks/browser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    worker.start();
    browserTest();
  }, []);
  return (
    <main className={styles.main}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </main>
  );
}
