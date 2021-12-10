import React, { useContext } from "react";
import { Hooks } from "providers";
import url3 from "assets/img/img_hero.gif";
function Desc() {
  const { barMobile, setBarMobile } = useContext(Hooks);
  return (
    <>
      <div className="home-desc" id="home-desc">
        <div className="container d-flex flex-column-reverse flex-md-row mx-auto justify-content-center align-items-center">
          <div className="col-md-6 col-12 text-md-left text-left">
            <h3 className="text-left super mb-md-4 mb-0 text-md-left text-center"></h3>

            <div className="d-flex ">
              <div className="col">
                <h1 className="pt-0 mt-0 mb-0 pb-0 text-left pb-3">
                  BIG TIME BIKERS
                </h1>
                <p
                  className="pt-0 mt-0"
                  style={{ fontSize: "16px", color: "#8E8E8E" }}
                >
                  The year is 2099. After a nuclear apocalypse, the United
                  States and most of the world is a desolate wasteland. All
                  struggle to survive against the dangers of the
                  post-apocalyptic world including bandits and radioactive
                  species. One group is aiming to change the horrible quality of
                  life: the bikers. <br /> The bikers, or Big Time Bikers as
                  called by the rest of the wasteland, have came together in
                  order to build a strong community. They hope that together,
                  they will be able to make the world a sustainable place to
                  live once again.
                </p>
              </div>
            </div>
          </div>
          <div className="p-0 m-0 col-md-6 col-12 d-flex mx-auto w-100 justify-content-center align-items-center">
            <img src={url3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Desc;
