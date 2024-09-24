import { useState } from 'react'

import './App.css'
import { Button, Stack, TextField } from '@mui/material'



function App() {
  const[interest,setInterest]=useState(0)
  const[principle,setPrinciple]=useState(0)
  const[Rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[isPrincipleInvalid,setIsPrincipleInvalid]=useState(false)
  const[isRateInvalid,setIsRateInvalid]=useState(false) //usestate arggument as initial value to be set
  const[isYearInvalid,setIsYearInvalid]=useState(false)

  const userInputValidation=(inputTag)=>
  {
    //used to validate user inputs

    const {name,value}=inputTag //object destructuring//inputTag is an object
    console.log(name,value);
    //check number or digit pattern in value

    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle")
    {
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/)?setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)

    }
    else if(name=="Rate")
    {
      setRate(value)
      !!value.match(/^\d*\.?\d+$/)?setIsRateInvalid(false):setIsRateInvalid(true)

    }
    else if(name=="year")
    {
      setYear(value)
      !!value.match(/^\d*\.?\d+$/)?setIsYearInvalid(false):setIsYearInvalid(true)

    }
    
    
  }
  const handleCalculate=()=>
  {
    if(principle&&Rate&& year)
    {
      setInterest(principle*Rate*year/100)

    }
    else{
      alert("Please fill all the fields")
    }
  }
const handleReset=()=>
{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
setIsPrincipleInvalid(false)
setIsRateInvalid(false)
setIsYearInvalid(false)
}
  return (
    <div  className='d-flex justify-content-center align-items-center vh-100 bg-dark text-success '>
     <div style={{width:'600px'}} className='bg-light rounded p-5' ><h3>Simple interest calculator</h3>
     <p>Calculate your simple interest Easily</p>
     <div className='d-flex flex-column justify-content-center align-items-center bg-warning shadow p-3 text-light rounded'>
      <h1>₹{interest}</h1>
      <p className='fw-bolder'>Total simple interest</p>
     </div>
     {/* {form} */}
     <form action="" className='mt-3'></form>
     
     {/* {principle} */}
     <div className='mb-4'>
     <TextField value={principle || ""}  onChange={e=>userInputValidation(e.target)} name='principle' className='w-100' id="outlined-basic" label="Principle Amount ₹" variant="outlined" />
     </div>
     {
      isPrincipleInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid principle Amount</div>

     }

     <div className='mb-3'>
     <TextField value={Rate || ""}   onChange={e=>userInputValidation(e.target)}  className='w-100' name='Rate' id="outlined-basic" label="Rate of interest(%)" variant="outlined" />
     </div>
     {
         isRateInvalid &&  <div className='mb-3 fw-bolder text-danger'>*Invalid Rate of interest</div>
     }

     <div className='mb-3'>
     <TextField value={year || ""}   onChange={e=>userInputValidation(e.target)}  className='w-100' name="year" id="outlined-basic" label="Time period (Y)" variant="outlined" />
     </div>
     {
         isYearInvalid &&  <div className='mb-3 fw-bolder text-danger'>*Invalid Year</div>
     }
        
<Stack direction="row" spacing={2}>
<Button onClick={handleCalculate} disabled={ isPrincipleInvalid ||  isRateInvalid || isYearInvalid} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
<Button onClick={handleReset}  style={{width:'50%',height:'70px'}} className='border-dark' variant="outlined">Reset</Button>
</Stack>
     
     </div>
    </div>
  ) 
}

export default App
