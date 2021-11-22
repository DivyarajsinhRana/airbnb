import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
const Home = () => {
    return (
        <>
        <div className="home">
            <Banner/>
        </div>
        <div className="home-section">
            <Card src='./card1.jpg' title='Online Experienses' description='Unique activites
            we can do together,led by a 
            world of hosts'/>
            <Card src='./card2.jpg' title='Unique stays' description='Places that are just more than 
            just a place to sleep.' />
            <Card src='./card3.jpg' title='Entire Homes' description='Compfortable private places,
            with rooms for friends and family'/>
        </div>
        <div className="home-section">
            <Card src='./card4.jpg' title='3 Bedroom flates in' description='Superhost with a stunning view of the beachside in Sunny bournemouth'  price="$130/night"/>
            <Card src='./card5.jpg' title='PentHouses in london' description='Enjoy the amazing sites of london with this stunnig penthouses' price="$350/night"/>
            <Card src='./card6.jpg' title='1 Bedroom appartment' description='Superhost with great amenities and a  fabolous shopping complex near by' price="$70/night"/>
        </div>
        </>
    )
}

export default Home
