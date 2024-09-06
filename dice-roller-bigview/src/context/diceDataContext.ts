import { DiceContextType } from '../types/gameTypes';
import { createContext } from 'react';

const DiceContext = createContext<DiceContextType>({
  selectedDices: [],
  setSelectedDices: () => {},
});

export default DiceContext;
