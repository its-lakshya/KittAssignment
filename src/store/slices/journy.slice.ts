import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface journyState {
  from: null | string,
  to: null | string,
  departure: null | string,
  return: null | string,
}

const getInitialJourneyFromLocalStorage = (): journyState => {
  const storedJourney = localStorage.getItem('journy');
  if (storedJourney) {
    const parsedJourney = JSON.parse(storedJourney);
    return {
      from: parsedJourney.from || null,
      to: parsedJourney.to || null,
      departure: parsedJourney.departure || null,
      return: parsedJourney.return || null,
    };
  }
  return {
    from: null,
    to: null,
    departure: null,
    return: null,
  };
};

const initialState: journyState = getInitialJourneyFromLocalStorage();

const journySlice = createSlice({
  name: 'journy',
  initialState,

  reducers: {
    setJournyRedux: (state, action: PayloadAction<journyState>) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
      state.departure = action.payload.departure;
      state.return = action.payload.return;
      localStorage.setItem("journy", JSON.stringify({from: action.payload.from, to: action.payload.to, departure:action.payload.departure, return: action.payload.return}));
    },
    
  },
});

export const { setJournyRedux } = journySlice.actions;
export default journySlice.reducer;