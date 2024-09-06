export interface DiceType {
  sides: number;
  name: string;
  img: string;
  color: string;
}

export interface DiceContextType {
  selectedDices: DiceType[];
  setSelectedDices: (dices: DiceType[]) => void;
}

export interface RollResultType {
  name: string;
  result: number;
}

export interface RollHistoryType {
  totalResult: number;
  dices: DiceType[];
  dicesResults: RollResultType[];
  resultTime: string;
}
