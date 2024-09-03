export interface DiceType {
  sides: number;
  name: string;
  img: string;
}

export interface DiceContextType {
  selectedDices: DiceType[];
  setSelectedDices: (dices: DiceType[]) => void;
}

export interface RollResultType {
  name?: string;
  result?: number;
}

