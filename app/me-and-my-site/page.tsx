import React from "react";
import Image from "next/image";
import PageHeading from "../../components/page-heading";

export default function AboutSite() {
  return (
    <div>
      <PageHeading text="Me and my site" />
      <div className="flex flex-row flex-wrap">
        <div className="basis-24 md:basis-32 shrink-0 mr-6 mb-6">
          <Image
            className="rounded-lg"
            src="/profile.jpg"
            alt="My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
            width={120}
            height={143}
            priority
          />
        </div>
        <p className="basis-40 shrink-0 mb-6 text-xl italic">
          An intro to what this site is all about
        </p>
      </div>
      <p className="max-w-prose leading-loose">
        Hi folks, I&apos;m Mike and this is my site. Welcome! This site is
        primarily for me, but I&apos;m delighted to imagine you reading it.
        I&apos;ve made a few little apps just for fun over the years but
        I&apos;m motivated to make this one for a couple of new reasons.
        Firstly, I know someone who wants to build a website and they came to me
        for some advice. I found that as much as I know how to make a huge
        difference to agile teams, I realised I don&apos;t really know how to
        put together a complete website. So I was a little embarrased. Yes, my
        core motivation is embarrassment. The second reason is the technology.
        I&apos;ve been working as a tester with Nextjs apps for a couple of
        years now and it&apos;s so easy to work with that I figured the effort
        to get something up and running would be minimal. Also, Nextjs has so
        many features that I think it would be really and fun to try out some
        different approaches on different pages.
      </p>
    </div>
  );
}
