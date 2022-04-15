import { useFormik } from "formik";
import { useState as useGlobalState } from "@hookstate/core"
import store from "../store";
import { submitAnswers } from "./services/questions";
import { useEffect, useState } from "react";


const Testquestions = ({ listOfQuestions, answersDictionary }) => {
  const { user } = useGlobalState(store)
  const [answers, setAnswers] = useState({})
  const [previousAnswers, setPreviousAnswers] = useState({})
  const [processing, setProcessing] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const index = currentQuestionIndex;
  const q = listOfQuestions[index]
  const questionId = q?.id
  const selectedAnswers = answersDictionary[questionId]

  useEffect(() => {
    setAnswers(selectedAnswers)
  }, [selectedAnswers])

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setProcessing(true);
      submitAnswers(answers, onSuccess)
    },

    //validationSchema: SigninvalidationSchema
  });


  const next = () => {
    console.log("I got here")

    submitAnswers(answers, onNextSuccess)
  };
  const onNextSuccess = (answers) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setPreviousAnswers(answers)
  }
  const onSuccess = (answers) => {
    //navigate to somewhere else 
  }
  const previous = () => {
    setAnswers(previousAnswers)
    setCurrentQuestionIndex(currentQuestionIndex - 1)
    console.log("prev", previousAnswers)

  }
  let buttonHtml;
  const previousButton = <input
    onClick={previous}
    type="button"
    value="Previous"
  />
  const nextButton=<input type="button" value="Next" onClick={next} />
  if (index === 0) {
    buttonHtml = (
      <>
        {nextButton}
      </>
    );
  } else if (index === listOfQuestions.length - 1) {
    buttonHtml = (
      <>
        {previousButton}
        <input type="button" value="Submit" />
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
    <form onSubmit={formik.handleSubmit}>
      <div key={`question${index}`}>
        <div>Question {index + 1}</div>
        <div>{q?.question}</div>
        <div>
          {q?.type === "multiple-choice" ? (
            <>
              {q?.options.map((o, i) => {
                return (
                  <div key={`option${i}`}>
                    <input
                      type="radio"
                      id={`${q.id}-option${i}`}
                      name={`${q.id}-option${i}`}
                      onChange={() => {
                        formik.setFieldValue(q.id, o)
                        setAnswers({ ...answers, answer: o, questionId: q.id, uid: user.uid.get() })
                      }}
                      value={o}
                      checked={formik.values[q.id] === o}
                    />
                    {o}
                  </div>
                );
              })}
            </>
          ) : (
            <div>Answer:<input id="Answer" name="Answer" placeholder="Enter" 
            onChange={(e) => { setAnswers({ ...answers, answer: e.target.value, questionId: q.id, uid: user.uid.get() })}} />
             
            </div>
          )}

        </div>

      </div>
      <div>{buttonHtml}</div>

    </form>
  );
};
export default Testquestions