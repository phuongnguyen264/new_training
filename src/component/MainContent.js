import React, { Component } from "react";
import Item1 from "../item1.png";
import Item2 from "../item2.png";
import Data from "../data/data.json";
import MainContentImage from "./MainContentImage";
import MainContentDes from "./MainContentDes";

class MainContent extends Component {
  render() {
    const dataNews = Data.news;
    return (
      <div className="MainContent">
        {dataNews.map((item) => (
          <div className="MainContent_item">
          <MainContentImage itemImage = {item.image} />
          <MainContentDes item = {item} />
          </div>
        ))}
      </div>
    );
  }
}

export default MainContent;
