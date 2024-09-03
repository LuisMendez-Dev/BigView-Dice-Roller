import { dices } from "../utils/diceRollUtils";

function DiceSelector() {
	return (
		<div>
			{dices.map((dice, index) => {
				return (
					<button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2">
						{dice.name}
					</button>
				);
			})}
		</div>
	);
}

export default DiceSelector;
