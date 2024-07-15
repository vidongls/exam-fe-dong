import follow1 from "../../../assets/fl1.svg";
import follow2 from "../../../assets/fl2.svg";
import follow3 from "../../../assets/fl3.svg";
import follow4 from "../../../assets/fl4.svg";
import follow5 from "../../../assets/fl5.svg";
import follow6 from "../../../assets/fl6.svg";

export const FollowOur = () => {
	return (
		<div className="mt-[200px]">
			<h4 className="uppercase text-[34px] leading-[42px] text-primary text-center mb-5">
				Follow our INstagram
				<a href="#" className="hover:text-tertiary">
					#Beanie
				</a>
			</h4>
			<div className="flex items-center gap-5">
				<img src={follow1} alt="" />
				<img src={follow2} alt="" />
				<img src={follow3} alt="" />
				<img src={follow4} alt="" />
				<img src={follow5} alt="" />
				<img src={follow6} alt="" />
			</div>
		</div>
	);
};
