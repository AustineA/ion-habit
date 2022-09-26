import { IonLabel, IonRange } from "@ionic/react";
import { useState } from "react";
import styled from "styled-components";

const HabitList = () => {
  const [bgColor, setBg] = useState("#36C2E3");

  return (
    <List>
      <div>
        <div className="habit-title-holder">
          <IonLabel>Drink Water</IonLabel>
          <span className="habit-unit">300ml</span>
        </div>

        <div className="habit-range-holder">
          <div className="habit-range">
            <Range
              disabled={true}
              value={70}
              style={{ "--bar-background-active": bgColor }}
            />
          </div>
          <span className="habit-done"> 70% Done</span>
        </div>
      </div>
    </List>
  );
};

export default HabitList;

const List = styled.section`
  min-height: 4.688rem;
  background: var(--ion-color-bg-200);
  border-radius: 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.938rem;

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
    font-size: 0.75rem;
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
