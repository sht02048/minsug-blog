export interface FrontMatter {
  title: string;
  tags: string[];
  published: boolean;
  date: Date;
  description: string;
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
