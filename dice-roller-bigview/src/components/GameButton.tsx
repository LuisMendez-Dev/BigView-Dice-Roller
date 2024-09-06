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
          ariaLabel: 'Reset Game',
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
          ariaLabel: 'Roll Dice',
        };
      case 'resetHistory':
        return {
          border: 'border-red-500',
          bg: 'bg-transparent',
          hover: 'bg-red-100',
          onClick: handleResetHistory,
          startContent: (
            <Image
              src={TrashIcon}
              alt='Reset History Icon'
              width={20}
              height={20}
            />
          ),
          ariaLabel: 'Reset History',
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
              alt='Download History Icon'
              width={20}
              height={20}
            />
          ),
          ariaLabel: 'Download History',
        };
      default:
        return {};
    }
  };

  return (
    <div className='flex items-center justify-center gap-5 sm:p-5'>
      {variants.map(variant => {
        const variantConfig = variantDecider(variant);
        return (
          <Button
            key={variant}
            className={`rounded-md border-2 ${variantConfig.border} ${variantConfig.bg} hover:${variantConfig.hover}`}
            isDisabled={
              (selectedDices.length === 0 &&
                (variant === 'reset' || variant === 'roll')) ||
              isLoading
            }
            onClick={variantConfig.onClick}
            startContent={variantConfig.startContent}
            aria-label={variantConfig.ariaLabel}
          />
        );
      })}
    </div>
  );
};

export default GameButton;
