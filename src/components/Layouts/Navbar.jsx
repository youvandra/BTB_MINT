import React, { useContext, useRef, useState } from "react";
import { Hooks } from "providers";
import { Link, useLocation } from "react-router-dom";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import styled from "styled-components";
import Connect from "components/Transactions";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function Navbar() {
  const { pathname } = useLocation();
  const { setScroll, scroll, barMobile, setBarMobile, wallet_, setWallet_ } =
    useContext(Hooks);
  const ConnectButton = styled(WalletDialogButton);
  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.focus();
  };
  return (
    <>
      <div
        // className={`navbar active`}
        className={`navbar ${scroll && "active"}`}
        style={{ zIndex: "999999" }}
      >
        <div
          style={{
            opacity: 1,
          }}
        >
          <ul className="">
            {/* <div style={{ display: "block" }} ref={myRefname}>
              {!wallet_ && <Connect />}
            </div> */}

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
            <li>
              {pathname === "/" ? (
                <a href="#home-roadmap">ROADMAP</a>
              ) : (
                <a href="/#home-roadmap">ROADMAP</a>
              )}
            </li>

            {/* <li>
              <a href="#home-desc">TEAM</a>
            </li> */}
            <li>
              <a>{!wallet_ && <Connect navbar={true} mobile={false} />}</a>
            </li>
            {/* <li>
              {pathname === "/" ? (
                <a href="#home-faq">FAQ</a>
              ) : (
                <a href="/#home-faq">FAQ</a>
              )}
            </li> */}
            <li>
              <a href="https://twitter.com/internetkidsio">
                <img src={Twitter} alt="" width="25" />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/bkWJHedf3X">
                <img src={Discord} alt="" width="25" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
