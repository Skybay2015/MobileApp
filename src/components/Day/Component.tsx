import React from 'react';
import './styles.sass';
interface DayProps {
   dayNumber: number;
   dayWeek: string;
   active?: boolean;
   handleClick: () => void;
}

const Component: React.FC<DayProps> = ({
   dayNumber,
   dayWeek,
   active,
   handleClick,
}) => {
   return (
      <div
         onClick={handleClick}
         className={active ? 'day-item  day-item--active' : 'day-item'}>
         <span className='day-week'>{dayWeek}</span>
         <span className='day-number'>{dayNumber}</span>
      </div>
   );
};

export default Component;
