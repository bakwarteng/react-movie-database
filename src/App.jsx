import React, {useState} from 'react'
import style from "./assets/style.css"
import Search from '../components/search'
import axios from "axios"

import Results from '../components/Results'




 const App =() =>{
const [state, setState]= useState({

    s:"",
    results:[],
    selected:{}
});
    const apiurl = "http://www.omdbapi.com/?apikey=8c93180c";
    const search =(e)=>{
        if(e.key==='Enter'){
            axios(apiurl + "&s=" + state.s).then(({data})=>{
                let results = data.Search

                setState(prevState=>{
return { ...prevState, results:results }                })




            })

        }
    }

    const handleInput= (e)=>{
        let s = e.target.value; 
        setState(prevState=>{
          return {...prevState, s:s}  
          
        });
    }
    return(
        
        <div>

<h1> Movie Database </h1>
<main>

<Search
 handleInput={handleInput}
 search={search}/>
    <Results results={state.results}/>


</main>


        </div>







    )
}

export default App;
    