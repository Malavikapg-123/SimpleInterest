import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  // js code
  const [Principle, setPrinciple] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Year, setYear] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("===Principle Amount===");
    console.log(Principle);
    console.log("===Rate of Interest===");
    console.log(Rate);
    console.log("===Total Years===");
    console.log(Year);
    let result = Principle * Year * Rate / 100;
    console.log(result);
    setInterest(result);
  }

  function clearValues() {
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setYear(0);
  }

  // code for validation

  const validate = (e) => {
    const { value, name, year } = e.target;
    console.log(name);
  
    // regular expression:to check whether a given string has perticular pattern
    // should have forward slash at the beginning and the end
    // start of the expression is indicated by ^(raised)
    // ending of the expression is indicated by $
    // if it match,we get array as return else null
    // !! (double negation) is used to convert result of regular expression to boolean value

    if (!!value.match(/^[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(true);
      }
      else if (name === 'rate') {
        setRate(value);
        setIsRate(true);
      }
      else if (name === 'year') {
        setYear(value);
        setIsYear(true);
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(false);
      }
      else if (name === 'rate') {
        setRate(value);
        setIsRate(false);
      }
      else if (name === 'year') {
        setYear(value);
        setIsYear(false);
      }
    }
  }

  return (

    <div className='d-flex justify-content-center align-items-center w-100 mt-5'
      style={{ height: "70vh" }}>

      <div style={{ width: "500px" }} className='bg-light p-5 rounded'>
        <h3 >Simple Interest</h3>
        <p>Calculate your Simple Interest easily</p>

        <div style={{ height: "150px" }} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>{'\u20B9'}{Interest}</h1>
          <p>Total simple Interest</p>
        </div>

        <form className='mt-5' onSubmit={handleSubmit}>

          <div className='mb-3'>
            <TextField name='principle' id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100 ' value={Principle}
              onChange={(e) => validate(e)} />
          </div>

          {!isPrinciple &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }


          <div className=''>
            <TextField name='rate' id="outlined-basic" label="Rate of Interest (pa)%" variant="outlined" className='w-100 ' value={Rate}
              onChange={(e) => validate(e)} />
          </div>

          {!isRate &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }

          <div className='mt-3'>
            <TextField name='year' id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100 ' value={Year}
              onChange={(e) => validate(e)} />
          </div>

          {!isYear &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }

          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button disabled={!isPrinciple || !isRate || !isYear} style={{ height: "50px", width: "200px" }} type='submit' variant="contained" className='bg-success'>Calculate</Button>
              <Button style={{ height: "50px", width: "200px" }} variant="contained" className='bg-light text-primary' onClick={clearValues} >
                Reset</Button>
            </Stack>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;


