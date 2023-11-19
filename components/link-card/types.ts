export type LinkCardProps = {
  target: string;
  heading: string;
  description: string;
  imageData: {
    source: string,
    altText: string,
  };
  landscape?: boolean, 
};
