import imageLeft from "../../../assets/icons/description-left.svg";
import imageRight from "../../../assets/icons/description-right.svg";

export const Description = () => {
	return (
		<div className="relative py-[200px] text-center flex items-center justify-center">
			<img src={imageLeft} alt="" className="absolute left-0 -top-5 " />
			<p className="w-[1164px] font-light text-[38px] text-primary leading-[68px] italic">
				Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean enim. Laoreet odio adipiscing
				auctor scelerisque phasellus nisl faucibus.
			</p>
			<img src={imageRight} alt="" className="absolute right-0 bottom-0" />
		</div>
	);
};
