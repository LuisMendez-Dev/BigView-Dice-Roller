import { Button, Image } from '@nextui-org/react';
import { DiceType, RollHistoryType } from '../types/gameTypes';

import DiceIcon from '../assets/images/dice.png';
import DownloadIcon from '../assets/images/download.png';
import TrashIcon from '../assets/images/trash.png';
import historyDownload from '../utils/historyDownload';

const GameButton = ({
  selectedDices,
  isLoading,
  handleRoll,
  handleResetGame,
  handleResetHistory,
  rollHistory,
  variants,
}: {
  selectedDices: DiceType[];
  isLoading: boolean;
  handleRoll: () => void;
  handleResetGame: () => void;
  handleResetHistory?: () => void;
  variants: string[];
  rollHistory?: RollHistoryType[];
}) => {
  const variantDecider = (variant: string) => {
    switch (variant) {
      case 'reset':
        return {
          border: 'border-red-500',
          bg: 'bg-transparent',
          hover: 'bg-red-100',
          onClick: handleResetGame,
          startContent: (
            <Image src={TrashIcon} alt='Reset Icon' width={20} height={20} />
          ),
        };
      case 'roll':
        return {
          border: 'border-blue-500',
          bg: 'bg-blue-500',
          hover: 'bg-blue-100',
          onClick: handleRoll,
          startContent: (
            <Image src={DiceIcon} alt='Roll Icon' width={20} height={20} />
          ),
        };
      case 'resetHistory':
        return {
          border: 'border-red-500',
          bg: 'bg-transparent',
          hover: 'bg-red-100',
          onClick: handleResetHistory,
          startContent: (
            <Image src={TrashIcon} alt='Reset Icon' width={20} height={20} />
          ),
        };
      case 'downloadHistory':
        return {
          border: 'border-black',
          bg: 'bg-neutral-800',
          hover: 'bg-neutral-100',
          onClick: () => historyDownload(rollHistory || []),
          startContent: (
            <Image
              src={DownloadIcon}
              alt='Download Icon'
              width={20}
              height={20}
            />
          ),
        };
      default:
        return {};
    }
  };

  return (
    <div className={`flex items-center justify-center gap-5 sm:p-5`}>
      {variants.map(variant => (
        <Button
          key={variant}
          className={`rounded-md border-2 ${variantDecider(variant).border} ${variantDecider(variant).bg} hover:${variantDecider(variant).hover} `}
          isDisabled={
            (selectedDices.length === 0 &&
              (variant === 'reset' || variant === 'roll')) ||
            isLoading
          }
          onClick={variantDecider(variant).onClick}
          startContent={variantDecider(variant).startContent}
        />
      ))}
    </div>
  );
};

export default GameButton;
