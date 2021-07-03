import React from 'react';

import './styles.sass';

interface TimeProps {
   active?: boolean;
   time: string;
   handleClick: () => void;
}

const Component: React.FC<TimeProps> = ({ time, active, handleClick }) => {
   return (
      <span
         onClick={handleClick}
         className={active ? 'time-item--active time-item' : 'time-item'}>
         {time}
      </span>
   );
};

export default Component;
