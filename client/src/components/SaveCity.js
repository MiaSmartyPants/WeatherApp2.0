import React, {useState, useEffect }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function SaveCity({location}){
const [name, setName] = useState('');
const [dbData, setdbData] = useState();
   
    let handleClick =(e)=>{
        const inputName = prompt('Please enter your name')
        setName(inputName)
        postFavoriteCity();
    }

    async function getData() {
        await fetch("http://localhost:5050/favoritecity")
        
        //return the response
          .then((response) => response)
          .then((data) => {
            return data.json();
          })
          .then((data)=> {
            console.log("data", data)
            setdbData(data)
            
      
          })
       } 
    
         function postFavoriteCity(){
           
          fetch('http://localhost:5050/favoritecity', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({name,location}),
         })
           .then(response => {
             return response.text();
           })
           .then(data => {
              console.log(data)
              getData(); // call getData(), import it and pass data to this page
            })
            .catch((error) => {
             console.error('Error:', error);
          });
       }


    return(
        <div>
<button onClick={handleClick}>
<FontAwesomeIcon icon={solid('heart-circle-plus')} />
</button>
        </div>
    )
}

export default SaveCity;
