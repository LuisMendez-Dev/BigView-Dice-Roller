import D10Icon from '../assets/images/D10-bg.png';
import D12Icon from '../assets/images/D12-bg.png';
import D4Icon from '../assets/images/D4-bg.png';
import D6Icon from '../assets/images/D6-bg.png';
import D8Icon from '../assets/images/D8-bg.png';
import { DiceType } from "../types/gameTypes";

export const dicesData: DiceType[] = [
  { sides: 4, name: "D4", img: "../assets/images/D4-bg.png", color: "bg-red-300" },
  { sides: 6, name: "D6", img: "../assets/images/D6-bg.png", color: "bg-yellow-300" },
  { sides: 8, name: "D8", img: "../assets/images/D8-bg.png", color: "bg-purple-300" },
  { sides: 10, name: "D10", img: "../assets/images/D10-bg.png", color: "bg-orange-300" },
  { sides: 12, name: "D12", img: "../assets/images/D12-bg.png", color: "bg-blue-300" },
];

export const MAX_DICES = 6;

export const assignIcon = (diceName: string) => {
  switch (diceName) {
    case 'D4':
      return D4Icon;
    case 'D6':
      return D6Icon;
    case 'D8':
      return D8Icon;
    case 'D10':
      return D10Icon;
    case 'D12':
      return D12Icon;
    default:
      return D4Icon;
  }
};
