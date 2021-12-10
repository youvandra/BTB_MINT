import React from "react";
import Discord from "assets/img/icons8-discord.svg";
import Twitter from "assets/img/icons8-twitter.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-wrap">
          <div className="content1">
            <p class="title">Big Time Bikers</p>
            <p>
              Copyright © Big Time Bikers
              <span style={{ color: "#6aff6a" }}> Solana</span>
            </p>
          </div>
          <div className="content2">
            {/* <img src={Icon} alt="" srcset="" width="180" height="auto" /> */}
          </div>
          <div className="content3">
            <a href="https://discord.gg/bkWJHedf3X">
              <img src={Discord} alt="" width="30" />
            </a>
            <a href="https://twitter.com/internetkidsio">
              <img src={Twitter} alt="" width="30" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
