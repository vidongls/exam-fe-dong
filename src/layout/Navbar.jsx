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
		<div className="border-t border-b border-primary md:pl-5 xl:pl-[34px] flex-1">
			<ul className="flex items-center">
				{navs.map((nav, idx) => (
					<li
						key={idx}
						className="py-[38px] md:mr-5 lg:mr-9 xl:mr-[50px] text-lg leading-[27px] text-primary hover:text-tertiary transition-colors duration-200 ease-in-out cursor-pointer"
					>
						{nav.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
