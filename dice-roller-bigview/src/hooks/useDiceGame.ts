import { DiceType, RollHistoryType, RollResultType } from "../types/gameTypes";

import { randomDiceRoll } from "../utils/diceRollAlgorithm";
import { useState } from "react";

const useDiceGame = () => {
  const [selectedDices, setSelectedDices] = useState<DiceType[]>([]);
  const [rollResult, setRollResult] = useState<RollResultType[]>([]);
  const [history, setHistory] = useState<RollHistoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRoll = () => {
    if (selectedDices.length > 0) setRollResult([]);
    setIsLoading(true);
    const result = selectedDices.map(dice => ({
      name: dice.name,
      result: randomDiceRoll(dice.sides),
    }));

    setTimeout(() => {
      setRollResult(result);
      setHistory(prevHistory => [
        ...prevHistory,
        {
          totalResult: result.reduce((acc, curr) => acc + (curr.result ?? 0), 0),
          dices: selectedDices,
          dicesResults: result,
          resultTime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
        },
      ]);
      setIsLoading(false);
    }, 2000);
  };

  const handleResetGame = () => {
    setSelectedDices([]);
    setRollResult([]);
  };

  const handleResetHistory = () => {
    setHistory([]);
  };

  const handleDelete = (index: number) => {
    setSelectedDices(prevDices => prevDices.filter((_, i) => i !== index));
    setRollResult(prevResults => prevResults.filter((_, i) => i !== index));
  };

  return { selectedDices, setSelectedDices, rollResult, history, isLoading, handleRoll, handleResetGame, handleResetHistory, handleDelete };
};

export default useDiceGame;