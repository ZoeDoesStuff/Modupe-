import store from "./../store";
import { useState } from "@hookstate/core";
import { React, useEffect } from "react";
import { showResults } from "./services/questions";
import { useNavigate } from "react-router";
 
 
function Results() {
    const { user, results } = useState(store)
    const uid = user.uid.get()
    return (
        <div>
            <h1>
                Results
            </h1>
            <br />
            Number of Correct: {results[0]?.numberOfCorrect?.get()}
            <br />
            Number of Incorrect: {results[0]?.numberOfIncorrect?.get()}
            <br />
            Have a good day :)
        </div>
 
    )
};
 
export default Results;
