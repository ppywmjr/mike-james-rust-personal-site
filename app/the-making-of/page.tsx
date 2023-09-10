import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import TextList from "@components/article/text-list";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import TextListItem from "@components/article/text-list/text-list-item";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

export default function AboutSite() {
  return (
    <div className="max-w-prose">
      <PageHeading>Day 1 - Choices</PageHeading>
      <Hero
        imageSource={"/the-making-of/choices.png"}
        altText={"Old style computer monitors showing code."}
        text={"Where to start in a world of development possibilities"}
      />
      <div className="leading-relaxed">
        <Paragraph>
          Sitting down to develop a website from scratch there are so many
          options and each choice will have a long lasting impact on how the
          whole project goes. Fortunately for me, some of those choices are
          easier than others
        </Paragraph>
        <Paragraph>TL/DR Here&rsquo;s what I&rsquo;m going with:</Paragraph>
        <TextList>
          <TextListItem>Computer - Low end specs Windows PC</TextListItem>
          <TextListItem>IDE - VSCode</TextListItem>
          <TextListItem>Framework - Nextjs</TextListItem>
          <TextListItem>Hosting - Vercel</TextListItem>
          <TextListItem>Source control - Github</TextListItem>
        </TextList>
        <SubHeading level={2}>Computer</SubHeading>
        <Paragraph>
          I own what I own and I&rsquo;ve got no plans to upgrade. In my day job
          I use a high end macbook pro so this might be a little strange, but
          this will just prove that a high end computer is not a barrier to
          entry.
        </Paragraph>
        <SubHeading level={2}>IDE</SubHeading>
        <Paragraph>
          VSCode, because it&rsquo;s incredibly popular for JavaScript
          development. And it&rsquo;s built by Windows, so the Windows docs are
          good. Oh and it&rsquo;s free.
        </Paragraph>
        <SubHeading level={2}>Framework</SubHeading>
        <Paragraph>
          I own what I own and I&rsquo;ve got no plans to upgrade. In my day job
          I use a high end macbook pro so this might be a little strange, but
          this will just prove that a high end computer is not a barrier to
          entry
        </Paragraph>
        <SubHeading level={2}>Hosting</SubHeading>
        <Paragraph>
          I think the first couple of posts are going to feel like adverts for
          Vercel and GitHub, but honestly it&rsquo;s just genuine enthusiasm.
          I&rsquo;ve experimented with other webapps in the past and sorting out
          hosting and infrastructure is a maze of confusion. I was amazed by how
          much easier it has got. I was expecting to deal with something like
          Amazon Web Services, choose resources, and worry about accidentally
          using paid for services - no diss for AWS, it has other strengths. But
          I looked at Vercel basically because they own Nextjs and that&rsquo;s
          the framework I&rsquo;ve chosen. Everything to get a web app up and
          hosted was free and straightforward. I connected to GitHub, where
          I&rsquo;d planned to store the code, then choose the default Nextjs
          app as a starter template and within a few clicks I had an app that
          was running on the web.
        </Paragraph>
        <SubHeading level={2}>Source control</SubHeading>
        <Paragraph>
          GitHub is the best know place to store all the code, for many things
          it&rsquo;s free, and above all Vercel made it super easy to link to a
          GitHub account
        </Paragraph>
      </div>
    </div>
  );
}
