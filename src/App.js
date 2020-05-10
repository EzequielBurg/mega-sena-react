import React, { useState } from 'react';
import { Container, ButtonGroup, Button, CircularProgress  } from '@material-ui/core';
import './App.css'

export default function App() {
  const [value, setValue]     = useState(0)
  const [numbers, setNumbers] = useState([])

  const getRandomNumber = () => {
    let min = Math.ceil(1);
    let max = Math.floor(60);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleSelector = value => {
    setNumbers([])
    setValue(value)

    setTimeout(() => {
      setValue(0)
    }, 2000)
    
    sortNumbers(value)
  }

  const sortNumbers = value => {
    const randomNumbers = []

    for (let i = 1; i <= value; i++) {
      let newElement = getRandomNumber()
      while (randomNumbers.indexOf(newElement) !== -1)
        newElement = getRandomNumber()
      
      randomNumbers.push(newElement)
    }

    setNumbers(randomNumbers.sort((a, b) => a - b))
  }

  return (
    <>
      <div className="title">
        <h1>Geração aleatória de números para a MEGA-SENA</h1>
      </div>
      <Container>
        <h3>Selecione quantos números deseja sortear:</h3>
        <ButtonGroup aria-label="outlined secondary button group" color="secondary" size="large">
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(6)}>6</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(7)}>7</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(8)}>8</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(9)}>9</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(10)}>10</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(11)}>11</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(12)}>12</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(13)}>13</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(14)}>14</Button>
          <Button id="button" variant="contained" color="secondary" onClick={() => handleSelector(15)}>15</Button>
        </ButtonGroup>
      
      {
        value > 0 ?
        <div className="geral">
          <div className="text">
            <h2>GERANDO {value} NÚMEROS ALEATÓRIOS </h2>
          </div>
          
          <div className="loader">
            <CircularProgress color="primary"/>
          </div>
        </div> :
        <span></span>
      }

      {
        numbers.length > 0 && value === 0 ?
        <div className="result">
          <strong>Os números aleatórios gerados são:</strong>
          <ul>
            {
              numbers.map((number, index) => (
                <div className="li" key={index}>
                  <li><strong>{number}</strong></li>
                </div>
              ))
            }
          </ul>
        </div> :
        <span></span>
      }
      </Container>
    </>
  )
}
