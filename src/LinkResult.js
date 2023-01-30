import axios from "axios";
import { useEffect, useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = ({inputvalue}) => {
    
    const [shortenlink,setshortenlink]= useState("");

    const [copied,setcopied] = useState(false);
    const [loading,setloading]= useState(false);
    const [error,seterror]= useState(false);
const fetchdata= async()=>{

    try {
        setloading(true);
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputvalue}`);
        setshortenlink(res.data.result.full_short_link);
    } catch (err) {
        seterror(err);
        
    } finally{
        setloading(false);
    }
}
useEffect(()=>{
    if(inputvalue.length){
        fetchdata();
    }
},[inputvalue]);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setcopied(false);
        }, 1000);
        return () => clearTimeout(timer);
    },[copied]);
    
    if(loading){
        <p className="nodata">
            Loading...
        </p>
    }
    if(error){
        <p className="nodata">
            Something Went Wrong...
        </p>
    }
    
    return(
        <>
        {shortenlink &&(
            <div class="result">
            <p>
                {shortenlink}
            </p>
            <CopyToClipboard
            text={shortenlink}
            onCopy={ () => setcopied(true)}
            
            >

            <button className ={ copied ? "copied" : ""}>Copy to Clipboard</button>
            </CopyToClipboard>
        </div>
        )}
        </>
        
    )
}
export default LinkResult;