import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';

import Credits from './Credits';
import DnDLogo from '../assets/images/dndLogo.png';
import InfoIcon from '../assets/images/information.png';

const Title = () => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <header className='mb-5 flex w-full flex-col items-center justify-center gap-2 sm:flex-row'>
      <Button
        className='hidden bg-transparent sm:flex'
        size='sm'
        isIconOnly
        onPress={onOpen}
        aria-label='Open credits modal'
      >
        <Image
          src={InfoIcon}
          alt='Information Icon'
          className='h-8 w-12 sm:h-auto sm:w-auto'
        />
      </Button>

      <div className='flex items-center justify-center'>
        <Image
          src={DnDLogo}
          alt='Dice Roller Logo'
          className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24'
        />
        <h1 className='flex items-center text-3xl font-bold text-black sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl'>
          Dice Roller
        </h1>
      </div>

      {/* Extra information modal*/}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop='blur'
        placement='center'
        size='xs'
        className='p-5'
        aria-labelledby='credits-title'
      >
        <ModalContent>
          {() => (
            <section aria-labelledby='credits-title'>
              <ModalBody className='flex flex-col items-center justify-center gap-5'>
                <h2 id='credits-title' className='text-xl font-semibold'>
                  Credits
                </h2>
                <Credits />
              </ModalBody>
            </section>
          )}
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Title;
