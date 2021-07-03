import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { setTime, State } from '../../store/slices/mainSlice';
import TimeItem from '../TimeItem';
import { RootState } from '../../store/store';

import './styles.sass';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Component: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
   const timeCollection = useAppSelector((state) => state.main.time);
   const dispatch = useAppDispatch();

   const handleClick = (index: number) => {
      setActiveIndex(index);
      dispatch(setTime(timeCollection[index]));
   };

   return (
      <div className='time-container'>
         <h2 className='time-container__title'>Свободное время</h2>
         <div className='time-content'>
            {timeCollection.map((time, index) => {
               return index === activeIndex ? (
                  <TimeItem
                     handleClick={() => handleClick(index)}
                     time={time}
                     active={true}
                  />
               ) : (
                  <TimeItem
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
