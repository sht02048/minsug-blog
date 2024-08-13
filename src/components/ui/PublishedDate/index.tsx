import dayjs from "dayjs";

export default function PublishedDate({ date }: { date: Date }) {
  const currentDate = dayjs();
  const publishedDate = dayjs(date);
  const dayDifference = currentDate.diff(publishedDate, "day");

  return <span>{publishedDate.format("YYYY년 M월 D일")}</span>;
}
