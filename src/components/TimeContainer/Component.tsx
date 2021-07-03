import React, { useState } from 'react';

import { setTime } from '../../store/slices/mainSlice';
import TimeItem from '../TimeItem';

import './styles.sass';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Component: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const timeCollection = useAppSelector((state) => state.main.time);
   const dispatch = useAppDispatch();

   // set active index to detect which item was clicked and change time in redux store

   const handleClick = (index: number) => {
      setActiveIndex(index);
      dispatch(setTime(timeCollection[index]));
   };

   return (
      <div className='time-container'>
         <h2 className='time-container__title'>Свободное время</h2>
         <div className='time-content'>
            {timeCollection.map((time, index) => {
               // if the index is equal to active index it changes styles to active element
               return index === activeIndex ? (
                  <TimeItem
                     key={Math.random()}
                     handleClick={() => handleClick(index)}
                     time={time}
                     active={true}
                  />
               ) : (
                  <TimeItem
                     key={Math.random()}
                     handleClick={() => handleClick(index)}
                     time={time}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Component;
