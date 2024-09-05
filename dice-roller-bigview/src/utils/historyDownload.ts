import { RollHistoryType } from '../types/gameTypes';

const historyDownload = (data: RollHistoryType[]) => {
  const textData = data
    .map((roll, index) => {
      const dices = roll.dices
        .map(dice => `${dice.name} (${dice.sides} sides)`)
        .join(', ');
      const results = roll.dicesResults
        .map(result => `${result.name}: ${result.result}`)
        .join(', ');

      return (
        `#${index + 1}\n` +
        `Date: ${roll.resultTime}\n` +
        `Dices: ${dices}\n` +
        `Results: ${results}\n` +
        `Total Result: ${roll.totalResult}\n\n`
      );
    })
    .join('\n');

  const blob = new Blob([textData], { type: 'text/plain' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `BigView_DiceRoller_History_${new Date().toLocaleDateString()}_${new Date().toLocaleTimeString()}.txt`;

  link.click();

  URL.revokeObjectURL(link.href);
};

export default historyDownload;
