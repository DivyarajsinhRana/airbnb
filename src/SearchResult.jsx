import { FavoriteBorder, Star } from '@material-ui/icons'
import React from 'react'
import './searchResult.css'
const SearchResult = ({img,location,title,description,star,price,total}) => {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
                <FavoriteBorder className="searchResult-heart"/>    
            <div className="searchResult-info">
                <div className="searchResult-infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult-infoBottom">
                    <div className="searchResult-stars">
                        <Star className="searchResult-star"/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResult-prices">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
