const siteConfig = {
  title: "minsug",
  description: "minsug의 기술 블로그",
  url: "https://blog.minsug.dev",
  pathPrefix: "/",
  copyright: "minsug © All rights reserved.",
  keyword: ["javascript", "typescript", "react", "nextJS", "frontEnd"],
  author: {
    name: "minsug",
    photo: "/profile.png",
    bio: "frontend engineer",
    contacts: {
      email: "sht02048@gmail.com",
      github: "https://github.com/sht02048",
    },
  },
  path: {
    root: "/",
    home() {
      return this.root;
    },
    about() {
      return this.root.concat("about/");
    },
    tags() {
      return this.root.concat("tags/");
    },
    post({
      year,
      month,
      englishTitle,
    }: {
      year: string;
      month: string;
      englishTitle: string;
    }) {
      return this.root.concat(`${year}/${month}/${englishTitle}`);
    },
  },
};

export default siteConfig;
