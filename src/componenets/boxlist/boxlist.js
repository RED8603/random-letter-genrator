import {useRef } from 'react';
import './boxlist.css'



export default function BoxList(){
    // let box1 = useRef();
    // let box2 = useRef();
    // let box3 = useRef();
    // let box4 = useRef();
    // let box5 = useRef();
    // let box6 = useRef();
    
    //random number genrator
 
 let alphabet = "abcde"
 
 let randomCharacter1 = alphabet[Math.floor(Math.random() * alphabet.length)]
 let randomCharacter2 = alphabet[Math.floor(Math.random() * alphabet.length)]
 let randomCharacter3 = alphabet[Math.floor(Math.random() * alphabet.length)]
 let randomCharacter4 = alphabet[Math.floor(Math.random() * alphabet.length)]
 let randomCharacter5 = alphabet[Math.floor(Math.random() * alphabet.length)]
 let randomCharacter6 = alphabet[Math.floor(Math.random() * alphabet.length)]

    //indicators

    let indicatre1 = false;
    let indicatre2 = false;

    // style
    const styles = {
        backgroundColor: 'green'
    }


    //test 1

    function test1(){
        if (randomCharacter1 == randomCharacter4 && randomCharacter1== randomCharacter5){
        
            indicatre1 = true;
        
        }
    if (indicatre1){
        return styles;
    }
    }

    console.log(test1());

    //test 2

    function test2(){
        if (randomCharacter2 == randomCharacter3 && randomCharacter2== randomCharacter6){
        
            indicatre2 = true;
        
        }
    if (indicatre2){
        return styles;
    }
    }

    console.log(test2());


    





  return  <>  <div  className="card box1" style= {test1()} >
  
    <h1   className="card-head ">
        
          {randomCharacter1}
          
          </h1>
    
</div>

<div className="card box2"  style = {test2()} >
  
    <h1   className="card-head ">  {randomCharacter2}</h1>
    
</div> 

<br/>

<div className="card box3" style = {test2()}>
  
  <h1   className="card-head "> 
  
   {randomCharacter3}
   
   </h1>
  
</div>

<div className="card box4" style= {test1()} >

  <h1   className="card-head "> 
  
   {randomCharacter4}
   
   
   </h1>
  
</div> 

<br/>

<div  className="card box5" style= {test1()} >
  
  <h1   className="card-head box"> 
  
   {randomCharacter5}
  
   
   </h1>
  
</div>

<div className="card box6"  style = {test2()}>

  <h1    className="card-head">  {randomCharacter6}</h1>
  
</div> 



</>

}