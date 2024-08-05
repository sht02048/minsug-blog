const pathKeys = {
  root: "/",
  home() {
    return this.root;
  },
  about() {
    return this.root.concat("about");
  },
  tags() {
    return this.root.concat("tags");
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
  postByTags(tag: string) {
    return this.tags().concat(tag);
  },
};

export default pathKeys;
