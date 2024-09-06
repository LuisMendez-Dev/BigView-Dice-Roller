const Credits = () => {
  return (
    <>
      <div className='mt-10 items-center justify-center text-center sm:mt-0'>
        <p className='justify-center text-center font-thin'>
          Made with{' '}
          <span role='img' aria-label='heart emoji'>
            ❤️
          </span>{' '}
          by{' '}
          <a
            className='text-yellow-600 hover:underline'
            href='https://www.linkedin.com/in/luismzmdev'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit Luis Mendez LinkedIn profile'
          >
            Luis Mendez
          </a>
        </p>
        <p className='text-center font-thin sm:text-start'>
          BigView Technical Challenge
        </p>
      </div>
      <div className='justify-center text-center'>
        <p className='mt-3 font-thin sm:mt-0'>{new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Credits;
