import dayjs from "dayjs";

export default function PublishedDate({ date }: { date: Date }) {
  const currentDate = dayjs();
  const publishedDate = dayjs(date);
  const dayDifference = currentDate.diff(publishedDate, "day");

  return (
    <div className="mb-4 sm:mb-0">
      {dayDifference === 0 ? "오늘" : publishedDate.format("YYYY년 M월 D일")}
    </div>
  );
}
