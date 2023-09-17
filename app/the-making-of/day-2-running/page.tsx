import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import TextLink from "@components/article/text-link";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

export default function AboutSite() {
  return (
    <div className="max-w-prose">
      <PageHeading>Day 2 - Up and running</PageHeading>
      <Hero
        imageSource={"/the-making-of/day-2/running.jpg"}
        altText={""}
        text={
          "Only a few clicks to make a website and server running in the cloud"
        }
      />
      <div>
        <SubHeading level={2}>GitHub</SubHeading>
        <Paragraph>
          GitHub is where I am storing the code and, more importantly, its
          history. You can see all of the code I&rsquo;ve committed to date on
          my account with the catchy account name of{" "}
          <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site">
            ppywmjr
          </TextLink>
          . If you want to do the same, you can go to{" "}
          <TextLink target="https://github.com/">GitHub</TextLink> to sign up.
          For everything I&rsquo;m doing, it&rsquo;s totally free.
        </Paragraph>
        <SubHeading level={2}>Vercel</SubHeading>
        <Paragraph>
          Signing up for{" "}
          <TextLink target="https://vercel.com/signup">Vercel</TextLink> is also
          free for a hobby account. To copy what I did, sign up using your new
          GitHub account and give Vercel the permissions it asks for. Then it
          will give you the option to clone a template. Choose Next.js. It will
          probably ask you for more permissions, and then it will give you the
          option to choose a repository name, I went for
          &quot;mike-james-rust-personal-site&quot;, and then there is a button
          to create it. Then you can sit back and watch as it creates the
          repository, builds the template app, and deploys it so a webserver.
          Follow the links to the dashboard and you will see the url of the
          website you have created. Awesome.
        </Paragraph>
        <SubHeading level={2}>So what?</SubHeading>
        <Paragraph>
          Maybe you&rsquo;ve made a website on something like Wix or WordPress
          before. On those website building platforms you can create a site in
          only a few clicks, so this seems quite similar, right? But
          fundamentally it is totally different thing. This way you are in
          control. For instance, if you try to add a PayPal button on a website
          building platform, they might charge you for it, or remove the html
          you&rsquo;ve tried to sneak past their system. But if you take the
          approach we had done, all of the code to make the server is defined in
          the GitHub repository so you can change any of the code and define it
          in any way you wish. You really are in control.
        </Paragraph>
      </div>
    </div>
  );
}
