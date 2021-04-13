import React from "react";
import "./styles.css";
import homeTopHeader from "../../../assets/svg/home.svg";
import phoneTopHeader from "../../../assets/svg/call.svg";
import clockTopHeader from "../../../assets/svg/time.svg";
import facebookTopHeader from "../../../assets/svg/facebook.svg";
import instagramTopHeader from "../../../assets/svg/instagram.svg";

export function TopHeader() {
  return (
    <div className="topHeader">
      <div className="topHeaderLeft">
        <ul className="navLeft">
          <li>
            <img
              src={homeTopHeader}
              alt="logoHome"
              width="15"
              height="15"
              className="iconHome"
            />
            <p className="textHeader addressHeader">
              Số 68, Lê Trọng Tấn, Hà Đông, Hà Nội
            </p>
          </li>
          <li>
            <img
              src={phoneTopHeader}
              alt="logoHome"
              width="15"
              height="15"
              className="iconHotline"
            />
            <p className="textHeader hotline">0339.714.597</p>
          </li>
          <li>
            <img
              src={clockTopHeader}
              alt="logoHome"
              width="15"
              height="15"
              className="iconClock"
            />
            <p className="textHeader clock">
              Thời gian làm việc: Thứ 2 - 6 (8h - 18h)
            </p>
          </li>
        </ul>
      </div>
      <div className="topHeaderRight">
        <a href="#">
          <img
            src={facebookTopHeader}
            alt="logoHome"
            width="15"
            height="15"
            className="iconTopRight"
          />
        </a>
        <a href="#">
          <img
            src={instagramTopHeader}
            alt="logoHome"
            width="15"
            height="15"
            className="iconTopRight"
          />
        </a>
      </div>
    </div>
  );
}
