import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react';

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
				<p className=' my-10 w-full text-center text-gray-700 font-extralight'>
					No dice selected, please select a dice to start rolling.
				</p>
			)}

			{selectedDices.length > 0 && (
				<div
					className={`
          grid
          grid-cols-3
          border-2 ${selectedDices.length > 0 ? 'border-gray-300' : 'border-transparent'}
          rounded-md 
          p-2 
          w-full
          `}>
					{selectedDices.length > 0 &&
						selectedDices.map((dice, index) => (
							<Card
								key={index}
								className='items-center justify-center m-2 rounded-md animate-appearance-in'
								isDisabled={loadingState}>
								<CardHeader className={`flex items-center justify-start ${dice.color} rounded-sm`}>
									<Chip
										onClose={() => handleDelete && handleDelete(index)}
										className='bg-white'>
										{dice.name}
									</Chip>
								</CardHeader>

								<CardBody className='flex items-center justify-center'>
									{loadingState ? (
										<p className='text-6xl font-semibold text-black rounded-full text-center animate-bounce'>
											...
										</p>
									) : (
										<img
											src={assignIcon(dice.name)}
											alt={dice.name}
											className='w-10 h-10 sm:w-20 sm:h-20'
										/>
									)}
								</CardBody>

								{rollResult && rollResult.length > 0 && (
									<CardFooter
										className='
                      flex
                      items-center
                      justify-center
                      text-center
                      font-semibold
                  '>
										<p
											className='
                        text-2xl
                        font-semibold
                        text-black
                        rounded-full
                        text-center
							      '>
											{rollResult && rollResult[index] && rollResult[index].result}
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
