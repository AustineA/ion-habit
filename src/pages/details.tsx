import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";

import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import CircularProgress from "../components/CircularProgress";

const Details = ({ match }: any) => {
  const history: any = useHistory();
  const { title, unit, percentageDone, color, id, total, done } =
    history?.location?.state?.habit;

  return (
    <DetailsPage color={color}>
      <IonHeader className="ion-no-border">
        <IonToolbar color="bg">
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="bg">
        <section>
          <div className="prgress-holder">
            <CircularProgress
              size={250}
              strokeWidth={2}
              percentage={percentageDone}
              color={color}
            />

            <div className="habit-meta">
              <div className="meta-holder">
                <p className="done">
                  {done} <span>{unit}</span>
                </p>
                <span className="total">
                  of {total}
                  {unit}
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="actions">
          <IonButtons>
            <IonButton className="add-habit" expand="block">
              <IonIcon icon={addOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </div>
      </IonContent>
    </DetailsPage>
  );
};

export default Details;

const DetailsPage = styled(IonPage)`
  section {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prgress-holder {
    min-width: 280px;
    min-height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .habit-meta {
    position: absolute;
    /* top: 100px;
    right: 125px; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .meta-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .done {
    font-size: 50px;
    margin: 0;
    span {
      font-size: 20px;
    }
  }

  .total {
    opacity: 0.5;
  }

  .actions {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
  }

  .add-habit {
    --border-radius: 50px !important;
    --background: ${(props) => props.color};
    color: #181818;
    height: 50px;
    width: 50px;
  }
`;
