import { Button, Image } from '@nextui-org/react';
import { MAX_DICES, assignIcon, dicesData } from '../utils/diceData.ts';

import DiceContext from '../context/diceDataContext.ts';
import { useContext } from 'react';

function DiceSelector() {
	const { selectedDices, setSelectedDices } = useContext(DiceContext);

	return (
		<div
			className='
			flex
			flex-row
			flex-wrap
			justify-center
			items-center
		'>
			{dicesData.map((dice, index) => (
				<Button
					key={index}
					variant='shadow'
					className={`h-15 w-15 sm:h-24 sm:w-24 my-3 mx-5 border-2 rounded-full p-4 hover:bg-opacity-75 ${dice.color}`}
					onClick={() => {
						const selectedDicesModification = [...selectedDices, dice];
						setSelectedDices(selectedDicesModification);
					}}
					isDisabled={selectedDices.length === MAX_DICES}>
					<Image
						src={assignIcon(dice.name)}
						alt={dice.name}
						className='w-auto h-12'
					/>
				</Button>
			))}
		</div>
	);
}

export default DiceSelector;
