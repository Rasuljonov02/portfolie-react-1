import Footr from "../home/Footr";
import Hedr from "../home/Hedr";

interface PortfolioProps {}

const Portfolio = (props: PortfolioProps) => {
 return <>
<Hedr/>
 <div id="portfolio">
  <h1>Portfolie</h1>
 </div>
 <Footr/>
 </>
}

export default Portfolio;