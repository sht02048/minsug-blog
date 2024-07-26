import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

import PublishedDate from "../PublishedDate";

export default function PostHeader({
  title,
  date,
  parsedReadingTime,
}: {
  title: string;
  date: Date;
  parsedReadingTime: number;
}) {
  return (
    <section className="flex items-center flex-col space-y-4">
      <span className="text-3xl font-bold">{title}</span>
      <div className="flex space-x-6">
        <div className="flex items-center">
          <MdOutlineDateRange />
          <PublishedDate date={date} />
        </div>
        <div className="flex items-center">
          <IoMdTime />
          <span>{`${parsedReadingTime}분`}</span>
        </div>
      </div>
    </section>
  );
}
