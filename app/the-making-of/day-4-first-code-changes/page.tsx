import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import TextLink from "@components/article/text-link";
import Illustration from "@components/article/illustration";
import Code from "@components/article/code";
import NeighbourNavigation from "@components/article/neighbour-navigation";
import makingOfMetaData from "../makingOfMetadata";
import TsxCodeBlock from "@components/article/tsx-code-block";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

const currentPageIndex = 3;
const previousPage = makingOfMetaData.pages[currentPageIndex - 1];
const nextPage = makingOfMetaData.pages[currentPageIndex + 1];

export default function TheMakingOf() {
  return (
    <>
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
      />
      <PageHeading>Day 4 - First code changes</PageHeading>
      <Hero
        imageSource={"/the-making-of/day-4/build.jpg"}
        altText={"A red squirrel throws around building blocks"}
        text={"It&rsquo;s my server and I&rsquo;ll change what I want"}
      />
      <div>
        <SubHeading level={2}>Create a branch</SubHeading>
        <Paragraph>
          Git works with branches. Each branch is a history of some code and
          those branches can separate an merge back together. In a professional
          project branches are very important so that different people can be
          working on the same application at the same time, in an solo project
          it&rsquo;s less important, all commits can just be to a single main
          branch. However, let&rsquo;s do this the proper way, it&rsquo;ll help
          in the long run. Open GitHub desktop and you will see that it has a
          tab that says Current branch: main. That is a drop down menu that if
          you open, you&rsquo;ll see an option for &quot;New branch&quot;.
          Create a new branch and give it a descriptive name. I like to use the
          format: &quot;feature/a-descriptive-name&quot;. The word
          &quot;feature&quot; is there to show that we are adding a new feature
          as opposed to &quot;bug&quot; if we are fixing a bug, or
          &quot;chore&quot; for something boring like updating dependencies.
        </Paragraph>
        <SubHeading level={2}>Editing Next.js 13</SubHeading>
        <Paragraph>
          Now we are working on a feature branch, let&rsquo;s change some things
          and see if we like it. If we do, we can merge it into the main branch
          and Vercel will deploy it to our main url. Before we make any change
          let&rsquo;s run the app in developer mode by opening the VSCode
          terminal and typing <Code>npm run dev</Code> and in your browser, go
          to &quot;localhost:3000&quot; and you'll see the unchanged app.
        </Paragraph>
        <Paragraph>
          In VSCode, on the left hand side is the Explorer. The explorer shows
          the files and directories in the application. Open the &quot;app&quot;
          directory and you will see a file called &quot;pages.js&quot; this is
          the file that Next uses for the home page. Open the file and you will
          see that it exports a default function called &quot;Home&quot;. Inside
          the &quot;return&quot; statement you&rsquo;ll see what it returns. The
          code in there is called jsx, but basically it looks like the html that
          it will render. I&rsquo;m not going to introduce html, if you&rsquo;re
          unfamiliar, have a look at a few pages from{" "}
          <TextLink target="https://www.w3schools.com/html/html_basic.asp">
            w3schools.com&rsquo;s html tutorial
          </TextLink>
          . I chose a couple of things to change, I changed the first &lt;p&gt;
          tag&rsquo;s content as per line 9, the highlighted line here:
          <TsxCodeBlock
            code={`export default function Home() {
  return
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Mike James Rust - a QA's playground
        </p>`}
            startingLineNumber={4}
            highlightLines={[9]}
          />
          Now look in your browser at your locally running page and you will see
          that it has been updated.
        </Paragraph>
        <Paragraph>
          Back in VSCode, if, like me, you&rsquo;ve included an apostrophe,
          you&rsquo;ll see that VSCode has highlighted it as an error with a
          with a red underline. Never ignore these errors, they really help.
          Hover over it and see what it says:
        </Paragraph>
        <Illustration
          imageSource={"/the-making-of/day-4/article/vscode-error.jpg"}
          labelText={"VSCode error"}
        ></Illustration>
        <Paragraph>
          So it&rsquo;s not happy with me using a &quot; &rsquo; &quot;
          character, I need to replace it with an encoding. I&rsquo;ve chosen to
          encode it with <Code>&amp;rsquo;</Code>.
        </Paragraph>
        <Paragraph>
          I also decided to change some more text on the cards, and the targets
          (href) of the links so that they point to the home page, and remove
          one of the cards so that there are 3 instead of 4. You can see all
          these changes on the
          <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site/pull/1/files">
            GitHub pull request.
          </TextLink>
        </Paragraph>
        <SubHeading level={2}>Fix the css</SubHeading>
        <Paragraph>
          If you look at those changes in the GitHub link, the changes in the
          page.js file are changes to the content and structure of the webpage.
          But you can see I changed another file, the page.module.css. CSS files
          are Cascading Style Sheets. These files are used to determine the
          styles of a webpage, eg. colours, sizes and layouts. This file defines
          a grid for the cards to be displayed on. The grid has 4 columns, one
          for each card. But now I have only 3 cards so I have updated it to be
          3. I should have also updated the minmax to be (33%, auto), but I
          missed that at the time. Oh well, bugs happen.
        </Paragraph>
        <SubHeading level={2}>Push the changes</SubHeading>
        <Paragraph>
          Now you have some changes that you, there's a few more steps to
          getting them deployed to you main server. First go to GitHub desktop,
          you'll see that it shows the changes to each file. Quickly check
          through them and make sure you haven't included anything by accident.
          When you are ready, you can "commit" the changes. Create a summary
          description, I went with "3 column grid and copy changes". Then click
          the "Commit to ..." button. And your changes have been committed to
          your local branch. Next 
        </Paragraph>
        <SubHeading level={2}>open a PR</SubHeading>
        <Paragraph>paragraph</Paragraph>
        <SubHeading level={2}>github actions</SubHeading>
        <Paragraph>paragraph</Paragraph>
        <SubHeading level={2}>merge</SubHeading>
        <Paragraph>paragraph</Paragraph>
      </div>
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
        nextDescription={nextPage?.linkDescription}
      />
    </>
  );
}
