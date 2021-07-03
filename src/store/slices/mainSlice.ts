import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState ={ 
   days:  [
            { dayNumber: 26, dayWeek: 'Сегодня', chosen: false },
            { dayNumber: 27, dayWeek: 'Сp', chosen: false },
            { dayNumber: 28, dayWeek: 'Чт', chosen: false },
            { dayNumber: 29, dayWeek: 'Пт', chosen: false },
            { dayNumber: 30, dayWeek: 'Сб', chosen: false }],
   time: ['18:00', '18:30', '20:00', '20:30', '21:30', '22:30'],
   dayChosen: 27,
   timeChosen: '18:30'
};

interface Item {
   index: number
}

interface Day { 
   dayNumber: number, dayWeek: string, chosen: boolean
}

export interface State {
   days: Day[],
   time: string[],
   dayChosen: number,
   timeChosen: string

}


const mainSlice = createSlice({
   name: 'main',
   initialState,
   reducers: {
      // set chosen day
      setDay: (state, action: PayloadAction<number>) => {
         state.dayChosen = action.payload
      },

      // set chosen time
      setTime: (state, action: PayloadAction<string>) => {
         state.timeChosen = action.payload
      }
   }
})

export const { setDay, setTime} = mainSlice.actions
export default mainSlice.reducer