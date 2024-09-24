'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function WorldClock() {
  const [datetime, setDatetime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDatetime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const toJSTDateTimeString = () => {
    const dt = datetime;
    return `${dt.getFullYear()}/${dt.getMonth()}/${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
  }

  const toUTCDateTimeString = () => {
    const dt = datetime;
    return `${dt.getUTCFullYear()}/${dt.getUTCMonth()}/${dt.getUTCDate()} ${dt.getUTCHours()}:${dt.getUTCMinutes()}:${dt.getUTCSeconds()}`;
  }

  return (
    <main className={styles.main} suppressHydrationWarning>
      JST: {toJSTDateTimeString()}<br />
      UTC: {toUTCDateTimeString()}
    </main>
  );
}
