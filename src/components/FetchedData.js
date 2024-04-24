import React, { useContext, useEffect } from 'react'
import Context from '../context/context'
const FetchedData = () => {
  
const {selectedData,setSelectedData,searchResults,setFocus,country,setCountry}=useContext(Context);
// console.log(selectedData)
  return (
    <ul className='w-96 relative top-10 max-h-72 overflow-y-auto border-2 shadow-lg rounded-lg'>
        {searchResults?.map((item,i)=>{
             const handleItemData=()=>{
             
             const newArr=[...selectedData,item]
             
             if(country.length===0 || country.includes(item)===false){
            const arr=[...country,item];
            setSelectedData(newArr);
            setCountry(arr)}
           
            setFocus(false)
             }
          
        return (<li className='p-2 hover:bg-slate-300 cursor-pointer ' key={i} onClick={handleItemData} onBlur={()=>setFocus(false)}>{item}
       
        </li>)})}
    </ul>
  )
}

export default FetchedData