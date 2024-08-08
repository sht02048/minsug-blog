export interface FrontMatter {
  title: string;
  tags: string[];
  date: Date;
  description: string;
  thumbnail: string;
}

export interface PostInfo {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
  parsedReadingTime: number;
}

export interface TagInfo {
  [key: string]: number;
}

export interface Heading {
  text: string;
  link: string;
  headingType: string;
}
