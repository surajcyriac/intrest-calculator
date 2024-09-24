import { Stack, TextField, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'



function App() {

  const[interest,setInterest] = useState(0)
  const[principle,setPrinciple] = useState(0)
  const[rate,setRate] = useState(0)
  const[year,setYear] = useState(0)

  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)
 
  const userInputValidation = (inputTag)=>{
    // user to validate user input
    const {name,value} = inputTag
    console.log(name,value);
    // check number pattern in value
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)

    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
    }
      
  }

const handleCalculate=()=>{
  if(principle && rate &&year){
    setInterest((principle*rate*year)/100)
  }else{
    alert("Please fill all the fields")
  }
}
const handleReset=()=>{
  setPrinciple(0)
  setInterest(0)
  setRate(0)
  setYear(0)
  setIsPrincipleInvalid(false)
  setIsRateInvalid(false)
  setIsYearInvalid(false)

}

  return (
    <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className='d-flex flex-column justify-content-center bg-warning shadow p-3 rounded text-light'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        {/* form */}
        <form className='mt-3'>
          {/* principle */}
          <div className='mb-3'>
            <TextField value={principle||""} onChange={e=>userInputValidation(e.target)} name='principle' className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {
            isPrincipleInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid Principle Amount</div>
          }
          <div className='mb-3'>
            <TextField value={rate||""} onChange={e=>userInputValidation(e.target)} name='rate' className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
          </div>
          {
            isRateInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid Rate of interest</div>
          }
          <div className='mb-3'>
            <TextField value={year||""} onChange={e=>userInputValidation(e.target)} name='year' className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {
            isYearInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid Time period</div>
          }
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} className='bg-dark' style={{width:"50%", height:"70px"}} variant="contained" onClick={handleCalculate}>CALCULATE</Button>
            <Button className='border-dark text-dark' style={{width:"50%", height:"70px"}} variant="outlined" onClick={handleReset}>RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
