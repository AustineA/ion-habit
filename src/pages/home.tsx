import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import styled from "styled-components";
import HabitList from "../components/HabitList";
import { habits } from "../services/data";
import { addCircleOutline } from "ionicons/icons";
import Calendar from "../components/Calendar";

const Home = () => {
  return (
    <PageHome>
      <IonHeader className="ion-no-border">
        <IonToolbar color="bg">
          <IonTitle>Today</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="bg">
        <section className="date-time-holder ">
          {/* <Calendar date={new Date("2022-02-27")} /> */}
          <Calendar date={new Date()} />
        </section>

        {habits.map((habit) => (
          <HabitList
            title={habit.title}
            unit={habit.unit}
            percentageDone={habit.percentageDone}
            bgColor={habit.color}
            key={habit.id}
            habit={habit}
            id={habit.id}
          />
        ))}

        <Buttons>
          <IonButton mode="ios">
            <IonIcon
              icon={addCircleOutline}
              style={{ marginRight: 5 }}
            ></IonIcon>{" "}
            New Habit
          </IonButton>
        </Buttons>
      </IonContent>
    </PageHome>
  );
};

export default Home;

const PageHome = styled(IonPage)`
  .date-time-holder {
    margin-bottom: 0.938rem;
    min-height: 6.25rem;
    background: var(--ion-color-bg-200);
    border-radius: 0.938rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Buttons = styled(IonButtons)`
  margin-top: 1.5rem;
  text-align: center;
  display: block;
`;
