import Hedr from "../home/Hedr";
import ozim from "../../img/2.jpg";
import Footr from "../home/Footr";
interface HomeProps {}

const Home = (props: HomeProps) => {
	return (
		<div id="home">
			<Hedr />
			<div className="w-[100%]  grid place-items-center">
				<div className=" flex items-center  h-[600px] gap-4 ml-[200px]  justify-between">
					<div data-aos="zoom-in-up">
						<img
							className="rounded-[50%] w-[400px] bg-gray-700 border-8 border-gray-700"
							style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.80)" }}
							src={ozim}
							alt=""
						/>
					</div>
					<div data-aos="zoom-in-down" className=" max-w-[750px] flex flex-col gap-5">
						<p className="fr">Fronten devolepmen</p>
						<h1 className="ism p-2">Rasuljonov Muhammad</h1>
						<p className="text max-w-[650px]">
							Do you need to create a website? When creating websites, I ensure the overall design
							from design to implementation. I also ensure the perfect technical aspect, so that
							everything runs exactly as it should. If you would be interested in my portfolio or
							experience - write to me!
						</p>
						<span className=" flex gap-6">
							<button className="btn">Portfolio</button>
							<button className="btn1">Kontakt</button>
						</span>
					</div>
				</div>
			</div>
			<Footr/>
		</div>
	);
};

export default Home;
