import D10Icon from '../assets/images/D10-bg.png';
import D12Icon from '../assets/images/D12-bg.png';
import D4Icon from '../assets/images/D4-bg.png';
import D6Icon from '../assets/images/D6-bg.png';
import D8Icon from '../assets/images/D8-bg.png';
import { DiceType } from '../types/gameTypes';

export const MAX_DICES = 6;

export const dicesData: DiceType[] = [
  {
    sides: 4,
    name: 'D4',
    img: D4Icon,
    color: 'bg-red-300',
  },
  {
    sides: 6,
    name: 'D6',
    img: D6Icon,
    color: 'bg-yellow-300',
  },
  {
    sides: 8,
    name: 'D8',
    img: D8Icon,
    color: 'bg-purple-300',
  },
  {
    sides: 10,
    name: 'D10',
    img: D10Icon,
    color: 'bg-orange-300',
  },
  {
    sides: 12,
    name: 'D12',
    img: D12Icon,
    color: 'bg-blue-200',
  },
];

export const assignIcon = (diceName: string): string => {
  const diceIcons: { [key: string]: string } = {
    D4: D4Icon,
    D6: D6Icon,
    D8: D8Icon,
    D10: D10Icon,
    D12: D12Icon,
  };

  return diceIcons[diceName] || D4Icon;
};
