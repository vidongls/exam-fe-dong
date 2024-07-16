import { useRef } from "react";
import Slider from "react-slick/lib/slider";

export const Quote = () => {
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
	};

	return (
		<div className="mt-10 md:mt-12 xl:mt-[80px] px-4 md:px-0">
			<div className="flex items-center justify-center md:justify-between">
				<div
					onClick={() => sliderRef.current.slickPrev()}
					className="cursor-pointer min-w-10 w-10 h-10 xl:w-[50px] xl:h-[50px] border border-[#AEAEAE] rounded-full group flex items-center justify-center hover:border-primary hover:bg-primary transition-all duration-200 ease-linear"
				>
					<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.0308 0.28125L1.03075 11.2812L0.34375 12.0002L1.03075 12.7192L12.0308 23.7192L13.4688 22.2812L3.18675 12.0002L13.4697 1.71925L12.0308 0.28125Z"
							fill="#AEAEAE"
							className="group-hover:fill-white"
						/>
					</svg>
				</div>
				<div className="w-full max-w-72 md:max-w-md xl:max-w-screen-lg px-4">
					<Slider ref={sliderRef} {...settings}>
						<div className="text-center">
							<div className="text-primary font-light text-l md:text-lg xl:text-[28px] italic leading-[30px] md:leading-9 xl:leading-[68px] ">
								“Habitant aliquet sed suspendisse lectus sit gravida sit morbi augue. Porta cursus diam sit velit mi. Maecenas
								scelerisque tellus nulla ut vitae amet morbi platea blandit vestibulum dignissim.”
							</div>
							<div className="text-lg md:text-lg font-normal leading-[30px] text-primary mt-5">Sarah Anderson</div>
						</div>
						<div className="text-center">
							<div className="text-primary font-light text-xl md:text-lg xl:text-[28px] italic leading-[30px] md:leading-9 xl:leading-[68px]">
								“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at odio vitae dui feugiat tincidunt.”
							</div>
							<div className="text-lg md:text-lg font-normal leading-[30px] text-primary mt-5">John Doe</div>
						</div>
					</Slider>
				</div>
				<div
					onClick={() => sliderRef.current.slickPrev()}
					className="cursor-pointer min-w-10 w-10 h-10 xl:w-[50px] xl:h-[50px] border border-[#AEAEAE] rounded-full flex items-center group justify-center hover:border-primary hover:bg-primary transition-all duration-200 ease-linear"
				>
					<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.97025 0.28125L0.53125 1.72025L10.8133 12.0002L0.53325 22.2812L1.97025 23.7192L12.9703 12.7192L13.6573 12.0002L12.9703 11.2812L1.97025 0.28125Z"
							fill="#AEAEAE"
							className="group-hover:fill-white"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};
