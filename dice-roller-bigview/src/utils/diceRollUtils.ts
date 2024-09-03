export const randomDiceRoll = (sides: number) => {
    return Math.ceil(Math.random() * sides) + 1;
};

export const dices = [
    { sides: 4, name: "D4" },
    { sides: 6, name: "D6" },
    { sides: 8, name: "D8" },
    { sides: 10, name: "D10" },
    { sides: 12, name: "D12" },
];
