import { useFormik } from "formik";
import { useState as useGlobalState } from "@hookstate/core"
import store from "../store";
import { submitAnswers } from "./services/questions";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Testquestions = ({ listOfQuestions, answersDictionary }) => {
  const navigate = useNavigate()
  const { user } = useGlobalState(store)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [previousAnswers, setPreviousAnswers] = useState({})
  const selectedAnswer = useState()
  const [processing, setProcessing] = useState(false)
  const q = listOfQuestions[currentQuestionIndex]
  const questionId = q?.id
  const selectedAnswers = answersDictionary[questionId]
  console.log(answersDictionary[questionId], "xyz")
  useEffect(() => {
    setAnswers(selectedAnswers)
  }, [selectedAnswers])
  const formik = useFormik({


    initialValues: {

    },
    onSubmit: async (values) => {
      setProcessing(true)
      submitAnswers(answers, onSuccess, true)
    },

  })
  const questionsIndex = currentQuestionIndex
  const next = () => {
    console.log(answers, '+++')
    submitAnswers(answers, onNextSuccess)
  }
  const previous = () => {
    setAnswers(previousAnswers)
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }
  const onNextSuccess = (answers) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setPreviousAnswers(answers)
    //setAnswers({answer: ''})
  }
  const onSuccess = () => {
    navigate("/results")
  }

  let buttonHtml;
  const previousButton = <input
    onClick={previous}
    type="button"
    value="Previous"
  />
  const nextButton = <input type="button" value="Next" onClick={next} />
  if (questionsIndex === 0) {
    buttonHtml = (
      <>
        {nextButton}
      </>
    );

  } else if (questionsIndex === listOfQuestions.length - 1) {
    buttonHtml = (
      <>
        {previousButton}
        <button type="submit">Submit</button>
      </>
    );
  } else {
    buttonHtml = (
      <>
        {previousButton}
        {nextButton}
      </>
    );
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div >
          <div key={`questions${questionsIndex}`}>
            <div >Question {questionsIndex + 1}</div>
            <div>{q?.question}</div>
            <div>
              {q?.type === "multiple-choice" ?
                <>
                  {q?.options?.map((o, i) => {
                    return (
                      <>

                        <div key={`option${i}`}>
                          <input type="radio"
                            id={`option${i}`}
                            name={`option${i}`}
                            onChange={() => {
                              formik.setFieldValue(q.id, o)
                              setAnswers({ ...answers, answer: o, questionid: q.id, uid: user.uid.get() })
                            }
                            }
                            checked={formik.values[q.id] === o || selectedAnswers?.answer === o}
                            value={o}
                          />
                          {o}
                        </div>
                      </>
                    );


                  })}</>
                :

                <div>
                  Answer:<input value={answers?.answer || ""} onChange={(e) => {
                    setAnswers({ ...answers, answer: e.target.value, questionid: q.id, uid: user.uid.get() })
                    console.log(answers, '---')
                  }} id="Answer" name="Answer" placeholder='Enter Text' />
                </div>
              }</div>


          </div>

          <div>
            {buttonHtml}
          </div>
        </div>

      </form>
    </div>
  )
}

export default Testquestions