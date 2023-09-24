import React from "react";
import PageHeading from "@components/page-heading";
import Hero from "@components/hero";
import Paragraph from "@components/article/paragraph";
import SubHeading from "@components/article/sub-heading";
import TextLink from "@components/article/text-link";
import Illustration from "@components/article/illustration";
import Code from "@components/article/code";
import NeighbourNavigation from "@components/article/neighbour-navigation";

export const metadata = {
  title: "The making of",
  description: "How this site was developed.",
};

export default function AboutSite() {
  return (
    <>
      <NeighbourNavigation previousTarget={"/the-making-of/day-2-running"} />
      <PageHeading>Day 3 - A website on my computer</PageHeading>
      <Hero
        imageSource={"/the-making-of/day-3/superhero.jpg"}
        altText={"A red squirrel poses like a superhero"}
        text={"With great power comes great responsibility"}
      />
      <div>
        <SubHeading level={2}>Getting the code</SubHeading>
        <Paragraph>
          Currently the code lives in a repository on GitHub, but really I want
          to edit it on my own computer. To do this, I need to &quot;clone&quot;
          the repository to my local computer. This is how git works and many
          developers use commands to manage all this on the terminal. But I
          think it is much easier to use{" "}
          <TextLink target="https://desktop.github.com/">
            GitHub&rsquo;s desktop application
          </TextLink>{" "}
          which takes care of managing the repository as well as logging you in
          for permissions.
        </Paragraph>
        <Paragraph>
          Once you have installed GitHub Desktop and logged into it, you will
          get the option to clone a repository. Either one from your account, or
          you can chose clone from URL to clone mine from{" "}
          <TextLink target="https://github.com/ppywmjr/mike-james-rust-personal-site.git">
            https://github.com/ppywmjr/mike-james-rust-personal-site.git
          </TextLink>
          . Choose a location to save it, the default is probably fine, and
          click clone.
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/clone-a-repository.jpg"
          labelText="Github Desktop&rsquo;s clone dialogue."
          isPortraitOrientation={true}
        />
        <SubHeading level={2}>Installing VSCode</SubHeading>
        <Paragraph>
          The code is now on your computer, but you need some way to see it,
          edit it and run it. Download and install{" "}
          <TextLink target="https://code.visualstudio.com/">VSCode</TextLink>.{" "}
          Then choose open folder and select the folder in which you cloned the
          repository. You now have an IDE where you will do virtually all of
          your development.
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/vscode.jpg"
          labelText="VSCode integrated development environment welcome screen."
        />
        <SubHeading level={2}>Node.js</SubHeading>
        <Paragraph>
          The javascript code needs something to execute it, on a website it is
          run by the browser, such as Chrome. On the server the most common
          approach is to use Node.js. You could install Node directly onto your
          computer but I have found that this approach will eventually end up
          causing pains. It is much better to install a version manager and use
          that to install Node. For Windows, I&rsquo;m using nvm-windows, which
          stands for Node Version Manager Windows. Download the latest
          nvm-setup.zip file from{" "}
          <TextLink target="https://github.com/coreybutler/nvm-windows/releases">
            NVM&rsquo;s GitHub releases page
          </TextLink>
          . Then unzip and follow the install instructions.
        </Paragraph>
        <Paragraph>
          At time of writing, some nvm commands on windows require administrator
          privileges so to install Node open the Windows PowerShell terminal as
          an administrator by typing PowerShell in the Windows search bar and
          selecting &quot;Run as administrator&quot;.
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/powershell-as-admin.jpg"
          labelText="Searching for PowerShell in Windows search bar to run as administrator."
        />
        <Paragraph>
          In the PowerShell terminal type <Code>nvm ls</Code> and press enter.
          This runs nvm&rsquo;s list command to list all the versions of Node.js
          that nvm has installed, which should currently be none. So now install
          Node 18 by typing <Code>nvm install 18</Code>. This will install the
          latest stable version of Node 18. Now if you type <Code>nvm ls</Code>{" "}
          again it should show you what version of Node 18 it has installed. For
          me it is 18.18.0 To use this type nvm use followed by the full
          version, eg. <Code>nvm use 18.18.0</Code>
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/powershell.jpg"
          labelText="PowerShell terminal to install and use Node."
        />
        <Paragraph>
          In most circumstances it is safer to not use admin privileges in the
          terminal, so now that node is set up, it&rsquo;s best to move over to
          VSCode&rsquo;s built in terminal. And open a terminal by selecting the
          VSCode&rsquo;s Terminal menu and clicking &quot;New Terminal&quot;.
          This will open a PowerShell terminal at the bottom of VSCode without
          administrator privileges. Type <Code>node -v</Code> to confirm the
          version of Node that is running.
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/vscode-terminal.jpg"
          labelText="VSCode integrated development environment welcome screen."
        />
        <SubHeading level={2}>Installing Node packages</SubHeading>
        <Paragraph>
          So close now. The only other thing we need are the Node packages. A
          core part of Node is that it uses packages, which are small (and
          sometimes not so small) bundles of code that are designed to do
          specialised jobs. In VSCode Explorer, if you open the package.json
          file you will see a list of &quot;dependencies&quot; that are the
          packages that are needed to run this application. Each of which will
          also depend on other packages. The whole long list of all packages
          needed can be seen in the package-lock.json file. If you open that,
          you&rsquo;ll see it&rsquo;s over 3000 lines long, so there&rsquo;s a
          lot of code that we need to get in order to run the app. Fortunately
          Node comes with a package manager called npm, or Node Package Manager,
          inventive name I know. In the terminal type <Code>npm ci</Code> and
          watch npm install all of the packages that are needed. You should see
          in the VSCode explorer that a new folder has been generated called
          node_modules.
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/npm-run-dev.jpg"
          labelText="Running npm run dev in the VSCode terminal."
        />
        <SubHeading level={2}>Running the app</SubHeading>
        <Paragraph>
          Ok, we are ready to actually run the app. Run one final command in the
          terminal <Code>npm run dev</Code> and the server will start in
          developer mode. In Chrome, or which ever browser you like best, go to
          url localhost:3000 and you should see the app running on your
          computer.
        </Paragraph>
        <Illustration
          imageSource="/the-making-of/day-3/article/the-website-on-localhost.jpg"
          labelText="The website running on Chrome on the url localhost:3000."
        />
        <SubHeading level={2}>Wrapping up</SubHeading>
        <Paragraph>
          The app is running! Honestly, this is a massive hurdle, so many people
          don&rsquo;t make it this far, and who can blame them, it&rsquo;s a lot
          of work for not much excitement. Maybe it&rsquo;s time to shut down
          the server. There&rsquo;s a couple of ways to do this, firstly you can
          click the little bin icon on the VSCode terminal, or, if you want to
          keep the terminal open you can press &quot;ctrl + c&quot; to end the
          process, then confirm by typing &quot;y&quot;. That is all the set up
          done, next we can write our own code.
        </Paragraph>
      </div>
      <NeighbourNavigation previousTarget={"/the-making-of/day-2-running"} />
    </>
  );
}
