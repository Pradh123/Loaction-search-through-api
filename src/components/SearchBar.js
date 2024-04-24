import { useContext} from "react";
import { RxCross2 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import Context from "../context/context";
import FetchedData from "./FetchedData";
const SearchBar = ({ setCvalue}) => {
  const { selectedData, setSelectedData,setFocus,Focus,country,setCountry } = useContext(Context);
  const handleCross = (item1) => {
    if (selectedData.length > 1) {
      const data = selectedData.filter((item2) => item1 !== item2);
      setSelectedData(data);
    }
    const data1=country.filter(item3=>item3!==item1);
    setCountry(data1);
  
  };

const onedata=selectedData[0]?.slice(0,6);
  return (
    <>
      <div className=" w-96 flex  h-fit" >
        <IoLocationSharp className=" text-red-500 ml-4 mx-4 my-6 text-xl" />
        {Focus?<div className=" max-w-80 flex absolute ml-9 flex-wrap mt-3 min-w-72 shadow-lg bg-white">
          {selectedData.map((item) => (
                <p className=" bg-red-300 px-1 mx-1 py-1 my-1 text-black rounded-2xl flex">
                  {item}
                  <RxCross2
                    className="my-1"
                    onClick={() => handleCross(item)}
                  />
                </p>
              ))
            }
            
       
          <input
            type="text"
            placeholder={selectedData.length>=1 ?"Add more":"Country,State,City"}
            className=" outline-none bg-white py-1 text-xl"
            onChange={(e) => setCvalue(e.target.value)}
            onFocus={() => setFocus(true)}
            
          />
          {Focus&&<FetchedData/>}
        </div>
        :<div className=" max-w-90 flex absolute ml-9  mt-3 min-w-72 shadow-lg bg-white">
              {onedata!==undefined&&<p className=" bg-red-300 px-1 mx-1 py-1 my-1 text-black rounded-2xl flex">
                {`${onedata} ...`}
              </p>}
              {selectedData.length>1?<button className=" rounded-full p-1 border-2 mx-1">+{selectedData.length-1}</button>:null}
        <input
          type="text"
          placeholder={selectedData.length>=1 ?"Add more":"Country,State,City"}
          className=" outline-none bg-white py-1 text-xl"
          onChange={(e) => setCvalue(e.target.value)}
          onFocus={() => setFocus(true)}
          
        />
        
      </div>
}
      </div>
      
     
    </>
  );
};

export default SearchBar;
