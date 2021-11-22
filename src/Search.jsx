import React,{useState} from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import  PeopleIcon  from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate=useNavigate();
    const selectionRange={
            startDate:startDate,
            endDate:endDate,
            key:"selection",
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <div className="search-h2">
            <h2>
                Number of Guests <PeopleIcon />
            </h2>
            </div>
            <div className="search-input">
                <input min={0} defaultValue={2} type="number" />
            </div>
            <div className="search-button">
                <Button className="searchButton" onClick={()=>{navigate('/search')}} >Search Airbnb</Button>
            </div>
        </div>
    )
}   
export default Search
