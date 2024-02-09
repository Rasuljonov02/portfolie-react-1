import React, { useEffect, useRef } from "react";
import Hedr from "../home/Hedr";
import ozim from "../../img/2.jpg";
import Footr from "../home/Footr";
import Typed from "typed.js";

interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const typedRef = useRef<Typed | undefined>();

  useEffect(() => {
    if (elRef.current) {
      typedRef.current = new Typed(elRef.current, {
        strings: ["Rasuljonov Muhammad", "I Frontend Developer"],
        typeSpeed: 80,
        backDelay: 500,
        loop: true,
        loopCount: Infinity,
        startDelay: 500,
        backSpeed: 90,
        showCursor: true,
        cursorChar: "",
        autoInsertCss: true,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="home" className="w-full h-full">
      <div className="fixed w-full top-0 left-0 ">
        <Hedr />
      </div>
      <div className="w-full h-[88vh] grid place-items-center">
        <div className="flex items-center h-[80vh] gap-8  flex-wrap">
          <div data-aos="zoom-in-up">
            <div className="loader">
              <span></span>
            </div>
            <img className="rounded-[50%] w-[380px] bg-gray-700 border-8 border-gray-700 absolute z-10 top-[0] " style={{ boxShadow: "0px 0px 50px 0px rgba(0, 0, 0, 0.80)" }} src={ozim} alt="" />
          </div>
          <div data-aos="zoom-in-down" className="max-w-[750px] flex flex-col gap-2">
            <span className="ism p-2 h-[80px]" ref={elRef} />

            <p className="text max-w-[650px]">Do you need to create a website? When creating websites, I ensure the overall design from design to implementation. I also ensure the perfect technical aspect so that everything runs exactly as it should. If you would be interested in my portfolio or experience - write to me!</p>
            <span className="flex gap-6">
              <button className="btn">Portfolio</button>
              <a href="tel:+998931424202" className="btn1">
                Kontakt
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <Footr />
      </div>
    </div>
  );
};

export default Home;
