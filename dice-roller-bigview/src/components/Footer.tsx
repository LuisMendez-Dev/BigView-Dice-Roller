const Footer = () => {
	return (
		<div
			className="relative bottom-0 w-full h-24 
			flex flex-col justify-around items-center text-center 
			sm:flex-row sm:justify-between 
			bg-neutral-800 text-white px-5 py-3"
		>
			<div className="text-sm">
				<p className="text-center sm:text-start">
					Made with
					<span role="img" aria-label="heart-emoji">
						❤️
					</span>
					by{" "}
					<a
						className="text-yellow-600"
						href="https://www.linkedin.com/in/luismzmdev"
						target="_blank"
						rel="noreferrer"
					>
						Luis Mendez
					</a>
				</p>
				<p className="text-center sm:text-start">BigView Technical Challenge</p>
			</div>
			<div>
				<p className="text-end mt-3 sm:mt-0">{new Date().getFullYear()}</p>
			</div>
		</div>
	);
};

export default Footer;
