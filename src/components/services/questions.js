import { collection, doc, query, where, getFirestore, getDocs, writeBatch, setDoc, addDoc } from "firebase/firestore"
import store from "../../store";


export const getListOfQuestions = async () => {
    const db = getFirestore();
    const q = query(collection(db, "questions"));


    const querySnapshot = await getDocs(q);
    const questions = []
    querySnapshot.forEach((doc) => {
        questions.push(doc.data())
    });
    store.questions.set(questions)
    console.log (questions)
}
export const submitAnswers = async (answers, onSuccess, onFailure) => {
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then(() => {
        if (onSuccess) {
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log("emailNotSent");
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  } else {
    addDoc(collection(db, "submissions"), answers)
      .then(() => {
        if (onSuccess) {
          onSuccess(answers);
        }
      })
      .catch((error) => {
        console.log(error.message);
        // ..
        if (onFailure) {
          onFailure(error.message);
        }
      });
  }
 };
 

export const checkCorrect = async (questionid, answerid) => {
    const db = getFirestore();
    const q = query(collection(db, "answers"),
        where("questionid", "==", questionid),
    where("answerid", "==", answerid)
);
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});
};