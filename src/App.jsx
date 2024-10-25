import './App.css'
import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import questionaire from '../questionaire';
import { useState } from 'react';


function App() {
  const [currentQuestion, setQuestion] = useState({})

  const getRandomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * questionaire.length)
    return questionaire[randomNumber]
  }

  useEffect (() => {
    setQuestion(getRandomQuestion())
  },[])

  const handleNextQuestion = () => {
    setQuestion(getRandomQuestion())
  }

  return (
    <>
      <div className='container'>
        <div className='box-container'>
          <h2 className='number-question'>{currentQuestion.id}</h2>
          <h1>{currentQuestion.question}</h1>
          <div className='answer-container'>
            <div className='answer-box'>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Answer: {currentQuestion.id} <span>Click to expand</span> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {currentQuestion.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <button className='next-question' onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>
    </>
  )
}

export default App
