import React, {Component} from 'react';
import Data from '../data.json';

function getImg(src) {
  const results = src.split("/");
  const imgFileName = results[results.length - 1];
  const category = results[results.length - 2];
  console.log(category)
  switch (category) {
    case "blog":
    case "help":
    case "learning":
    case "landing-pages":
      return validateUrl(category, imgFileName);
    default:
      return src;
  }
}

function validateUrl(category, imgFileName) {
  let result = require("../../media/" + category + "/" + imgFileName);
  if (typeof result === "string" && result.indexOf("static") !== -1) return result;
  return result.default ? result.default : result;
}

function getImgUrl(src){
    let result = require(src);
    return result;
}

function Image(props) {
  return (
    <img
      className={props.className}
      id={props.id}
      src={getImg(props.src)}
      alt={props.alt}
    ></img>
  );
}

function Test() {

    console.log(Data)
    console.log(Data.header) 
    console.log(getImg(Data.header.image.src))
    
    return (
        <div>
            {
                <div className = 'banner'>
                <img src = {Data.header.image.src} alt = {Data.header.image.alt} />
                </div>
            }
        </div>
    )


}

export default Test;