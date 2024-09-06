import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from '@nextui-org/react';

import DiceContext from '../context/diceDataContext';
import { RollResultType } from '../types/gameTypes';
import { assignIcon } from '../utils/diceData';
import { useContext } from 'react';

function DiceDisplay({
  rollResult,
  loadingState,
  handleDelete,
}: {
  rollResult?: RollResultType[];
  loadingState?: boolean;
  handleDelete?: (index: number) => void;
}) {
  const { selectedDices } = useContext(DiceContext);

  return (
    <>
      {selectedDices.length === 0 && (
        <p
          className='my-10 w-full text-center font-extralight text-gray-700'
          aria-live='polite'
        >
          No dice selected, please select a dice to start rolling.
        </p>
      )}

      {selectedDices.length > 0 && (
        <div
          className={`grid grid-cols-3 border-2 ${
            selectedDices.length > 0
              ? 'border-neutral-300'
              : 'border-transparent'
          } h-auto w-full rounded-md p-2`}
          role='region'
          aria-label='Selected dices display'
        >
          {selectedDices.map((dice, index) => (
            <Card
              key={index}
              className='m-2 animate-appearance-in items-center justify-center rounded-md'
              isDisabled={loadingState}
              aria-labelledby={`dice-name-${index}`}
            >
              <CardHeader
                className={`flex items-center justify-center sm:justify-start ${dice.color} rounded-sm lg:h-10 xl:h-12`}
              >
                <Chip
                  onClose={() => handleDelete && handleDelete(index)}
                  className='bg-white'
                  size='md'
                  aria-label={`Remove ${dice.name} dice`}
                >
                  <span id={`dice-name-${index}`}>{dice.name}</span>{' '}
                </Chip>
              </CardHeader>

              <CardBody className='flex items-center justify-center'>
                {loadingState ? (
                  <p
                    className='animate-bounce rounded-full text-center text-6xl font-semibold text-black'
                    aria-live='assertive'
                  >
                    ...
                  </p>
                ) : (
                  <img
                    src={assignIcon(dice.name)}
                    alt={`${dice.name} dice`}
                    className='h-12 w-12 sm:h-20 sm:w-20 lg:h-12 lg:w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20'
                    aria-hidden='true'
                  />
                )}
              </CardBody>

              {rollResult && rollResult.length > 0 && (
                <CardFooter className='flex items-center justify-center text-center font-semibold lg:h-10 2xl:mb-2'>
                  <p
                    className='font-base rounded-full text-center text-xl text-black 2xl:text-2xl'
                    aria-live='polite'
                  >
                    {rollResult[index]?.result ?? '--'}
                  </p>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default DiceDisplay;
