import React, { useEffect } from 'react';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import firebase from '../../index';

import './styles.sass';
import { setDay, setTime } from '../../store/slices/mainSlice';

const Component: React.FC = () => {
   // connect to firestore using useFirestoreConnect hook
   useFirestoreConnect(['Result']);
   const dispatch = useAppDispatch();
   const day = useAppSelector((state) => state.main.dayChosen);
   const time = useAppSelector((state) => state.main.timeChosen);
   // get data from firestore
   const result = useSelector(
      (state: any) => state.firestore.ordered.Result,
   )[0];

   useEffect(() => {
      // when data from firestore is loaded it saves to main store from firestore
      if (isLoaded(result)) {
         dispatch(setDay(result.dayChosen));
         dispatch(setTime(result.timeChosen));
      }
   }, [result]);

   // when the button is clicked it updates data in firestore

   const handleSubmit = () => {
      const db = firebase.firestore();

      db.collection('Result')
         .doc('result')
         .update({ dayChosen: day, timeChosen: time });
   };

   return result ? (
      <div className='result-container'>
         <div className='result-container__content'>
            <div className='result-container__item'>
               <span className='result-container__title'>Дата</span>
               <span className='result-container__result'>{day} мая</span>
            </div>
            <div className='result-container__item'>
               <span className='result-container__title'>Время</span>
               <span className='result-container__result'>{time}</span>
            </div>
         </div>
         <button className='result-container__submit' onClick={handleSubmit}>
            Записаться на бесплатную встречу
         </button>
      </div>
   ) : (
      <Loader type='Puff' />
   );
};

export default Component;
