import React, { useEffect } from "react";
import store from "../../store";
import { useState } from "@hookstate/core";
import { getData, getListOfQuestions } from "../services/questions";
import Testquestions from "../testquestions";

const Home = () => {
  const { questions } = useState(store)
  useEffect(() => {
    getListOfQuestions()
  }, [])
  return (
   <Testquestions listOfQuestions={questions.get()}></Testquestions>
  )
}
export default Home