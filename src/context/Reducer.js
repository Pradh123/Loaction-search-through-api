import { useState } from "react"
import Context from "./context"
import filteredData from "../components/fetchApi"

const ContextProvider=({children})=>{
    const [country,setCountry]=useState([]);
    const [searchResults, setSearchResults] = useState([]);
   const [selectedData,setSelectedData]=useState([])
   const [Focus, setFocus] = useState(false);
   return ( <Context.Provider value={{country,Focus,setCountry,setFocus,setSelectedData,selectedData,filteredData,setSearchResults,searchResults}}>
        {children}
        </Context.Provider>)
}
export default ContextProvider;