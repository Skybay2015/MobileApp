import { IonContent, IonPage, IonTitle } from '@ionic/react';

import InfoContainer from '../components/InfoContainer';
import DateContainer from '../components/DateContainer';
import TimeContainer from '../components/TimeContainer';
import ResultContainer from '../components/ResultContainer';

import './Home.sass';

const Home: React.FC = () => {
   return (
      <IonPage>
         <IonContent className='ion-padding-horizontal' fullscreen>
            <div className='main-container'>
               <IonTitle className='title' size='large'>
                  Алексей Карачинский
               </IonTitle>
               <InfoContainer />
               <DateContainer />
               <TimeContainer />
               <ResultContainer />
            </div>
         </IonContent>
      </IonPage>
   );
};

export default Home;
