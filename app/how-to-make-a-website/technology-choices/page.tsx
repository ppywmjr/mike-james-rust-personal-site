import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import TextList from "@components/article/text-list";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import TextListItem from "@components/article/text-list/text-list-item";
import TextLink from "@components/article/text-link";
import NeighbourNavigation from "@components/article/neighbour-navigation";
import makingOfMetaData from "../makingOfMetadata";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

const currentPageIndex = 0;
const nextPage = makingOfMetaData.pages[currentPageIndex + 1];
const previousPage = makingOfMetaData.pages[currentPageIndex - 1];

export default function TheMakingOf() {
  return (
    <>
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
      />
      <PageHeading>Day 1 - Choices</PageHeading>
      <Hero
        imageSource={"/how-to-make-a-website/day-1/choices.jpg"}
        altText={"Old style computer monitors showing code."}
        text={"Where to start in a world of development possibilities"}
      />
      <div className="leading-relaxed">
        <Paragraph>
          I am making a website (this one you are reading, in fact) totally from
          scratch. This part of the site is a blog of how I am doing it, and in
          that way it is partly for me. But it will also serve as a tutorial to
          allow you to do the same, and more importantly understand the
          reasoning along the way. That way maybe anyone can make something
          personal to themself, I mean, yourself. Yes you!
        </Paragraph>
        <Paragraph>
          Sitting down to develop a website from scratch there are so many
          options and each choice will have a long lasting impact on how the
          whole project goes. Navigating the options can be a nightmare but I
          can help with some sensible choices for getting started. Even though I
          am not a developer, I am a Tester/Quality Assurance engineer and I get
          to watch developers&rsquo; making mistakes every day - don&rsquo;t
          tell them I said that. Sometimes they make good choices too.
          Don&rsquo;t tell them I admitted that either.
        </Paragraph>
        <Paragraph>TL/DR Here&rsquo;s what I&rsquo;m going with:</Paragraph>
        <TextList>
          <TextListItem>Computer - Low end specs Windows PC</TextListItem>
          <TextListItem>
            IDE -{" "}
            <TextLink target="https://code.visualstudio.com/">VSCode</TextLink>
          </TextListItem>
          <TextListItem>
            Framework - <TextLink target="https://nextjs.org/">Nextjs</TextLink>
          </TextListItem>
          <TextListItem>
            Hosting - <TextLink target="https://vercel.com/">Vercel</TextLink>
          </TextListItem>
          <TextListItem>
            Source control -{" "}
            <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site">
              Github
            </TextLink>
          </TextListItem>
        </TextList>
        <SubHeading level={2}>Computer</SubHeading>
        <Paragraph>
          I own what I own and I&rsquo;ve got no plans to upgrade. It was bought
          in 2016 for around £400 so it is more than a little out of date but I
          know it will be fine. If nothing else, I&rsquo;m going to prove that a
          high end computer is not a barrier to entry for developing a quality
          website. If you have a Mac or use Linux, then you can still follow
          along as everything I am using is very well supported.
        </Paragraph>
        <SubHeading level={2}>IDE</SubHeading>
        <Paragraph>
          An IDE, or integrated development environment, is the software that
          you use to write code. It helps with all sorts of things like
          highlighting code errors and making autocomplete suggestions.
          I&rsquo;m going to use VSCode, Visual Studio Code, because it&rsquo;s
          incredibly popular for JavaScript development. And it&rsquo;s built by
          Microsoft, so the Windows docs are good. Oh and it&rsquo;s free.
        </Paragraph>
        <SubHeading level={2}>Framework</SubHeading>
        <Paragraph>
          I&rsquo;m super excited about Next.js, it has a tonne of features that
          will make it easy to develop a quick, modern website. In computer
          programming, a framework is a whole lot of code that you import into
          to yours so that you don&rsquo;t have to reinvent the wheel. It takes
          care of the boring, and often complex stuff so that you can focus on
          the things that make your application unique. Some highlights of
          Next.js for me are that it can generate static html pages from your
          javascript, so they load much faster and don&rsquo;t require lots of
          computing power from your users. And the Link component, which
          preloads the content of linked pages so that it is fast to navigate
          around the site. It has so many other things that I hope to discover.
        </Paragraph>
        <SubHeading level={2}>Hosting</SubHeading>
        <Paragraph>
          I think the first couple of posts are going to feel like adverts for
          Vercel and GitHub, but honestly it&rsquo;s just genuine enthusiasm.
          I&rsquo;ve experimented with other webapps in the past and sorting out
          hosting and infrastructure is a maze of confusion. I am amazed by how
          much easier it has got. I was expecting to deal with something like
          Amazon Web Services, choose resources, and worry about accidentally
          using expensive services - no dis for AWS, it has other strengths. But
          I looked at Vercel basically because they own Next.js. Everything to
          get a web app up and hosted was free and straightforward, as
          you&rsquo;ll see in the next post.
        </Paragraph>
        <SubHeading level={2}>Source control</SubHeading>
        <Paragraph>
          GitHub, owned by Microsoft, is the best known place to store all the
          code. For many things it&rsquo;s free, and above all Vercel made it
          super easy to link to a GitHub account. GitHub is a place for storing
          git repositories. Git, itself, is a history of your code changes, that
          allows you to work on new changes and merge them together when you are
          confident they are what you want. Git really is a wonderful tool and
          one that virtually all developers use, regardless of which coding
          language they prefer.
        </Paragraph>
      </div>
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
        nextDescription={nextPage?.linkDescription}
      />
    </>
  );
}
