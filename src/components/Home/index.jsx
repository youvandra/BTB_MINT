import React, { useContext, useEffect, useState } from "react";
import Banner from "components/Home/Banner";
import Desc from "components/Home/Desc";
import Roadmap from "components/Home/Roadmap";
import Zoom from "react-reveal/Zoom";
import { Hooks } from "providers";
function Index() {
  const { timer, setTimer } = useContext(Hooks);
  return (
    <div>
      <div className="wrap-body">
        <Zoom top>
          <Banner />
        </Zoom>
        <div
          id="home-desc"
          className=""
          style={{
            background: "rgb(40 40 40)",
            paddingTop: "30px",
          }}
        >
          <Desc />
        </div>
        <div
          id="home-roadmap"
          className="p-sm-auto p-2"
          style={{
            background: "rgb(18 18 18 / 0%)",
            marginTop: "30px",
            paddingBottom: "70px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Roadmap />
        </div>
      </div>
    </div>
  );
}

export default Index;
