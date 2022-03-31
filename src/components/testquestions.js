import { useFormik } from "formik";



const Testquestions = ({ listOfQuestions }) => {
    const formik = useFormik({
        initialValues: {

        },
        onSubmit: (values) => {

        },
        //validationSchema: SigninvalidationSchema
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            {listOfQuestions.map((q, index) => {
                console.log(q)
                return (
                    <div key={`question${index}`}>
                        <div>Question {index + 1}</div>
                        <div>{q.question}</div>
                        <div>{q.type === "multiple-choice" ?
                            <>{q.options.map((o, i) => {
                                return (
                                    <div key={`option${i}`}>
                                        <input
                                            type="radio"
                                            id="html"
                                            name={`option${i}`}
                                            value=""
                                        />
                                        {o}
                                    </div>
                                )
                            })}</>
                            :
                            <div>
                                Answer: _______
                            </div>
                        }</div>
                    </div>
                );
            })}
        </form>
    );
};
export default Testquestions