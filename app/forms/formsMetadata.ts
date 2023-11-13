const basePath = "/forms";

const formsMetaData: {
  pages: {
    uri: string;
    menuText: string;
    linkDescription: string;
    imageData: { source: string; altText: string };
  }[];
} = {
  pages: [
    {
      uri: `${basePath}/contact`,
      menuText: "Contact",
      linkDescription:
        "A sample contact form that doesn't send a real message.",
      imageData: {
        source: "/profile.jpg",
        altText:
          "My selfie. A handsome chap with long wavy hair, a tidy beard and a big smile",
      },
    },
    {
      uri: `${basePath}/calculation`,
      menuText: "A calculation",
      linkDescription: "Bet you can't guess the equation this form is doing?",
      imageData: {
        source: "/forms/calculation/squirrel-solving-problem.jpg",
        altText:
          "A red squirrel works at a chalk board, trying to solve a maths problem",
      },
    },
  ],
};

export default formsMetaData;
