import React from "react";
import PageHeading from "../../components/page-heading";
import Hero from "../../components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import TextLink from "@components/article/text-link";

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
        socialMediaLinks="linkedin"
      />
      <Paragraph>
        Hi folks, I&rsquo;m Mike and this is my site. Welcome! I am Senior
        Quality Assurance engineer. That is a job title that no-one ever
        understands. If you have heard of that role before then, you probably
        have the wrong idea of what I do. Let me explain.
      </Paragraph>
      <SubHeading level={2}>What is Quality Assurance?</SubHeading>
      <Paragraph>
        A long time ago, this role meant &quot;tester&quot;. But software has
        become more and more complicated and the release cycle so rapid that it
        has became really important to automate testing. So a new role was
        created called, &quot;Software Development Engineer in Test&quot;.
        People like the title, it sounds cool. But it&rsquo;s not. People doing
        that role write automated test scripts and basically focus on writing
        code to test other code. Unfortunately, focus on writing test code tends
        to have a detrimental effect on thinking about the role of testing.
        That&rsquo;s where modern Quality Assurance comes in. Instead of
        focusing on writing speciliased test code, I focus on the big picture. I
        make sure I understand the architecture that is being used to run
        software applications, to test applications, and to deploy applications.
        I understand the code, and it&rsquo;s strengths and weaknesses. I
        consider what might go wrong in all these palces and I plan, advise,
        coach and code to reduce risk in the short and long term. Done well,
        it&rsquo;s an incredibly complex role. Done poorly, it&rsquo;s boring
        and ineffective. I love it.
      </Paragraph>
      <SubHeading level={2}>My motivations for this site</SubHeading>
      <Paragraph>
        I am used to working on the large enterprise scale, but, like most
        engineers, I also have the urge to create. So this site will serve as a
        place to do that; to experiment and document that process. I&rsquo;m
        currently excited to try out what Nextjs and Vercel can do.
      </Paragraph>
      <Paragraph>
        All the code for this site can be found on my{" "}
        <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site">
          Github
        </TextLink>{" "}
        account.
      </Paragraph>
    </div>
  );
}
