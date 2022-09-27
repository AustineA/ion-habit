import {
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import styled from "styled-components";
import HabitList from "../components/HabitList";

const Home = () => {
  return (
    <PageHome>
      <IonHeader className="ion-no-border">
        <IonToolbar color="bg">
          <IonTitle>Today</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="bg">
        <section className="date-time-holder"></section>
        <HabitList title="Drink Water" unit="300ml" percentageDone={70} />
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
  }
`;
