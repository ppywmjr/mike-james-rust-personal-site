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
import CodeBlock from "@components/article/code-block";
import TextList from "@components/article/text-list";
import TextListItem from "@components/article/text-list/text-list-item";

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
        altText={"A mischievous red squirrel throws around building blocks"}
        text={"It's my server and I'll change what I want to"}
      />
      <div>
        <Paragraph>
          The first code changes are an exciting moment, but doing it right has
          a lot of steps. And we are going to do it right, so here&rsquo;s what
          we&rsquo;ll do:
        </Paragraph>
        <TextList>
          <TextListItem>Create a local git branch</TextListItem>
          <TextListItem>Run the app in developer mode</TextListItem>
          <TextListItem>Change some code</TextListItem>
          <TextListItem>Check the changes</TextListItem>
          <TextListItem>Commit the code to the local branch</TextListItem>
          <TextListItem>Publish the local branch to GitHub</TextListItem>
          <TextListItem>Create a pull request on GitHub</TextListItem>
          <TextListItem>Merge the pull request</TextListItem>
        </TextList>
        <SubHeading level={2}>Create a branch</SubHeading>
        <Paragraph>
          Git works with branches. Each branch is a history of some code and
          those branches can split off and merge back together. In a
          professional project branches are very important so that different
          people can be working on the same application at the same time. In an
          solo project it&rsquo;s less important, all commits can just be to a
          single main branch. However, let&rsquo;s do this the proper way,
          it&rsquo;ll help in the long run. Open GitHub desktop and you will see
          that it has a tab that says &quot;Current branch: main&quot;. That is
          a drop down menu that if you open, you&rsquo;ll see an option for
          &quot;New branch&quot;. Create a new branch and give it a descriptive
          name. I like to use the format:
          &quot;feature/a-descriptive-name&quot;. The word &quot;feature&quot;
          is there to show that we are adding a new feature as opposed to
          &quot;bug&quot; if we are fixing a bug, or &quot;chore&quot; for
          something boring like updating dependencies.
        </Paragraph>
        <SubHeading level={2}>Editing Next.js 13</SubHeading>
        <Paragraph>
          Now we are working on a feature branch, let&rsquo;s change some things
          and see if we like it. If we do, we can merge it into the main branch
          and Vercel will deploy it to our main url. Before we make any change
          let&rsquo;s run the app in developer mode by opening the VSCode
          terminal and typing <Code>npm run dev</Code> and in your browser, go
          to &quot;localhost:3000&quot; and you&rsquo;ll see the unchanged app.
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
          . I chose a couple of things to change. First, I changed the a{" "}
          <Code>&lt;p&gt;</Code>
          tag&rsquo;s content as per line 9, the highlighted line here:
        </Paragraph>
        <CodeBlock
          code={`export default function Home() {
  return
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Mike James Rust - a QA's playground
        </p>`}
          startingLineNumber={4}
          highlightLines={[9]}
          language="tsx"
        />
        <Paragraph>
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
          altText="VS Code shows an error that the apostrophe needs to be encoded"
          labelText={"VSCode error"}
        />
        <Paragraph>
          So it&rsquo;s not happy with me using an apostrophe{" "}
          <Code>&apos;</Code>
          character, I need to replace it with an encoding. I&rsquo;ve chosen to
          encode it with <Code>&amp;rsquo;</Code>.
        </Paragraph>
        <Paragraph>
          I also decided to change some more text on the cards. I&rsquo;ve
          changed the href&rsquo;s (urls) of the links so that they point to the
          home page. And I&rsquo;ve removed one of the cards so that there are 3
          instead of 4. You can see all these changes on the{" "}
          <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site/pull/1/files">
            GitHub pull request.
          </TextLink>
        </Paragraph>
        <SubHeading level={2}>Fix the css</SubHeading>
        <Paragraph>
          The changes in the page.js file are changes to the content and
          structure of the webpage. But you can see I changed another file, the
          page.module.css. CSS files are Cascading Style Sheets. These files are
          used to determine the styles of a webpage, eg. colours, sizes and
          layouts. This file defines a grid for the cards to be displayed on.
          The grid has 4 columns, one for each card. But now I have only 3 cards
          so I have updated it to be 3 like so:
        </Paragraph>
        <CodeBlock
          code={`.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(25%, auto));
  width: var(--max-width);
  max-width: 100%;
}`}
          startingLineNumber={42}
          highlightLines={[44]}
          language="css"
        />
        <Paragraph>
          In fact, I should have also updated the minmax to be (33%, auto), but
          I missed that at the time. Oh well, bugs happen.
        </Paragraph>
        <SubHeading level={2}>Push the changes</SubHeading>
        <Paragraph>
          Now you have some changes, check them in your browser and make sure
          you are happy with them. There&rsquo;s just a few more steps to
          getting them deployed to you server on the internet. First go to
          GitHub desktop, you&rsquo;ll see that it shows the changes to each
          file. Quickly check through them and make sure you haven&rsquo;t
          included anything by accident. When you are ready, you can
          &quot;commit&quot; the changes. Create a summary description, I went
          with &quot;3 column grid and copy changes&quot;. Then click the
          &quot;Commit to ...&quot; button. And your changes have been committed
          to your local branch. GitHub Desktop will update to show that there
          are no local changes anymore - you haven&rsquo;t lost them it&rsquo;s
          just that they have been committed to the branch. Instead of the
          changes it will show you a &quot;Publish branch&quot; button. Click it
          and this will &quot;push&quot; your changes to GitHub.
        </Paragraph>
        <SubHeading level={2}>Opening a Pull Request</SubHeading>
        <Paragraph>
          Go to your project in GitHub in your browser, for me that would be{" "}
          <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site" />{" "}
          GitHub has detected that you have recently pushed changes and
          you&rsquo;ll see a big green button to create a pull request.
        </Paragraph>
        <Illustration
          imageSource={"/the-making-of/day-4/article/create-pr.jpg"}
          labelText={"GitHub's Compare & pull request button"}
        />
        <Paragraph>
          If you don&rsquo;t do it immediately and the button isn&rsquo;t there,
          you can still go into the &quot;Pull requests&quot; tab and create it
          with the &quot;New pull request&quot; button.
        </Paragraph>
        <Paragraph>
          Add a nice descriptive summary and click the &quot;Create pull
          request&quot; button. GitHub will check that Vercel successfully built
          and deployed the app to a test deployment. It should look something
          like this:
        </Paragraph>
        <Illustration
          imageSource={"/the-making-of/day-4/article/check-passed.jpg"}
          altText={
            "GitHub shows that the checks have passed but the merge is blocked because it hasn't been reviewed"
          }
          labelText={"GitHub merge checks"}
        />
        <Paragraph>
          If you are working in a team, you would want someone else to check
          your work and approve the pull request before merging, but as I am
          working alone, there is no one to approve. So I clicked the checkbox
          to &quot;Merge without waiting for requirements to be met (bypass
          branch protections)&quot;. Then I select &quot;Squash and merge&quot;.
          Now GitHub merges the changes to the main branch and Vercel deploys
          those changes. Amazing! I can now see my changes at the url Vercel
          deploys to, for me that&rsquo;s{" "}
          <TextLink
            target={"https://mike-james-rust-personal-site.vercel.app"}
          />
          . Although, you know what, actually it didn&rsquo;t work out so
          smoothly, in reality I broke the app with the first change!
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
