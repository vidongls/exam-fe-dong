import coffeeBag from "../../../assets/coffe-bag.svg";
import nordwoodTheme from "../../../assets/nordwood-themes.svg";

export const Introduction = () => {
	return (
		<div className="flex items-center">
			<img src={coffeeBag} alt="" className="h-[820px] flex-1 w-full object-cover" />
			<div className="relative flex-1">
				<img src={nordwoodTheme} alt="" className="h-[820px] w-full object-cover" />
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  z-10 w-[638px] flex flex-col justify-center items-center">
					<h2 className="text-[65px] text-primary uppercase flex items-baseline gap-6 justify-center mb-2.5">
						Special <span className="text-tertiary ">coffee</span>
					</h2>
					<p className="text-primary text-center text-xl font-light mb-10">
						Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean enim. Laoreet odio
						adipiscing auctor scelerisque phasellus nisl faucibus.
					</p>
					<div className="button">Order now</div>
				</div>
			</div>
		</div>
	);
};
