interface Props {
  date: Date;
  slug: string;
}

export default function getSlug({ date, slug }: Props) {
  const year = String(date.getFullYear());
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const englishTitle = slug.split("/")[3];

  return { year, month, englishTitle };
}
