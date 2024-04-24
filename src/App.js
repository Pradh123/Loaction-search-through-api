
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import Context from "./context/context";



function App() { 
const {filteredData,searchResults,setSearchResults}=useContext(Context)
  const [searchTerm, setSearchTerm] = useState('');
  
  
  useEffect(()=>{
    filteredData(searchTerm,setSearchResults);
    },[searchTerm,])
//  console.log(searchResults);
console.log(searchResults,searchResults,filteredData);
  return (
    <div className="">
    <div className=" flex justify-between w-1/2 relative top-40 left-1/4 border-2 border-gray-500  rounded-full">
      <SearchBar setCvalue={setSearchTerm}/>
      <Button/>
    </div>
    
    </div>
  );
}

export default App;

