import arrival1 from "../../../assets/arrival1.svg";
import arrival2 from "../../../assets/arrival2.svg";
import arrival3 from "../../../assets/arrival3.svg";
import arrival4 from "../../../assets/arrival4.svg";
import arrival5 from "../../../assets/arrival5.svg";

import best1 from "../../../assets/best-1.svg";
import best2 from "../../../assets/best-2.svg";
import best3 from "../../../assets/best-3.svg";
import best4 from "../../../assets/best-4.svg";
import best5 from "../../../assets/best-5.svg";

export const ArrivalBestSelling = () => {
	const arrivals = [
		{
			title: "Coconut Kiss",
			description: "A strong and concentrated shot of coffee.",
			price: "$2.99",
			imgUrl: arrival1,
		},
		{
			title: "Pumpkin Spice Surprise",
			description: "A shot of espresso diluted with hot water.",
			price: "$3.49",
			imgUrl: arrival2,
		},
		{
			title: "Toffee Temptation",
			description: "Equal parts of espresso, steamed milk, and foam, topped with cocoa.",
			price: "$3.99",
			imgUrl: arrival3,
		},
		{
			title: "Gingerbread Galore",
			description: "Creamy espresso with steamed milk and a thin layer of foam.",
			price: "$4.49",
			imgUrl: arrival4,
		},
		{
			title: "Salted Caramel Sip",
			description: "A nutty and indulgent latte with a hint of macadamia flavor.",
			price: "$3.99",
			imgUrl: arrival5,
		},
	];

	const bestSellers = [
		{
			title: "Cinnamon Swirl",
			description: "A strong and concentrated shot of coffee.",
			price: "$2.99",
			imgUrl: best1,
		},
		{
			title: "Hazelnut Heaven",
			description: "A shot of espresso diluted with hot water.",
			price: "$3.49",
			imgUrl: best2,
		},
		{
			title: "Peppermint Perk",
			description: "Equal parts of espresso, steamed milk, and foam, topped with cocoa.",
			price: "$3.99",
			imgUrl: best3,
		},
		{
			title: "Berry Blast",
			description: "Creamy espresso with steamed milk and a thin layer of foam.",
			price: "$4.49",
			imgUrl: best4,
		},
		{
			title: "Macadamia Nut Latte",
			description: "A nutty and indulgent latte with a hint of macadamia flavor.",
			price: "$3.99",
			imgUrl: best5,
		},
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 mt-16 md:mt-20 xl:mt-[200px] lg:gap-[140px] gap-[80px]">
			<div>
				<h4 className="uppercase text-xl md:text-3xl xl:text-[60px] xl:leading-[75px] text-primary mb-4 md:mb-6 xl:mb-10">New arrivals</h4>
				{arrivals.map((item, idx) => (
					<div className="flex items-center mb-5 last-of-type:mb-0" key={idx}>
						<img src={item.imgUrl} alt="" className="w-[60px] h-[60px]  xl:w-[90px] xl:h-[90px] rounded-full mr-[18px]" />
						<div className="flex-1">
							<div className="uppercase text-primary text-lg xl:text-2xl leading-[30px] mb-3 flex items-baseline justify-between">
								<span className="whitespace-nowrap">{item.title}</span>
								<hr />
								<span>{item.price}</span>
							</div>
							<span className="block text-primary font-light leading-[28px]">{item.description}</span>
						</div>
					</div>
				))}
				<span className="text-primary text-lg border-b-2 inline-block border-[#D0D0D0] uppercase mt-10 hover:-translate-y-1 cursor-pointer hover:text-tertiary hover:border-tertiary transition-all duration-150 ease-linear">
					view all
				</span>
			</div>
			<div>
				<h4 className="uppercase text-xl md:text-3xl xl:text-[60px] xl:leading-[75px] text-primary md:mb-6 xl:mb-10">Best Selling</h4>
				{bestSellers.map((item, idx) => (
					<div className="flex items-center mb-5 last-of-type:mb-0" key={idx}>
						<img src={item.imgUrl} alt="" className="w-[60px] h-[60px]  xl:w-[90px] xl:h-[90px] rounded-full mr-[18px]" />
						<div className="flex-1">
							<div className="uppercase text-primary text-lg xl:text-2xl leading-[30px] mb-3 flex items-baseline justify-between">
								<span className="whitespace-nowrap">{item.title}</span>
								<hr />
								<span>{item.price}</span>
							</div>
							<span className="block text-primary font-light leading-[28px]">{item.description}</span>
						</div>
					</div>
				))}
				<span className="text-primary text-lg border-b-2 inline-block border-[#D0D0D0] uppercase mt-10 hover:-translate-y-1 cursor-pointer hover:text-tertiary hover:border-tertiary transition-all duration-150 ease-linear">
					view all
				</span>
			</div>
		</div>
	);
};
