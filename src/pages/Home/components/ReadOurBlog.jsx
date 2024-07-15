import blog1 from "../../../assets/blog1.svg";
import blog2 from "../../../assets/blog2.svg";
import blog3 from "../../../assets/blog3.svg";

export const ReadOurBlog = () => {
	return (
		<div className="mt-[200px]">
			<div className="flex items-center justify-between mb-10">
				<h4 className="uppercase text-[60px] leading-[75px] text-primary">Read Our Blogs</h4>
				<span className="uppercase text-lg font-semibold leading-[27px] text-primary cursor-pointer mr-[50px] border-b-2 border-b-[#D0D0D0] hover:border-b-primary">
					Read Blog posts
				</span>
			</div>
			<div className="flex items-start justify-between gap-5">
				<div>
					<img src={blog1} alt="" className="mb-5" />
					<span className="block uppercase text-primary text-2xl leading-[30px]">What is the best Coffee?</span>
					<p className="text-primary font-light text-base leading-[27px]">
						Ullamcorper ultrices elit viverra congue velit amet. Egestas bibendum leo odio fringilla quam netus sagittis non eu
						pellentesque facilisis.
					</p>
				</div>
				<div>
					<img src={blog2} alt="" className="mb-5" />
					<span className="block uppercase text-primary text-2xl leading-[30px]">How coffee works for your body</span>
					<p className="text-primary font-light text-base leading-[27px]">
						Ullamcorper ultrices elit viverra congue velit amet. Egestas bibendum leo odio fringilla quam netus sagittis non eu
						pellentesque facilisis.
					</p>
				</div>
				<div>
					<img src={blog3} alt="" className="mb-5" />
					<span className="block uppercase text-primary text-2xl leading-[30px]">Cup of coffee for your happiness</span>
					<p className="text-primary font-light text-base leading-[27px]">
						Ullamcorper ultrices elit viverra congue velit amet. Egestas bibendum leo odio fringilla quam netus sagittis non eu
						pellentesque facilisis.
					</p>
				</div>
			</div>
		</div>
	);
};
