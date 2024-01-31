import React from "react";
import NavBar from "./Components/NavBar";
import { Outlet } from "react-router";
import Pages_Btns from "./Components/Pages_Btns";
function App() {
  return (
      <div className=" relative overflow-x-hidden ">
          <NavBar />
          <Pages_Btns />

          <div className=" mt-[70px] md:mt-[92px]">
              <Outlet />
          </div>
      </div>
  );
}

export default App;
