import React, { useContext, useEffect } from "react";
import { Hooks } from "providers";
import Connect from "components/Transactions";
import { Link, useLocation } from "react-router-dom";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function BarMobile() {
  const { pathname } = useLocation();
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  useEffect(() => {}, [barMobile]);
  return (
    <>
      <div className={`bar-mobile ${barMobile && "active"}`}>
        <ul>
          <li>
            {pathname === "/" ? (
              <a href="#banner">HOME</a>
            ) : (
              <a href="/#banner">HOME</a>
            )}
          </li>
          <li>
            {pathname === "/" ? (
              <a href="#home-desc">DESCRIPTION</a>
            ) : (
              <a href="/#home-desc">DESCRIPTION</a>
            )}
          </li>
          {/* <li>
            <a
              href="https://internetkids.shop/"
              onClick={() => setBarMobile(!barMobile)}
            >
              CLOTHING
            </a>
          </li>
          <li>
            <Link to="/thegame" onClick={() => setBarMobile(!barMobile)}>
              THE GAME
            </Link>
          </li> */}
          <li>
            {pathname === "/" ? (
              <a href="#home-roadmap">ROADMAP</a>
            ) : (
              <a href="/#home-roadmap">ROADMAP</a>
            )}
          </li>
          <li>
            <a>{!wallet_ && <Connect navbar={false} mobile={true} />}</a>
          </li>
          <li className="col-6 d-flex mx-auto">
            <a href="https://discord.gg/bkWJHedf3X" className="col-6">
              <img src={Discord} alt="" width="30" />
            </a>
            <a href="https://twitter.com/internetkidsio" className="col-6">
              <img src={Twitter} alt="" width="30" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
//sd
export default BarMobile;
