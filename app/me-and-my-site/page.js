import Link from "next/link";
import styles from "../page.module.css";

export default function AboutSite() {
  return (
    <main className={styles.main}>
      <h1>Me and my site</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <p>
        Hi folks, I&apos;m Mike and this is my site. Welcome! This site is
        primarily for me, but you I&apos;m delighted to imagine you reading it.
        I work in tech, website building in particular, but with a testing
        specialism. Or maybe a risk management specialism is a better way to put
        it, because telling people to stop worrying, stop testing and just ship
        their work often is most valuable thing to do. I&apos;ve made a few
        little apps just for fun over the years but I&apos;m motivated to make
        this one for a couple of new reasons. Firstly, I know someone who wants
        to build a website and they came to me for some advice. I found that as
        much as I know how to make a huge difference to agile teams, I realise I
        don&apos;t really know how to put together a complete website. So I was
        a little embarrased. Yes, my core motivation is embarrassment. The
        second reason is the technology. I&apos;ve been working as a tester with
        Nextjs apps for a couple of years now and it&apos;s so easy to work with
        that I figured the effort to get something up and running would be
        minimal. Also, Nextjs has so many features that I think it would be
        ready and fun to try out some different approaches on different pages.
      </p>
    </main>
  );
}
