import React,{ useState }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup } from 'react-bootstrap'
import {persons} from './Persons'


function Main() {
    const [start, setstart] = useState(false) ;
    const [data ] = useState(persons)   ; 
    const [i, setstate] = useState(0) ;
    const [all, setall] = useState([]);
    const [present,setp]= useState([]);
    const [absent,seta]=useState([]);
    const [excuse,sete]=useState([]);
    const pres = (status)=>{
        if (i<7){
        if (status=== "Present") {
            setstate(i+1);setall((all)=>[{name:data[i] ,status},...all] );setp((present)=>[{name:data[i],status},...present])
        }
        else if (status=== "Absent") {
     setstate( i+1);setall((all)=>[{name:data[i] ,status},...all] );seta((absent)=>[{name:data[ i ],status},...absent])
        }
        else  
         {  setstate(i+1);setall((all)=>[{name:data[i] ,status},...all] );sete((excuse)=>[{name:data[i],status},...excuse])
        }
        }
    const tab =(status) =>{
        if (status==="t")
        {
            { all.map((x)=><div>{x}</div>)}
        }
        else if (status==='a')
        {
            { absent.map((x)=><div>{x}</div>)}
        }
        else if (status==="e")
        {
            { excuse.map((x)=><div>{x}</div>)}
        }
        else{
            { present.map((x)=><div>{x}</div>)}
        }
    }
         

     
    return (
        <div>
        <div>
           {start?null:<Button onClick={()=>{
                setstart(!start);
                 <h3>{data[i+1]}</h3>


            }} color="secondary">Commencer</Button>} 
  
     </div>
     <div id="buttons"  >
     <button type="button" disabled={!start} onClick={()=>pres("Present")} >Present</button>
     <button type="button" disabled={!start} onClick={()=>pres("Excusé")}  >Excusé</button>
     <button type="button" disabled={!start} onClick={()=>pres("Abscent")} >Abscent</button>
 </div>
 <ButtonGroup  size="large" color="secondary" aria-label="outlined primary button group">
        <Button  onClick={() =>tab("t")}>Tous</Button>
        <Button onClick={() =>tab("a")}>Abscent</Button>
        <Button  onClick={() =>tab("e")} >Excusé</Button>
        <Button onClick ={() =>tab("p")}>Present</Button>
      </ButtonGroup>
 </div>
    )  
 
        }
        
}
        export default Main
