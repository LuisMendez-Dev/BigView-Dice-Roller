import { Button, Image } from "@nextui-org/react";
import { MAX_DICES, dicesData } from "../utils/diceData.ts";

import D10Icon from "../assets/images/D10-bg.png";
import D12Icon from "../assets/images/D12-bg.png";
import D4Icon from "../assets/images/D4-bg.png";
import D6Icon from "../assets/images/D6-bg.png";
import D8Icon from "../assets/images/D8-bg.png";
import DiceContext from "../context/diceDataContext.ts";
import { useContext } from "react";

function DiceSelector() {
	const { selectedDices, setSelectedDices } = useContext(DiceContext);
	const dicesBackgroundColor = ["bg-red-300", "bg-blue-300", "bg-green-300", "bg-yellow-300", "bg-purple-300"];

	const assignIcon = (diceName: string) => {
		switch (diceName) {
			case "D4":
				return D4Icon;
			case "D6":
				return D6Icon;
			case "D8":
				return D8Icon;
			case "D10":
				return D10Icon;
			case "D12":
				return D12Icon;
			default:
				return D4Icon;
		}
	};

	return (
		<div
			className="
			flex
			flex-row
			flex-wrap
			justify-center
			items-center
		"
		>
			{dicesData.map((dice, index) => (
				<Button
					key={index}
					variant="shadow"
					className={`h-24 w-24 my-3 mx-5 border-2 rounded-full py-8 hover:bg-opacity-75 ${dicesBackgroundColor[index]}`}
					onClick={() => {
						const selectedDicesModification = [...selectedDices, dice];
						setSelectedDices(selectedDicesModification);
					}}
					isDisabled={selectedDices.length === MAX_DICES}
				>
					<Image src={assignIcon(dice.name)} alt={dice.name} className="w-auto h-12" />
				</Button>
			))}
		</div>
	);
}

export default DiceSelector;
