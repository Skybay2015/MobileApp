import React, { useState } from 'react';
import Day from '../Day';

import calendarIcon from '../../assets/img/Calendar.png';
import listIcon from '../../assets/img/List.png';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setDay } from '../../store/slices/mainSlice';

import './styles.sass';

const Component: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const days = useAppSelector((state) => state.main.days);
   const dispatch = useAppDispatch();

   // set active index to detect which item was clicked and change day in redux store

   const handleClick = (index: number) => {
      setActiveIndex(index);
      dispatch(setDay(days[index].dayNumber));
   };

   return (
      <div className='date-container'>
         <div className='date-container__title-container'>
            <h2 className='date-container__title'>Возможная дата</h2>
            <div className='view-container'>
               <img className='date-container__selection' src={listIcon} />
               <img className='date-container__selection' src={calendarIcon} />
            </div>
         </div>
         <div className='days-container'>
            {days.map((day, index) => {
               // if the index is equal to active index it changes styles to active element
               return index === activeIndex ? (
                  <Day
                     key={Math.random()}
                     handleClick={() => handleClick(index)}
                     {...day}
                     active={true}
                  />
               ) : (
                  <Day
                     key={Math.random()}
                     handleClick={() => handleClick(index)}
                     {...day}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Component;
