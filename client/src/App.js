import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect }from 'react';
import Search from './components/Search';
import {weatherForecast} from './Api'
import Today from './components/Today';
import SaveCity from './components/SaveCity';

function App() {

  const[generalData, setGeneralData] = useState();

  async function getData(location) {
    
console.log(location)
    await fetch(weatherForecast(location))
    
      .then((response) => response)
      .then((data) => {
        return data.json();
      })
      .then((data)=> {
        console.log("data", data)
        setGeneralData(data)
  
      })
   } 

  //  useEffect(() => {
	// 	// CALL here
	// 	 console.log(generalData)
	 
	//    },[])

  return (
    <div className="App container">
       
     <Search func={getData} />
     
     { !!generalData && <Today generalData={generalData}/> }
       
     <SaveCity location={generalData?.name}/>
    </div>
  );
}

export default App;
