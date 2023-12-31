//useSelector ключка кайрылат
// useDispatch

// useSelector
 //useDispatch

 
 import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import Header from "./redux/Header";
 
 
 function App()  {
  const [dark, setDark] = useState("");

   const balance = useSelector((state) => {
     console.log(state);
      return state.money;
   }) ;
   const dispatch = useDispatch();
 
 
    useEffect(() => {       
     const local = localStorage.getItem("res");       
     if (local) {      
     dispatch({  type: "ADD_MONEY",payload: local});
     }}, [dispatch]);
     
     
     useEffect(() => {
     localStorage.setItem("res", balance);
     }, [balance]);
 
  return (
    <>
     <div
      style={{
      background:dark? "black": "",
      transition:"2s",
      height:"980px",
      color: dark? "white": "black",
      }} 
      id="App">
       <div className="container">
       <Header dark={dark} setDark={setDark}/>
         <div className="app">
           <div className="block-text">
            <h1  style={{
             color: "black" ,
              margin : "17px",
             }}>{balance}</h1>
              </div>
          
           {/* <div className="btns">
  
             <button className="btn2" onClick={() => dispatch({ type : 'GET_MONEY' , payload : 10  })} >get money</button>
 
             <button className="btn1" onClick={() => dispatch({ type : 'ADD_MONEY' , payload : 10 })} >add money</button> 
 
 
           </div> */}
           <div className="block-btn">
             <a href="">
                 <button onClick={() => {
                   localStorage.removeItem('res')
                 }}
               
                 className="block1">C</button>
             </a>
 
              <button
              onClick={() => dispatch({ type : 'ADD_MONEY' ,payload : balance.length !== 0 ? '%' : ""  })} 
              className="block3">%</button>


              <button 
              onClick={() => dispatch({ type : 'ADD_MONEY' , payload : balance.length !== 0 ? '*' : ""  })} 
              className="block4">*</button>
 
 
              <button 
              onClick={() => dispatch({ type : 'ADD_MONEY' , payload : balance.length !== 0 ? '/' : ""  })} 
              className="block4">/</button>

 
              <button    
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '1'  })} 
               className="block7">1</button>
 
 
              <button  
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '2'  })} 
               className="block8">2</button>
                
              <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '3'  })} 
               className="block9">3</button>
               
               <button   
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : balance.length !== 0 ? '+' : ""  })} 
               className="block6">+</button>
 
               <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '4'  })} 
               className="block10">4</button>
 
               <button 
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '5'  })} 
               className="block11">5</button>
 
               <button
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '6'  })} 
               className="block12">6</button>
             
               <button
               onClick={() => dispatch({ type : 'ADD_MONEY' ,  payload : balance.length !== 0 ? '-' : ""   })} 
               className="block5">-</button>
                
               <button    
               onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '7'  })} 
               className="block13">7</button>
 
               <button   
                onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '8'  })} 
                className="block14">8</button>
 
               <button 
                onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '9'  })} 
                className="block15">9</button>

                <button 
                onClick={() => dispatch({ type : 'ADD_MONEY' , payload : '0'  })} 
                className="block16">0</button>
                         
                <button  
                onClick={() => {
                const result = eval(balance);
                dispatch({
                type : 'ADD_MONEY',
                payload : balance.length !== 0 ? '' +  "=" + "" + result : ""  ,
                 });
                 }} 
                  className="block17">=</button>

           </div>
         </div>
       </div>
     </div>
     </>
   );
 };
 
 export default App;
 





{/* <div className="btns">
            <button onClick={()=>dispatch({type: "ADD_MONEY", payload:10})}
            >
              add money</button>
            <button onClick={()=>dispatch({type: "GET_MONEY", payload: 10})}
            >
              get money</button>
          </div> */}