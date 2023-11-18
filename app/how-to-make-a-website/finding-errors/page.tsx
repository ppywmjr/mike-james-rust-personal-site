import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import NeighbourNavigation from "@components/article/neighbour-navigation";
import makingOfMetaData from "../makingOfMetadata";
import TextList from "@components/article/text-list";
import TextListItem from "@components/article/text-list/text-list-item";
import CodeBlock from "@components/article/code-block";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

const currentPageIndex = 4;
const nextPage = makingOfMetaData.pages[currentPageIndex + 1];
const currentPage = makingOfMetaData.pages[currentPageIndex];
const previousPage = makingOfMetaData.pages[currentPageIndex - 1];

export default function TheMakingOf() {
  return (
    <>
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
      />
      <PageHeading>{`Day ${currentPageIndex + 1} - ${
        currentPage.menuText
      }`}</PageHeading>
      <Hero
        imageSource={currentPage.imageData.source}
        altText={currentPage.imageData.altText}
        text={currentPage.linkDescription}
      />
      <div className="leading-relaxed">
        <Paragraph>
          Things will always go wrong. If you aren&rsquo;t regularly making
          mistakes, then you are doing something that is too easy for you. And
          if you&rsquo;re going to make mistakes, you need
        </Paragraph>
        <TextList>
          <TextListItem>
            A good system for preventing those mistakes from impacting your
            users
          </TextListItem>
          <TextListItem>
            An easy way to find and fix what went wrong
          </TextListItem>
          <TextListItem>Errors highlighted as early as possible</TextListItem>
        </TextList>
        <SubHeading level={2}>What went wrong</SubHeading>
        <Paragraph>
          All I changed was some copy, that is to say, the text. How could that
          possibly go wrong? Well, in the last post I mentioned using an
          apostrophe without encoding it. And then I said how you should never
          ignore VSCode&rsquo;s errors. Well, I ignored VSCode&rsquo;s error and
          I committed the change before fixing. So this error was highlighted as
          soon as it was created, but unfortunately, I wasn&rsquo;t forced to do
          anything about it.
        </Paragraph>
        <SubHeading level={2}>Did it get to production?</SubHeading>
        <Paragraph>
          No! It&rsquo;s actually really cool that I haven&rsquo;t done anything
          special to protect against this, but the default set up means that
          Vercel and GitHub protected me. When I pushed my code changes to the
          branch on GitHub, Vercel found the changes, and tried to build the
          code and deploy it on a branch deployment - more about these in the
          next blog. It checked the code as it was building it to be deployed.
          When it found the error, it told GitHub, which shows on the GitHub
          pull request that one of the checks hasn&rsquo;t passed. So no, we
          can&rsquo;t merge it to the main branch to go to production.
        </Paragraph>
        <SubHeading level={2}>How did I find the error?</SubHeading>
        <Paragraph>
          Opening up the failed check on GitHub and clicking &quot;details&quot;
          there is some logging that you can read around the error that was
          found.
        </Paragraph>
        <CodeBlock
          code={`Failed to compile.
./app/page.js
9:33  Error: '’' can be escaped with '&apos;', '&lsquo;', '&#39;', '&rsquo;'.  react/no-unescaped-entities
info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules`}
          language="log"
        />
        <Paragraph>
          So it has told us that it failed to compile the code, which means turn
          it from human readable code to computer readable code. Then it has
          told us the file that the error came from. It even tells us that it is
          line 9, the 33rd character in. Then it tells us what the error is and
          ways to fix it. Then it tells us where we can look to learn about this
          error. This is so much help in identifying and fixing errors.
        </Paragraph>
        <SubHeading level={2}>Was this all just a waste of time?</SubHeading>
        <Paragraph>
          The rule is protecting me as a developer, it&rsquo;s a sensible but
          annoying rule. Characters like &rsquo; are the kind of characters that
          are used to define code so React looks out to see if you&rsquo;ve used
          them somewhere that it&rsquo;s going to display to the user, and this
          error is its way of getting you to check that you really wanted that
          or you made a mistake and accidentally leaked some of you code onto
          the display that your users see.
        </Paragraph>
        <Paragraph>
          However, Writing html encoding is super annoying. It&rsquo;s so much
          slower. It either interrupts your writing flow or you have to tidy up
          after writing everything. Having had to do it for a few articles now,
          I&rsquo;m so bored of it. But in an application where you want a lot
          of text, it&rsquo;s probably best not to type all the copy, i.e. text,
          into the code. Large blog applications will usually use a content
          management system (CMS) where the copy is stored in a database.
          Because it&rsquo;s not actually in the code, there&rsquo;s no risk
          that it was a typo in the code and the React linting won&rsquo;t
          complain about it.
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
