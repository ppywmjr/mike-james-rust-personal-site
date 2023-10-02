import React from "react";
import PageHeading from "../../components/page-heading";
import Hero from "../../components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";

export const metadata = {
  title: "Me and my site",
  description:
    "A description of the purpose of the site and why I am building it.",
};

export default function AboutSite() {
  return (
    <div className="max-w-prose mx-auto">
      <PageHeading>Me and my site</PageHeading>
      <Hero
        imageSource={"/profile.jpg"}
        altText={
          "My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile"
        }
        text={"An intro to what this site is all about"}
      />
      <Paragraph>
        Hi folks, I&rsquo;m Mike and this is my site. Welcome! This site is
        primarily for me, but I&rsquo;m delighted to imagine you reading it.
        I&rsquo;ve made a few little apps just for fun over the years but
        I&rsquo;m motivated to make this one for a couple of new reasons.
      </Paragraph>
      <SubHeading level={2}>My motivations</SubHeading>
      <Paragraph>
        Firstly, I know someone who wants to build a website and they came to me
        for some advice. I found that as much as I know how to make a huge
        difference to agile teams, I realised I don&rsquo;t really know how to
        put together a complete website. So I was a little embarrased. Yes, my
        core motivation is embarrassment. The second reason is the technology.
        I&rsquo;ve been working as a tester with Nextjs apps for a couple of
        years now and it&rsquo;s so easy to work with that I figured the effort
        to get something up and running would be minimal. Also, Nextjs has so
        many features that I think it would be really and fun to try out some
        different approaches on different pages.
      </Paragraph>
    </div>
  );
}
