import "./main.css";



interface HomeProps {}


const Hedr = (props: HomeProps) => {
	return (
		<div>
			<div className="flex items-center justify-between pl-[60px] pr-[60px] pt-[40px] text-white">
				<span className="flex items-center">
					<h1 className="logo">R ... </h1>
					<h1 className="logo1"> M</h1>

				</span>
				<span className=" flex items-center w-[500px] justify-between gap-3">
					<p className="home hover:text-white" >Home</p>
					<p className="home hover:text-white">Front-end skills</p>
					<p className="home hover:text-white">Portfolio</p>
					<p className="home hover:text-white">Kontakt</p>
				</span>
			</div>
		</div>
	);
};

export default Hedr;
