import { differenceInDays, endOfMonth, endOfWeek, startOfWeek } from "date-fns";
import styled from "styled-components";

const Calendar = ({ date }: any) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDate = startOfWeek(date);
  const endDate = endOfWeek(date);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const endMonth = endOfMonth(date);
  const today = date.getDate();

  const sufix = 6 - differenceInDays(endMonth, startDate);

  return (
    <Week>
      {daysOfWeek.map((day) => (
        <div className="cell" key={day}>
          {day}
        </div>
      ))}

      {Array.from({ length: numDays - sufix }).map((_, index) => {
        const date = startDate.getDate() + index;

        return (
          <div
            className={`date ${date == today ? "today" : ""}`}
            key={index}
            style={{}}
          >
            {date}
          </div>
        );
      })}

      {Array.from({ length: sufix }).map((_, index) => {
        const date = 1 + index;

        return (
          <div className={`date ${date === today ? "today" : ""}`} key={index}>
            {date}
          </div>
        );
      })}
    </Week>
  );
};

export default Calendar;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  place-items: center;

  .cell {
    padding: 10px;
    font-size: 12px;
    color: #a1a1a1;
  }

  .date {
    padding: 10px;
    border-radius: 15px;
    background: #343434;
    font-size: 12px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }

  .today {
    border: 1px solid #d7c0fd;
  }
`;
