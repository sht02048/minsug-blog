import dayjs from "dayjs";

export default function PublishedDate({ date }: { date: Date }) {
  const currentDate = dayjs();
  const publishedDate = dayjs(date);
  const dayDifference = currentDate.diff(publishedDate, "day");
  const fullDate = `${publishedDate.get("year")}년 ${publishedDate.get("month")}월 ${publishedDate.get("day")}일`;

  return (
    <div className="mb-4 sm:mb-0">
      {dayDifference === 0 ? "오늘" : fullDate}
    </div>
  );
}
