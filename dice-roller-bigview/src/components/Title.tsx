import { Button, Image } from '@nextui-org/react';

import DnDLogo from '../assets/images/dndLogo.png';

const Title = () => {
  return (
    <div className='mb-5 flex w-full flex-col items-center justify-center gap-2'>
      <div className='flex'>
        <Image
          src={DnDLogo}
          alt='Dice Roller'
          className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24'
        />
        <h1 className='flex items-center text-4xl font-bold text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl'>
          Dice Roller
        </h1>
      </div>
      {/* <Button className='h-24 rounded-none bg-black text-white' size='sm'>
        Info
      </Button> */}
    </div>
  );
};

export default Title;
