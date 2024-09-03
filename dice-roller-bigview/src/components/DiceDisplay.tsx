import DiceContext from "../context/diceDataContext";
import { RollResultType } from "../types/gameTypes";
import { useContext } from "react";

function DiceDisplay({ rollResult }: { rollResult?: RollResultType[] }) {
	const { selectedDices } = useContext(DiceContext);

	return (
		<div
			className={`
      flex
      flex-col
      items-center
			border-2
			${selectedDices.length > 0 ? "border-gray-300" : "border-transparent"}
			rounded-md
			h-50
			p-2
			m-4
    `}
		>
			{selectedDices.length > 0 ? (
				<ol
					className="
					list-inside
					text-center
					text-xl
					text-gray-700
					font-semibold
				"
				>
					{selectedDices.map((element, index) => (
						<li
							key={index}
							className="
							p-2
							border-b-2
							border-gray-300
						"
						>
							{`
								${element.name} ${rollResult && rollResult[index] ? `: ${rollResult[index].result}` : ""}
							`}
						</li>
					))}
				</ol>
			) : (
				<p
					className="
						text-center
						text-gray-700
						font-extralight
					"
				>
					No dice selected, please select a dice to start rolling.
				</p>
			)}

			{rollResult && rollResult.length > 0 && (
				<div
					className="
							flex
							justify-end	
							mt-4
							w-full
							rounded-md
						"
				>
					<p
						className="text-2xl font-semibold text-black
							rounded-full
							p-3
							text-center
					"
					>
						{rollResult.reduce((acc, curr) => {
							return acc + (curr.result || 0);
						}, 0)}
					</p>
				</div>
			)}
		</div>
	);
}

export default DiceDisplay;
