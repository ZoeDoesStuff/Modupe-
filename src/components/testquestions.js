import { useFormik } from "formik";
import { useState } from "@hookstate/core"
import store from "../store";
import { submitAnswers } from "./services/questions";


const Testquestions = ({ listOfQuestions }) => {
    const { user } = useState(store)
    const answers = useState({})
    const previousAnswers = useState({})
    const processing = useState();
    const currentQuestionIndex = useState(0);
    const selectedAnswer = useState([])
    const formik = useFormik({
        initialValues: {},
        onSubmit: (values) => {
            processing.set(true);
        },

        //validationSchema: SigninvalidationSchema
    });
    const index = currentQuestionIndex.get();
    const q = listOfQuestions[index];
    const next = () => {
        console.log("I got here")

        submitAnswers(answers.get(), onSuccess)
    };
    const onSuccess = (answers) => {
        currentQuestionIndex.set(currentQuestionIndex.get() + 1);
        previousAnswers.set(answers)
    }
    let buttonHtml;
    if (index === 0) {
        buttonHtml = (
            <>
                <input type="button" value="Next" onClick={next} />
            </>
        );
    } else if (index === listOfQuestions.length - 1) {
        buttonHtml = (
            <>
                <input onClick={() => currentQuestionIndex.set(currentQuestionIndex - 1)} type="button">Previous</input>
                <input type="button" value="Submit" />
            </>
        );
    } else {
        <>
            <input onClick={() => currentQuestionIndex.set(currentQuestionIndex + 1)} type="button">Next</input>
        </>;
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
                                                answers.set({ answer: o, questionId: q.id, uid: user.uid.get() })
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
                        <div>Answer:<input id="Answer" name="Answer" placeholder="Enter" onChange={(e) => { answers.set({ answer: e.target.value, questionId: q.id, uid: user.uid.get() }) }} />
                        </div>
                    )}

                </div>

            </div>
            <div>{buttonHtml}</div>

        </form>
    );
};
export default Testquestions