import { Button, Image } from '@nextui-org/react';
import { MAX_DICES, assignIcon, dicesData } from '../utils/diceData.ts';

import DiceContext from '../context/diceDataContext.ts';
import { useContext } from 'react';

const DiceSelector = () => {
  const { selectedDices, setSelectedDices } = useContext(DiceContext);

  return (
    <div className='mb-4 flex flex-row flex-wrap items-center justify-center'>
      {dicesData.map((dice, index) => (
        <Button
          key={index}
          variant='shadow'
          className={`mx-3 my-2 h-20 w-16 rounded-full p-5 hover:bg-opacity-75 sm:h-20 sm:w-16 ${dice.color} lg:w-15 lg:h-15 shadow-gray-300 lg:mx-1 xl:mx-3`}
          onClick={() => {
            const selectedDicesModification = [...selectedDices, dice];
            setSelectedDices(selectedDicesModification);
          }}
          isDisabled={selectedDices.length === MAX_DICES}
        >
          <Image
            src={assignIcon(dice.name)}
            alt={dice.name}
            className='h-auto w-auto'
          />
        </Button>
      ))}
    </div>
  );
};

export default DiceSelector;
