import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";

AOS.init();

interface HomeProps {}

const Footr = (props: HomeProps) => {
	return (
		<div  className=" border-t-2 border-[#333]">

			<div className="flex items-center w-full justify-between pl-[60px] pr-[60px]">
				<div  className=" flex items-center gap-3">
					<a
						className="liz liz1 hover:text-white"
						href="https://www.linkedin.com/in/muhammadjon-rasuljonov-03299125b/"
					>
						Linkidin{" "}
					</a>
					<a
						className="liz liz1 hover:text-white"
						href="https://www.instagram.com/muhammad_rasuljonov02/"
					>
						Instagram{" "}
					</a>
					<a className="liz liz1 hover:text-white" href="https://t.me/muhammad_4202">
						Telegram{" "}
					</a>
					<a className="liz liz1 hover:text-white" href="https://twitter.com/MUHAMMAD_4202">
						Twitr
					</a>
				</div>

				<div>
					<p className="liz hover:text-white">© 2024 All rights reserved.</p>
				</div>
			</div>
		</div>
	);
};

export default Footr;
