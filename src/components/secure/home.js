import React, { useEffect } from "react";
import store from "../../store";
import { useState } from "@hookstate/core";
import { getAnswers, getData, getListOfQuestions, showResults  } from "../services/questions";
import Testquestions from "../testquestions";
import Results from "../results";

function Home() {
  const { user, questions, answers, results } = useState(store)
 
  useEffect(() => {
    showResults(user.uid.get())
    getListOfQuestions()
    getAnswers(user.uid.get())
  }, [])
  if (results.length !== 0) {
    return <Results />
  }
 
  return (
 
    <div >
      <Testquestions listOfQuestions={questions.get()} answersDictionary={answers.get()} />
    </div>
  );
}

export default Home