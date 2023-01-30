import { useState } from "react";

function Inputshortner({setinputvalue}){
    const [value,setvalue]=useState("");
    const handleclick = () =>{
        setinputvalue(value);
        setvalue("");
    }
    return(
        <div class="inputshortner">
            <h1>URL <span>Shortner</span></h1>
            <input type="text" 
            placeholder="Paste a link" 
            autoFocus
            value={value}
            onChange={e =>setvalue(e.target.value)}
            />
            <button onClick={handleclick}>Shorten</button>
        </div>
    )
}
export default Inputshortner;