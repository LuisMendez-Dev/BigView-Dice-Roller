import { Button, Image } from '@nextui-org/react';
import { DiceType, RollResultType } from '../types/gameTypes';

import DiceContext from '../context/diceDataContext';
import DiceDisplay from '../components/DiceDisplay';
import DiceSelector from '../components/DiceSelector';
import DnDLogo from '../assets/images/dndLogo.png';
import Footer from '../components/Footer';
import { randomDiceRoll } from '../utils/diceRollAlgorithm';
import { useState } from 'react';

function DiceGame() {
	const [selectedDices, setSelectedDices] = useState<DiceType[]>([]);
	const [rollResult, setRollResult] = useState<RollResultType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleRoll = () => {
		if (selectedDices.length > 0) setRollResult([]);
		setIsLoading(true);
		const result = selectedDices.map((dice) => {
			const randomNumber = randomDiceRoll(dice.sides);
			return { name: dice.name, result: randomNumber };
		});

		setTimeout(() => {
			setRollResult(result);
			setIsLoading(false);
		}, 1500);
	};

	const handleReset = () => {
		setSelectedDices([]);
		setRollResult([]);
	};

	const handleDelete = (index: number) => {
		const selectedDicesModification = selectedDices.filter((_, i) => i !== index);
		setSelectedDices(selectedDicesModification);
		setRollResult([...rollResult.filter((_, i) => i !== index)]);
	};

	return (
		<DiceContext.Provider value={{ selectedDices, setSelectedDices }}>
			<div className='flex flex-col items-center justify-center h-lvh w-full mt-10'>
				<div className='flex'>
					<Image
						src={DnDLogo}
						alt='Dice Roller'
						className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24'
					/>
					<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-black flex items-center'>
						Dice Roller
					</h1>
				</div>

				<div className='flex flex-col justify-center items-center mt-7'>
					<DiceSelector />
					<DiceDisplay
						rollResult={rollResult}
						loadingState={isLoading}
						handleDelete={handleDelete}
					/>

					<div
						className='
						flex
						flex-col
						sm:flex-row
						justify-between
						items-center
						w-full
						my-2
					'>
						<div
							className={`
						flex
						flex-row
						justify-center
						items-center
						my-2
						${rollResult.length === 0 ? 'w-full' : 'w-1/2'}
						`}>
							<Button
								className='bg-green-500 hover:bg-green-700 text-white font-bold my-3 w-1/2 mx-5'
								isDisabled={selectedDices.length === 0}
								onClick={handleRoll}>
								Roll
							</Button>

							<Button
								className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 w-1/2 mx-5'
								isDisabled={selectedDices.length === 0}
								onClick={handleReset}>
								Reset
							</Button>
						</div>

						{rollResult.length > 0 && (
							<h2
								className='
						text-3xl
						font-semibold
						text-black
						p-3
						text-center
						my-5
						border-2
						rounded-md
						'>
								{rollResult.reduce((acc, curr) => acc + (curr.result ?? 0), 0)}
							</h2>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</DiceContext.Provider>
	);
}

export default DiceGame;
