import { Button, Image } from "@nextui-org/react";
import { DiceType, RollResultType } from "../types/gameTypes";

import DiceContext from "../context/diceDataContext";
import DiceDisplay from "../components/DiceDisplay";
import DiceSelector from "../components/DiceSelector";
import DnDLogo from "../assets/images/dndLogo.png";
import Footer from "../components/Footer";
import { randomDiceRoll } from "../utils/diceRollAlgorithm";
import { useState } from "react";

function DiceGame() {
	const [selectedDices, setSelectedDices] = useState<DiceType[]>([]);
	const [rollResult, setRollResult] = useState<RollResultType[]>([]);

	const handleRoll = () => {
		const result = selectedDices.map((dice) => {
			const randomNumber = randomDiceRoll(dice.sides);
			return { name: dice.name, result: randomNumber };
		});
		setRollResult(result);
	};

	const handleReset = () => {
		setSelectedDices([]);
		setRollResult([]);
	};

	return (
		<DiceContext.Provider value={{ selectedDices, setSelectedDices }}>
			<div className="flex flex-col items-center justify-center h-svh w-full">
				<div className="flex mb-16">
					<Image
						src={DnDLogo}
						alt="Dice Roller"
						className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24"
					/>
					<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-black flex items-center">
						Dice Roller
					</h1>
				</div>

				<div className="flex flex-col mt-7">
					<DiceSelector />
					<DiceDisplay rollResult={rollResult} />

					<div
						className="
						flex
						flex-col
						sm:flex-row
						justify-center
						items-center
						w-full
						my-2
					"
					>
						<Button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 w-1/2 
							mx-5
							sm:w-1/2"
							isDisabled={selectedDices.length === 0}
							onClick={handleRoll}
						>
							Roll
						</Button>

						<Button
							className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 w-1/2 mx-5 sm:w-1/2"
							isDisabled={selectedDices.length === 0}
							onClick={handleReset}
						>
							Reset
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</DiceContext.Provider>
	);
}

export default DiceGame;
