const Footer = () => {
  return (
    <div className='relative bottom-0 flex h-24 w-full flex-col items-center justify-around bg-neutral-800 px-5 py-3 text-center text-white sm:flex-row sm:justify-between'>
      <div className='text-sm'>
        <p className='text-center sm:text-start'>
          Made with
          <span role='img' aria-label='heart-emoji'>
            ❤️
          </span>
          by{' '}
          <a
            className='text-yellow-600'
            href='https://www.linkedin.com/in/luismzmdev'
            target='_blank'
            rel='noreferrer'
          >
            Luis Mendez
          </a>
        </p>
        <p className='text-center sm:text-start'>BigView Technical Challenge</p>
      </div>
      <div>
        <p className='mt-3 text-end sm:mt-0'>{new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
