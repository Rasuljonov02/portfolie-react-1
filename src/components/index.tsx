import { Routes as Switch, Route, useNavigate, Navigate } from "react-router-dom";



import Home from "./pajes/Home";
import "./main.css";

const Main = () => {


  return (
    <div>

      <Switch>

        <Route index path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> */}
         <Route path="/*" element={<Navigate to='/home' />} />
      </Switch>
    </div>
  );
};

export default Main;
