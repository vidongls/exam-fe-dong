const Navbar = () => {
	const navs = [
		{
			label: "Home",
		},
		{
			label: "Shop",
		},
		{
			label: "Blog",
		},
		{
			label: "Pages",
		},
	];

	return (
		<div className="border-t border-b border-primary md:pl-5 xl:pl-[34px] flex-1 py-5 lg:py-0">
			<ul className="hidden lg:flex items-center">
				{navs.map((nav, idx) => (
					<li
						key={idx}
						className="py-[38px] md:mr-5 lg:mr-9 xl:mr-[50px] text-lg leading-[27px] text-primary hover:text-tertiary transition-colors duration-200 ease-in-out cursor-pointer"
					>
						{nav.label}
					</li>
				))}
			</ul>
			<button className="lg:hidden">
				<svg className="w-6 h-6 text-textMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
			</button>
		</div>
	);
};

export default Navbar;
