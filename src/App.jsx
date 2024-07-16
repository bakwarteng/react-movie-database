import React, {useState} from 'react'
import style from "./assets/style.css"
import Search from '../components/search'
import axios from "axios"

import Results from '../components/Results'
import Popup from '../components/Popup'




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
const openPopup = id =>{
    axios(apiurl + '&i=' + id).then(({ data })=>{
        let result = data;
console.log(result);
        setState(prevState =>{
            return {...prevState,selected: result}
        });

    });

    }

const closePopup = ()=> {
    return {...prevState, selected: {}}

}

    return(
        
        <div>

<h1> Movie Database </h1>
<main>

<Search
 handleInput={handleInput}
 search={search}/>
    <Results results={state.results} openPopup={openPopup}/>
    {(typeof state.selected.Title != 'undefined') ? <Popup selected={state.selected}closePopup={closePopup}/> :false}

    
</main>


        </div>







    )
}

export default App;
    