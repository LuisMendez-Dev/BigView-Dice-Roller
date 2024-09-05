import { Card, CardBody, CardHeader, Chip, Image } from '@nextui-org/react';

import { RollHistoryType } from '../types/gameTypes';
import { assignIcon } from '../utils/diceData';
import { useState } from 'react';

const GameHistory = ({ rollHistory }: { rollHistory: RollHistoryType[] }) => {
  const [openSections, setOpenSections] = useState<boolean[]>(
    Array(rollHistory.length).fill(false)
  );
  const reverseData = rollHistory.slice().reverse();

  const handleToggleSection = (index: number) => {
    const updatedSections = [...openSections];
    updatedSections[index] = !updatedSections[index];
    setOpenSections(updatedSections);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='h-96 w-full overflow-y-auto rounded-md border-2 p-3 xl:mt-10 xl:h-96 2xl:mt-20'>
        <ol className='flex w-full flex-col gap-4'>
          {reverseData.map((roll, index) => (
            <li
              key={index}
              className='flex flex-col rounded-md bg-gray-200 p-2 text-black hover:cursor-pointer hover:bg-gray-300 sm:p-5 md:p-3 xl:p-3 2xl:p-2'
              onClick={() => handleToggleSection(index)}
            >
              <div className='flex flex-row items-center justify-between'>
                <Chip
                  className='bg-white p-3 md:text-lg lg:text-base'
                  size='md'
                >
                  #{reverseData.length - index}
                </Chip>
                <div className='flex flex-row'>
                  {roll.dices.map((dice, index) => (
                    <Image
                      key={index}
                      src={assignIcon(dice.name)}
                      alt={dice.name}
                      className='h-6 w-6 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:h-8 2xl:w-8'
                    />
                  ))}
                </div>
              </div>

              {openSections[index] && (
                <div className='mt-2 flex flex-col rounded-md bg-gray-100 text-center'>
                  <div className='flex justify-between rounded-md bg-gray-100 p-3 text-center md:gap-10 md:px-5'>
                    <div className='flex flex-row flex-wrap items-center gap-3'>
                      {roll.dices.map((dice, index) => (
                        <Card
                          className='flex w-16 flex-col items-center sm:w-20 md:w-24 lg:w-16 2xl:w-20'
                          key={index}
                        >
                          <CardHeader className={'p-1 ' + dice.color} />
                          <CardBody className='flex flex-col items-center gap-2 p-2'>
                            <p>{dice.name}</p>
                            <p>{roll.dicesResults[index].result}</p>
                          </CardBody>
                        </Card>
                      ))}
                    </div>
                    <p className='flex flex-col items-center justify-center rounded-md p-2 text-center sm:text-xl'>
                      Total{' '}
                      <span className='font-semibold'>{roll.totalResult}</span>
                    </p>
                  </div>
                  <p className='my-2'>{roll.resultTime}</p>
                </div>
              )}
            </li>
          ))}
        </ol>

        {reverseData.length === 0 && (
          <div className='flex h-full items-center justify-center text-center font-extralight text-gray-700'>
            <p className='text-gray-500'>No rolls yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameHistory;
