import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Mike James Rust - a QA&apos;s playground</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/me-and-my-site"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Me and my site <span>-&gt;</span>
          </h2>
          <p>TBD</p>
        </Link>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            The making of <span>-&gt;</span>
          </h2>
          <p>A step by step blog of how this site was made.</p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            Quality opics <span>-&gt;</span>
          </h2>
          <p>This is the space to discuss quality assurance.</p>
        </a>
      </div>
    </main>
  );
}
