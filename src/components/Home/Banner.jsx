import React, { useContext, useEffect } from "react";
import Connect from "components/Transactions";
import { Hooks } from "providers";
function Banner() {
  const {
    setScroll,
    scroll,
    barMobile,
    setBarMobile,
    wallet_,
    setWallet_,
    datas,
  } = useContext(Hooks);
  useEffect(() => {}, [datas, wallet_]);
  return (
    <>
      <div id="banner" className="home-banner ">
        <div className="home-banner-wrapping">
          <div className="desc"></div>
          <div className="box">
            <div className="text">LAUNCHING ON : 2nd January 2022 UTC</div>
            {wallet_ && (
              <div className="text">{datas?.[0] + "/" + datas?.[1]}</div>
            )}
            <div className="stat">
              {!wallet_ && <Connect />}
              {wallet_ && <Connect />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
