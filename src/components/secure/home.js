import React, { useEffect } from "react";
import store from "../../store";
import { useState } from "@hookstate/core";
import { getAnswers, getData, getListOfQuestions } from "../services/questions";
import Testquestions from "../testquestions";

const Home = () => {
  const { questions, user, answers } = useState(store)
  useEffect(() => {
    getListOfQuestions()
    getAnswers(user.uid.get())
  }, [])
  return (
   <Testquestions answersDictionary={answers.get()} listOfQuestions={questions.get()}></Testquestions>
  )
}
export default Home