import { Button } from '@material-ui/core'
import React from 'react'
import './searchpage.css'
import SearchResult from './SearchResult'
const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage-info">
                <p>62 stays . 26 august to 30 august . 2 guest </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined" >Cancellation Flexibility</Button>
                <Button variant="outlined" >Type of place</Button>
                <Button variant="outlined" >Price</Button>
                <Button variant="outlined" >Rooms and Beds</Button>
                <Button variant="outlined" >More filters</Button>
            </div>
            <SearchResult 
            img='./hotel1.jpg'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen .  Free Parking . Washing Machine' 
            star='4.73'
            price='$30/night'
            total='$300 total' 
            />
            <SearchResult
            img='./hotel2.jpg'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen .  Free Parking . Washing Machine' 
            star='4.20'
            price='$28/night'
            total='$290 total' 
            />
            <SearchResult
            img='./hotel3.jpg'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen .  Free Parking . Washing Machine' 
            star='4.90'
            price='$35/night'
            total='$470 total' 
            />
            <SearchResult
            img='./hotel4.jpg'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen .  Free Parking . Washing Machine' 
            star='4.50'
            price='$30/night'
            total='$300 total' 
            />
            <SearchResult
            img='./hotel5.jpg'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen .  Free Parking . Washing Machine' 
            star='5'
            price='$50/night'
            total='$850 total' 
            />
            <SearchResult
            img='./hotel6.jpg'
            location='Private room in center of London'
            title='Stay at this spacious Edwardian House'
            description='1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen .  Free Parking . Washing Machine' 
            star='4.69'
            price='$25/night'
            total='$370 total' 
            />
        </div>
    )
}

export default SearchPage   
