import { useRef } from "react";
import image1 from "../../../assets/coffee-image1.svg";

import Slider from "react-slick/lib/slider";

export const CoffeeBest = () => {
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div>
			<div className="flex items-center justify-between">
				<h4 className="uppercase text-[60px] leading-[75px] text-primary">shop Best coffee</h4>
				<div className="flex items-center">
					<span className="uppercase text-lg font-semibold leading-[27px] text-primary cursor-pointer mr-[50px] border-b-2 border-b-[#D0D0D0] hover:border-b-primary">
						view all
					</span>
					<button
						onClick={() => sliderRef.current.slickPrev()}
						className="bg-[#E9E9E9] w-[46px] h-[46px] rounded-[10px] flex items-center justify-center cursor-pointer mr-4 group hover:bg-primary transition-all duration-200 ease-linear"
					>
						<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12.0308 0.28125L1.03075 11.2812L0.34375 12.0002L1.03075 12.7192L12.0308 23.7192L13.4688 22.2812L3.18675 12.0002L13.4697 1.71925L12.0308 0.28125Z"
								fill="#362C27"
								className="group-hover:fill-secondary"
							/>
						</svg>
					</button>
					<button
						onClick={() => sliderRef.current.slickNext()}
						className="bg-[#E9E9E9] w-[46px] h-[46px] rounded-[10px] flex items-center justify-center cursor-pointer group hover:bg-primary transition-all duration-200 ease-linear"
					>
						<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.97025 0.28125L0.53125 1.72025L10.8133 12.0002L0.53325 22.2812L1.97025 23.7192L12.9703 12.7192L13.6573 12.0002L12.9703 11.2812L1.97025 0.28125Z"
								fill="#362C27"
								className="group-hover:fill-secondary"
							/>
						</svg>
					</button>
				</div>
			</div>
			<Slider ref={sliderRef} {...settings}>
				{[...Array(10)].map((_, idx) => (
					<div className="p-4 flex flex-col" key={idx}>
						<img src={image1} className="w-full object-cover rounded-[10px] " alt="Best Coffee" />
						<div className="mt-6 flex flex-col gap-[6px] text-center lg:text-left">
							<span className="uppercase text-2xl md:text-[30px] lg:text-[34px] font-normal text-primary">Caramelicious</span>
							<span className="text-tertiary text-2xl md:text-[30px] lg:text-[34px]">$29.00</span>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};
