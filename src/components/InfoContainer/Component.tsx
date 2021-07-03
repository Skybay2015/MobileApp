import React from 'react';
import photo from '../../assets/img/man.png';

import './styles.sass';

const Component: React.FC = () => {
   return (
      <div className='info-container'>
         <div className='img-container'>
            <img src={photo} />
         </div>
         <div className='text-container'>
            <span className='info-container__info'>
               Длительность консультации
            </span>
            <span className='info-container__time'>50 минут</span>
         </div>
      </div>
   );
};

export default Component;
