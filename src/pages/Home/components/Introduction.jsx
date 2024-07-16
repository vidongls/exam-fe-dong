import coffeeBag from "../../../assets/coffe-bag.svg";
import nordwoodTheme from "../../../assets/nordwood-themes.svg";

export const Introduction = () => {
	return (
		<div className="md:flex items-center">
			<div className="flex-1">
				<img src={coffeeBag} alt="" className="h-[240px] md:h-[360px] xl:h-[820px] w-full object-cover" />
			</div>
			<div className="relative flex-1">
				<img src={nordwoodTheme} alt="" className="h-[260px] md:h-[360px] xl:h-[820px] w-full object-cover" />
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-10 w-full xl:w-[638px] flex flex-col justify-center items-center">
					<h2 className="text-xl md:text-2xl xl:text-[65px] text-primary uppercase flex items-baseline gap-3 xl:gap-6 justify-center mb-2.5">
						Special <span className="text-tertiary ">coffee</span>
					</h2>
					<p className="text-primary text-center md:text-balance text-sm sm:text-xl font-light mb-4 md:mb-6 xl:mb-10">
						Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean enim. Laoreet odio
						adipiscing auctor scelerisque phasellus nisl faucibus.
					</p>
					<div className="button">Order now</div>
				</div>
			</div>
		</div>
	);
};
