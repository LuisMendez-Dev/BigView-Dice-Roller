import DiceSelector from "../components/DiceSelector";

function DiceGame() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-black m-12'>
        Dice Roller
      </h1>

      <div className='flex flex-row mt-12'>
        <DiceSelector />
      </div>

    </div>
  );
}

export default DiceGame;
