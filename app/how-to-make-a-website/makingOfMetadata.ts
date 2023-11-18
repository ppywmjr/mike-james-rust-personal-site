const basePath = "/how-to-make-a-website";

const makingOfMetaData: {
  pages: {
    uri: string;
    menuText: string;
    linkDescription: string;
    imageData: {
      source: string;
      altText: string;
    };
  }[];
} = {
  pages: [
    {
      uri: `${basePath}/technology-choices`,
      menuText: "Choices",
      linkDescription: "Where to get started making a website and server",
      imageData: {
        source: "/how-to-make-a-website/day-1/choices.jpg",
        altText: "Old style computer monitors showing code.",
      },
    },
    {
      uri: `${basePath}/running-a-server-in-the-cloud`,
      menuText: "Up and running",
      linkDescription:
        "Only a few clicks to make a website and server running in the cloud",
      imageData: {
        source: "/how-to-make-a-website/day-2/running.jpg",
        altText: "A red squirrel sprints across a screen",
      },
    },
    {
      uri: `${basePath}/running-a-server-in-on-my-computer`,
      menuText: "A website on my computer",
      linkDescription: "Running the website on my computer",
      imageData: {
        source: "/how-to-make-a-website/day-3/superhero.jpg",
        altText: "A red squirrel poses like a superhero",
      },
    },
    {
      uri: `${basePath}/first-code-changes`,
      menuText: "First code changes",
      linkDescription: "It's my server and I'll change what I want",
      imageData: {
        source: "/how-to-make-a-website/day-4/build.jpg",
        altText: "A mischievous red squirrel throws around building blocks",
      },
    },
    {
      uri: `${basePath}/finding-errors`,
      menuText: "Finding errors",
      linkDescription: "Rule 1: Things will always go wrong",
      imageData: {
        source: "/how-to-make-a-website/day-5/finding-errors.jpg",
        altText: "A red squirrel detective searches for a ladybird",
      },
    },
  ],
};

export default makingOfMetaData;
