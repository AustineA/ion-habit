import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import styled from "styled-components";
import ReportTable from "../components/ReportTable";

const Report = () => {
  const [lastSevenDays, setReport] = useState(OneWeek);

  return (
    <ReportPage>
      <IonHeader className="ion-no-border" mode="md">
        <IonToolbar color="bg">
          <IonTitle>Report</IonTitle>
          <IonLabel slot="end" className="ion-padding-end">
            Last 7 Days
          </IonLabel>
        </IonToolbar>
      </IonHeader>

      <IonContent color="bg" className="ion-padding">
        <ReportTable reports={lastSevenDays} />
      </IonContent>
    </ReportPage>
  );
};

export default Report;

const ReportPage = styled(IonPage)``;

const OneWeek = [
  {
    title: "Drink Water",
    frequency: [true, true, false, true, true, true, true],
    color: "#36C2E3",
  },
  {
    title: "Sleep",
    frequency: [true, true, false, true, false, false, true],
    color: "#AA76FF",
  },
  {
    title: "Yoga",
    frequency: [true, true, false, true, true, true, true],
    color: "#F2A9AD",
  },
  {
    title: "Eat Vege",
    frequency: [true, true, true, true, true, true, true],
    color: "#83AE7C",
  },
];
