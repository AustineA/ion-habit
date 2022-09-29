import styled from "styled-components";
import ReportItem from "./ReportItem";

const ReportTable = ({ reports }: any) => {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <>
      <Container>
        <Title></Title>
        <Week>
          {daysOfWeek.map((day, index) => (
            <div className="cell" key={index}>
              {day}
            </div>
          ))}
        </Week>
      </Container>

      {reports.map((report: any, index: any) => (
        <ReportItem
          color={report.color}
          title={report.title}
          frequency={report.frequency}
          key={index}
        />
      ))}
    </>
  );
};

export default ReportTable;

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  width: 30%;
`;

const Week = styled.div`
  width: 70%;

  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  place-items: center;
  justify-content: end;

  .cell {
    color: #a1a1a1;
    padding: 10px;
    /* font-size: 12px; */
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-top: 8px;
    border-radius: 8px;
  }
`;
