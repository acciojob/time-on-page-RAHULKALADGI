
import React, {useState , useEffect} from "react";
import './../styles/App.css';

const App =()=> {
let [time , setTime] = useState(0);

setInterval(()=> {
  setTime(()=>time+1);
},1000)

useEffect(()=> {
  setTime(0);
} , []);

return (
  <div>
    <p>You've been on this page for {time} seconds.</p>
  </div>
)

}

export default App
