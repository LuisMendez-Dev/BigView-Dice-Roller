import { RollHistoryType } from '../types/gameTypes';

/*
- References
- https://javascript.plainenglish.io/javascript-create-file-c36f8bccb3be
- https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
- https://developer.mozilla.org/en-US/docs/Web/API/Blob
*/

const historyDownload = (data: RollHistoryType[]) => {
  if (!data.length) {
    alert('History is empty! There is nothing to download.');
    return;
  }

  // Roll History data to text (Mapper)
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
