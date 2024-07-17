import { useState } from "react";
import iconSearch from "../assets/icons/search-icon.svg";
const Navbar = () => {
	const [isExpand, setIsExpand] = useState(false);

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

	const onExpand = () => {
		setIsExpand((prev) => !prev);
	};

	return (
		<div className="border-t border-b border-primary md:pl-5 xl:pl-[34px] flex-1 py-5 lg:py-0 relative">
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
			<div id="nav-icon1" className={`lg:hidden  ${isExpand ? "open " : ""}`} onClick={onExpand}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isExpand && (
				<div className={"fixed bg-gray-400 w-screen h-screen left-0 top-0 z-50 bg-opacity-50 lg:hidden"}>
					<div className="w-[300px] h-full bg-white p-6">
						<div id="nav-icon1" className={isExpand ? "open" : ""} onClick={onExpand}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className=" items-center relative w-full flex mt-8">
							<input
								type="text"
								className=" border border-secondary-50 text-primary text-sm rounded-full h-12 pl-[22px] w-full placeholder:text-primary focus:ring-secondary-50 focus-visible:border-secondary-50 focus:border-secondary-50 ring-0"
								placeholder="Search here..."
							/>
							<img src={iconSearch} alt="" className="absolute top-1/2 -translate-y-1/2 right-4" />
						</div>
						<ul className="flex items-start justify-start flex-col">
							{navs.map((nav, idx) => (
								<li
									key={idx}
									className="py-6 text-left md:mr-5 lg:mr-9 w-full xl:mr-[50px] text-lg leading-[27px] text-primary hover:text-tertiary transition-colors duration-200 ease-in-out cursor-pointer"
								>
									{nav.label}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
