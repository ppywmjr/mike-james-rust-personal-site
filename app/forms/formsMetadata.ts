const basePath = "/forms";

const formsMetaData: {
  pages: { uri: string; menuText: string; linkDescription: string }[];
} = {
  pages: [
    {
      uri: `${basePath}/contact`,
      menuText: "Contact",
      linkDescription:
        "A sample contact form that doesn't send a real message.",
    },
    {
      uri: `${basePath}/calculation`,
      menuText: "A calculation",
      linkDescription:
        "A sample form that does a calculation",
    },
  ],
};

export default formsMetaData;
