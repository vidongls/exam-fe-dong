import blog1 from "../../../assets/blog1.svg";
import blog2 from "../../../assets/blog2.svg";
import blog3 from "../../../assets/blog3.svg";

export const ReadOurBlog = () => {
	return (
		<div className="mt-16 md:mt-20 xl:mt-[200px]">
			<div className="flex items-center justify-between mb-10">
				<h4 className="uppercase text-xl md:text-3xl xl:text-6xl xl:leading-[75px] text-primary">Read Our Blogs</h4>
				<span className="uppercase text-base xl:text-lg font-semibold xl:leading-[27px] text-primary cursor-pointer border-b-2 border-b-[#D0D0D0] hover:border-b-primary">
					Read Blog posts
				</span>
			</div>
			<div className="md:flex items-start justify-between gap-5">
				<div>
					<img src={blog1} alt="" className="mb-5" />
					<span className="block uppercase text-primary text-lg lg:text-2xl lg:leading-[30px] mb-2">What is the best Coffee?</span>
					<p className="text-primary font-light text-sm lg:text-base lg:leading-[27px]">
						Ullamcorper ultrices elit viverra congue velit amet. Egestas bibendum leo odio fringilla quam netus sagittis non eu
						pellentesque facilisis.
					</p>
				</div>
				<div>
					<img src={blog2} alt="" className="mb-5" />
					<span className="block uppercase text-primary text-lg lg:text-2xl lg:leading-[30px] mb-2">How coffee works for your body</span>
					<p className="text-primary font-light text-sm lg:text-base lg:leading-[27px]">
						Ullamcorper ultrices elit viverra congue velit amet. Egestas bibendum leo odio fringilla quam netus sagittis non eu
						pellentesque facilisis.
					</p>
				</div>
				<div>
					<img src={blog3} alt="" className="mb-5" />
					<span className="block uppercase text-primary text-lg lg:text-2xl lg:leading-[30px] mb-2">Cup of coffee for your happiness</span>
					<p className="text-primary font-light text-sm lg:text-base lg:leading-[27px]">
						Ullamcorper ultrices elit viverra congue velit amet. Egestas bibendum leo odio fringilla quam netus sagittis non eu
						pellentesque facilisis.
					</p>
				</div>
			</div>
		</div>
	);
};
