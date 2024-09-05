import DiceContext from '../context/diceDataContext';
import DiceDisplay from '../components/DiceDisplay';
import DiceSelector from '../components/DiceSelector';
import GameButton from '../components/GameButton';
import GameHistory from '../components/GameHistory';
import Title from '../components/Title';
import useDiceGame from '../hooks/useDiceGame';
import { useMemo } from 'react';

const DiceGame = () => {
  const {
    selectedDices,
    setSelectedDices,
    rollResult,
    history,
    isLoading,
    handleRoll,
    handleResetGame,
    handleDelete,
    handleResetHistory,
  } = useDiceGame();

  const totalRollResult = useMemo(
    () => rollResult.reduce((acc, curr) => acc + (curr.result ?? 0), 0),
    [rollResult]
  );

  return (
    <DiceContext.Provider value={{ selectedDices, setSelectedDices }}>
      <div className='mt-10 flex h-full w-full flex-col items-center justify-center gap-10 lg:mb-5'>
        <Title />
        <div className='flex w-full max-w-7xl flex-col items-center justify-center md:w-[95%] lg:flex-row lg:gap-10'>
          {/* GAME SECTION */}
          <div className='flex w-[95%] flex-col'>
            <DiceSelector />

            <DiceDisplay
              rollResult={rollResult}
              loadingState={isLoading}
              handleDelete={handleDelete}
            />

            <div className='mt-5 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:justify-between'>
              <div
                className={`flex flex-row items-center justify-center gap-10 ${totalRollResult === 0 && 'w-full'}`}
              >
                <GameButton
                  selectedDices={selectedDices}
                  isLoading={isLoading}
                  handleRoll={handleRoll}
                  handleResetGame={handleResetGame}
                  variants={['roll', 'reset']}
                />
              </div>

              {totalRollResult > 0 && (
                <h2 className='w-1/3 rounded-md bg-neutral-100 p-2 text-center text-3xl font-bold text-black'>
                  {totalRollResult}
                </h2>
              )}
            </div>
          </div>

          {/* HISTORY SECTION */}
          <div className='mb-5 mt-10 flex w-[95%] flex-col justify-center gap-5 md:w-[95%] lg:mb-0 lg:mt-20 lg:w-[75%]'>
            <GameHistory rollHistory={history} />

            {history.length > 0 && (
              <GameButton
                selectedDices={selectedDices}
                isLoading={isLoading}
                handleRoll={handleRoll}
                handleResetGame={handleResetGame}
                handleResetHistory={handleResetHistory}
                variants={['resetHistory', 'downloadHistory']}
                rollHistory={history}
              />
            )}
          </div>
        </div>
      </div>
    </DiceContext.Provider>
  );
};

export default DiceGame;
