interface HomeProps {}

const Footr = (props: HomeProps) => {
	return (
		<div className=" border-t-2 border-[#333]">

			<div className="flex items-center w-full justify-between pl-[60px] pr-[60px]">
				<span className=" flex items-center gap-3">
					<a
						className="liz hover:text-white"
						href="https://www.linkedin.com/in/muhammadjon-rasuljonov-03299125b/"
					>
						Linkidin{" "}
					</a>
					<a
						className="liz hover:text-white"
						href="https://www.instagram.com/muhammad_rasuljonov02/"
					>
						Instagram{" "}
					</a>
					<a className="liz hover:text-white" href="https://t.me/muhammad_4202">
						Telegram{" "}
					</a>
					<a className="liz hover:text-white" href="https://twitter.com/MUHAMMAD_4202">
						Twitr
					</a>
				</span>
				<span>
					<p className="liz hover:text-white">© 2022 All rights reserved.</p>
				</span>
			</div>
		</div>
	);
};

export default Footr;
