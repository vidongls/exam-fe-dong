import Layout from "../../layout/Layout";
import { ArrivalBestSelling } from "./components/ArrivalBestSelling";
import { Categories } from "./components/Categories";
import { CoffeeBest } from "./components/CoffeeBest";
import { Description } from "./components/Description";
import { FollowOur } from "./components/FollowOur";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { QuickSection } from "./components/QuickSection";
import { Quote } from "./components/Quote";
import { ReadOurBlog } from "./components/ReadOurBlog";
import { SubscribeUs } from "./components/SubscribeUs";

const Home = () => {
	return (
		<Layout>
			<div className="px-3 md:px-8 xl:px-[76px]">
				<Introduction />
				<Description />
				<CoffeeBest />
				<Quote />
				<Categories />
				<ArrivalBestSelling />
				<SubscribeUs />
			</div>
			<QuickSection />
			<div className="px-3 md:px-8 xl:px-[76px]">
				<ReadOurBlog />
				<FollowOur />
			</div>
			<Footer />
		</Layout>
	);
};

export default Home;
