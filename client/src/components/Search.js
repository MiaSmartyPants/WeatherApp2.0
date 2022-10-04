import react from "react";
import {useState, useEffect }from 'react';
import '../App.css';

function Search(props){

    const [location, setLocation] = useState('');
    const updateLocation= (e) => {
        setLocation(e.target.value);
        console.log(location)
    }
    
    function callParentFunc(){
        if(!location){
            return null;
        }else{
            console.log(location)
        props.func(location)
        }
    }
    return(
        <form  
        className="search__container" action='#' onSubmit={callParentFunc}
       > 
        <input type="text" 
          onChange={updateLocation} placeholder="e.g. Chicago" className="search__input" />
       {/* <input type="submit" /> */}
    </form>
    )
}

export default Search;