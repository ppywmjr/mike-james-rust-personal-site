const basePath = "/how-to-make-a-website";

const makingOfMetaData: {
  pages: { uri: string; menuText: string; linkDescription: string }[];
} = {
  pages: [
    {
      uri: `${basePath}/technology-choices`,
      menuText: "Choices",
      linkDescription: "Where to get started making a website and server",
    },
    {
      uri: `${basePath}/running-a-server-in-the-cloud`,
      menuText: "Up and running",
      linkDescription:
        "Only a few clicks to make a website and server running in the cloud",
    },
    {
      uri: `${basePath}/running-a-server-in-on-my-computer`,
      menuText: "A website on my computer",
      linkDescription: "Running the website on my computer",
    },
    {
      uri: `${basePath}/first-code-changes`,
      menuText: "First code changes",
      linkDescription: "It's my server and I'll change what I want",
    },
  ],
};

export default makingOfMetaData;