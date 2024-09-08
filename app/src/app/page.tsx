import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Aoi-Ryo.com</h1>
      <p className={styles.subTitle}>さいきょうむてきのフルスタックエンジニアに俺はなる！</p>
      <div className={styles.linksContainer}>
        <a href="https://x.com/Aomaru_S" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <Image
            src="/x-icon.png"
            alt="Icon of X"
            width={25}
            height={25}
          />
          <span className={styles.linkText}>Aomaru.S</span>
        </a>
        <a href="https://github.com/Aomaru-S" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <Image
            src="/github-icon.png"
            alt="Icon of GitHub"
            width={25}
            height={25}
          />
          <span className={styles.linkText}>GitHub</span>
        </a>
      </div>
    </main>
  );
}
