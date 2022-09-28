import { IonLabel, IonRange } from "@ionic/react";
import { useHistory } from "react-router";
import styled from "styled-components";

const HabitList = ({
  habit: { title, unit, percentageDone, color, id, total },
  habit,
}: any) => {
  const history = useHistory();

  return (
    <List
      onClick={() => {
        history.push({
          pathname: `/details/${id}`,
          state: { habit },
        });
      }}
    >
      <div>
        <div className="habit-title-holder">
          <IonLabel>{title}</IonLabel>
          <span className="habit-unit">
            {total}
            {unit}
          </span>
        </div>

        <div className="habit-range-holder">
          <div className="habit-range">
            <Range
              disabled={true}
              value={percentageDone}
              style={{ "--bar-background-active": color }}
              mode="ios"
            />
          </div>
          <span className="habit-done"> {percentageDone}% Done</span>
        </div>
      </div>
    </List>
  );
};

export default HabitList;

const List = styled.div`
  min-height: 4.688rem;
  background: var(--ion-color-bg-200);
  border-radius: 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.938rem;
  margin-bottom: 0.938rem;

  & > div {
    height: 100%;
    width: 100%;
  }

  .habit-title-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      opacity: 0.5;
      font-size: 0.75rem;
    }
  }

  .habit-range-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    margin-top: 0.313rem;
  }
  .habit-range {
    width: 75%;
  }
  .habit-done {
    /* width: 20%; */
    font-size: 0.65rem;
    text-align: right;
  }
`;

const Range = styled(IonRange)`
  --bar-height: 5px;
  --bar-border-radius: 8px;
  --knob-size: 0px;
  height: 1.25rem;
  padding: 0;
`;
