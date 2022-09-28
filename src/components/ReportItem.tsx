import styled from "styled-components";

const ReportItem = ({ title, color, frequency }: any) => {
  return (
    <Reports>
      <div className="report-body">
        <Title>{title}</Title>
        <Week>
          {frequency.map((f: any, index: any) => (
            <div
              className="cell"
              key={index}
              style={{ background: f ? color : "#3F3F3F" }}
            >
              {/* {day} */}
            </div>
          ))}
        </Week>
      </div>
    </Reports>
  );
};

export default ReportItem;

const Reports = styled.div`
  .report-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  width: 30%;
`;

const Week = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  place-items: center;

  .cell {
    padding: 10px;
    font-size: 12px;
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
