import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import NeighbourNavigation from "@components/article/neighbour-navigation";
import makingOfMetaData from "../makingOfMetadata";
import TextLink from "@components/article/text-link";
import Illustration from "@components/article/illustration";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

const currentPageIndex = 5;
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
          Nextjs versions 13 and above have a simple systems for adding new
          pages. Nextjs uses directories/folders to determine what to do with
          different files. In the first changes I did, I changed the “page.js”
          file in the app directory. For Nextjs 13 that is the home page file.
          If you want another page with another url, you make a directory inside
          the app directory with a file named page.js in it. Nextjs magically
          makes that page available under a path with the name of the directory.
          So I made a new page for /me-and-my-site.
        </Paragraph>
        <Paragraph>
          You can see the code changes on{" "}
          <TextLink
            target={
              "https://github.com/ppywmjr/mike-james-rust-personal-site/pull/2/files"
            }
          >
            the GitHub pull request page.
          </TextLink>{" "}
          The green changes are added code, the red changes are deleted code. It
          is well worth taking a few minutes to look at a pull request, they
          tell you what changes in code are needed to change an application.
          And, if the app is being developed well, each pull request is just for
          a small change so it&rsquo;s not too hard to read.
        </Paragraph>
        <Paragraph>And here&rsquo;s what it looks like:</Paragraph>
        <Illustration
          imageSource={"/how-to-make-a-website/day-6/article/text-site.png"}
          labelText={"A basic new web page with a header, a link and some text"}
        />
        <SubHeading level={2}>
          A terrible website with one exciting feature
        </SubHeading>
        <Paragraph>
          Visually, it has basically no styling, so it looks terrible. But
          forgetting that for a moment, it has a title in an &lt;h1&gt; tag and
          some text in a &lt;p&gt; tag. There is also a sub-heading that says
          &quot;Back to home&quot;. This tiny little thing makes me stupidly
          excited. It uses a feature of Nextjs called a Link component. When a
          Nextjs Link component is used to link to a page on the same site, then
          the content of that linked page is fetched in the background ready to
          be navigated to as soon as the user clicks the link. The result is
          that a user can go from one page to the other in such a smooth and
          fast load as the browser does not need to make a call to the internet
          after they have click the button.
        </Paragraph>
        <SubHeading level={2}>The most basic styling</SubHeading>
        <Paragraph>
          Finally, I needed to do something about the styling. Styles are
          complicated, and I&rsquo;ll need to make some decisions about how
          I&rsquo;m going to approach it later. For now, I decided to basically
          copy and paste what is currently being done for the home page. So
          I&rsquo;ve added the class &rsquo;main&rsquo; to the &lt;main&gt; tag
          and then copied the card stylings for &lt;p&gt; and &lt;h2&gt; tags
          and slightly adjusted one for &lt;h1&gt; tags. It no longer looks like
          the worst website ever, although it doesn&rsquo;t look good either.
          One for a future day methinks. Next I&rsquo;m gonna look at images.
        </Paragraph>
        <Illustration
          imageSource={
            "/how-to-make-a-website/day-6/article/text-site-with-styles.png"
          }
          labelText={
            "A basic web page with a some styling to center elements and some padding."
          }
        />
      </div>
      <NeighbourNavigation
        previousTarget={previousPage?.uri}
        nextTarget={nextPage?.uri}
        nextDescription={nextPage?.linkDescription}
      />
    </>
  );
}
