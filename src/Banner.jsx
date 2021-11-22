import { Button } from "@material-ui/core";
import  Search  from "./Search";
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import "./Banner.css";
const Banner = () => {
        const navigate= useNavigate();
        const [showSearch, setshowSearch] = useState(false)
   function onclickHandler(){
    //    setdate("Hide");
        setshowSearch(!showSearch);
   }
  return (
      <>
    <div className="banner">
      <div className="banner-search">
            <Button variant="outlined" className="banner-searchButton" onClick={
              onclickHandler} >{showSearch?"Hide":"Search Dates"}</Button>
              {showSearch &&<Search/>}
      </div>
      <div className="banner-info">
        <h1>Get out and stretch<br /> your imagination</h1>
        <h5>
            Plan a different kind of <br />
            gateway to uncover the hiddend <br/>
            gems near you
        </h5>
        <Button variant="outlined" onClick={()=>{
          navigate('/search');
        }}>Explore Nearby</Button>
      </div>
    </div>
    </>
  );
};

export default Banner;
