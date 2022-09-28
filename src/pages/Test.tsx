import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Test = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="bg">
          <IonTitle>Hello</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Hello</h1>
      </IonContent>
    </IonPage>
  );
};

export default Test;
