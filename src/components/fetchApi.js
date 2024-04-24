// Fetch data from the API endpoint

const filteredData = (userInput1, setData) => {
  fetch("https://d34yb5orp91dp6.cloudfront.net/country_state.json")
    .then((response) => response.json())
    .then((data) => {
      // Flatten the data structure to easily search through it
      const country = Object.entries(data);
      const state = Object.entries(Object.entries(data)[0][1]);
      const newa = [];
      for (let i of country) {
      
        const b=Object.entries(i[1])
       
       for(let j of b){
      //  console.log(j[0])
        if(j[1].length!==0){
        for(let k of j[1]){
            // console.log(k)
            const l=`${i[0]},${j[0]},${k}`
            if(l.toLocaleLowerCase().includes(userInput1.toLocaleLowerCase())){
              newa.push(l);
            }
          
        }
      }
       }
      }
      setData(newa);
  
    })
    .catch((error) => console.error("Error fetching data:", error));
};

export default filteredData;
