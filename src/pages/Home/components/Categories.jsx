import category1 from "../../../assets/category-1.svg";
import category2 from "../../../assets/category-2.svg";
import category3 from "../../../assets/category-3.svg";
import category4 from "../../../assets/category-4.svg";

export const Categories = () => {
	return (
		<div className="mt-14 md:mt-[100px] xl:mt-[200px]">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				<img src={category1} alt="" className="w-full h-full object-cover" />
				<div className="p-[15px] h-full ">
					<div className="border border-[#D2CFCC]  h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
						<span className="uppercase text-2xl leading-[30px] text-primary mb-3">Instant Coffees</span>
						<p className="font-light text-primary text-base leading-7 mb-3">
							Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
						</p>
						<span className="text-primary text-lg border-b-2 border-[#D0D0D0] hover:-translate-y-1 cursor-pointer hover:text-tertiary hover:border-tertiary transition-all duration-150 ease-linear">
							Shop category
						</span>
					</div>
				</div>
				<img src={category2} alt="" className="w-full h-full object-cover" />
				<div className="p-[15px] h-full ">
					<div className="border border-[#D2CFCC]  h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
						<span className="uppercase text-2xl leading-[30px] text-primary mb-3">Coffee Makers</span>
						<p className="font-light text-primary text-base leading-7 mb-3">
							Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
						</p>
						<span className="text-primary text-lg border-b-2 border-[#D0D0D0] hover:-translate-y-1 cursor-pointer hover:text-tertiary hover:border-tertiary transition-all duration-150 ease-linear">
							Shop category
						</span>
					</div>
				</div>
				<div className="p-[15px] h-full ">
					<div className="border border-[#D2CFCC]  h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
						<span className="uppercase text-2xl leading-[30px] text-primary mb-3">Coffee Accessories</span>
						<p className="font-light text-primary text-base leading-7 mb-3">
							Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
						</p>
						<span className="text-primary text-lg border-b-2 border-[#D0D0D0] hover:-translate-y-1 cursor-pointer hover:text-tertiary hover:border-tertiary transition-all duration-150 ease-linear">
							Shop category
						</span>
					</div>
				</div>{" "}
				<img src={category3} alt="" className="w-full h-full object-cover" />
				<div className="p-[15px] h-full ">
					<div className="border border-[#D2CFCC]  h-full flex py-[121px] items-center justify-center text-center flex-col px-[38px]">
						<span className="uppercase text-2xl leading-[30px] text-primary mb-3">Coffee Gift Sets</span>
						<p className="font-light text-primary text-base leading-7 mb-3">
							Euismod eget id posuere nisl ut me duis in lectus elementum tincidunt augue ut neger in tincidunt amet et ultrices.
						</p>
						<span className="text-primary text-lg border-b-2 border-[#D0D0D0] hover:-translate-y-1 cursor-pointer hover:text-tertiary hover:border-tertiary transition-all duration-150 ease-linear">
							Shop category
						</span>
					</div>
				</div>{" "}
				<img src={category4} alt="" className="w-full h-full object-cover" />
			</div>
		</div>
	);
};
