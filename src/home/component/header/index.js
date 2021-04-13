import React from "react";
import "./styles.css";
import { TopHeader } from "./topHeader";
import { InfoHeader } from "./infoHeader";

var imaHeader =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1jHa1AwoxJMeABRSEU3poTRbnrHnEKNl4g&usqp=CAU";

export function HeaderHome({ name }) {
  return (
    <header className="component-header-home">
      <TopHeader />
      <InfoHeader />
      {/* <div className="component-header-avatar">
        <img src={imaHeader} width="50" height="50" />
      </div>
      <h1>long bem</h1> */}
    </header>
  );
}
