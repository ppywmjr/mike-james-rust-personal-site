import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Mike James Rust - a QA&apos;s playground</p>
        <p>Mike James Rust - a QA&apos;s playground</p>
        <div>
          <Link href="/">
            Mike James Rust{" "}
            <Image
              src="/logo.svg"
              alt="Mike James Rust Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.profilePicture}
          src="/profile.jpg"
          alt="My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
          width={180}
          height={214}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/me-and-my-site"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Me and my site <span>-&gt;</span>
          </h2>
          <p>
            A first page, with a little about who I am and why I&apos;m doing
            this
          </p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            The making of <span>-&gt;</span>
          </h2>
          <p>THIS DOES NOT EXIST YET</p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2>
            Quality topics <span>-&gt;</span>
          </h2>
          <p>THIS DOES NOT EXIST YET</p>
        </a>
      </div>
    </main>
  );
}
