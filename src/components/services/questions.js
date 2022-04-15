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
  console.log(questions)
}
export const submitAnswers = async (answers, onSuccess, onFailure, isLast) => {
  const isCorrect = await checkCorrect(answers)
  answers = { isCorrect, ...answers }
  const db = getFirestore();
  if (answers.id) {
    //update
    setDoc(doc(db, "submissions", answers.id), answers, { merge: true })
      .then((answerz) => {

        if (onSuccess) {
          console.log("answers add", answers)
          if (isLast)
          const numberOfCorrect = await countCorrect (answers.uid)
          const numberOfIncorrect= await countIncorrect(answers.uid)
          await submitResults({numberOfCorrect, numberOfIncorrect, uid:answers.uid})
        }
          onSuccess(answerz);
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
    //need to fix layout of coding since i have 9 errors 
    addDoc(collection(db, "submissions"), answers)
      .then((d) => {
      
        const id = d.id
        const answerz = { id, ...answers }

        if (onSuccess) {
          onSuccess(answerz);
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



export const getAnswers = async (uid) => {
  const db = getFirestore();
  const q = query(collection(db, "submissions"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  const answers = {};
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    data.id = doc.id
    answers[data.questionId] = data
  });
  store.answers.set(answers);
};
export const checkCorrect = async ({ questionId, answer }) => {
  const db = getFirestore();
  const q = query(collection(db, "answers"),
    where("questionid", "==", questionId),
    where("answer", "==", answer));

  const querySnapshot = await getDocs(q);
  const isCorrect = querySnapshot.size === 1
  return isCorrect
}

export const countCorrect = async ({uid}) => {
  const db = getFirestore();
  const q = query
  (collection(db, "submissions"),
  where("uid", " == ", uid), 
  where("isCorrect", "==", true)
  );
const querySnapshot = await getDocs(q);
const correctSubmissions = querySnapshot.size 
return correctSubmissions
};
export const countIncorrect = async ({uid}) => {
  const db = getFirestore();
  const q = query
  (collection(db, "submissions"),
  where("uid", " == ", uid), 
  where("isCorrect", "==", false)
  );
const querySnapshot = await getDocs(q);
return querySnapshot.size 
};


export const showResults = async ({uid}) => {
  const db = getFirestore();
  const q = query
  (collection(db, "results"),
  where("uid", " == ", uid), 
  );
const querySnapshot = await getDocs(q);
const results=[]
querySnapshot.forEach((doc) => {
  const data = doc.data()
  data.id = doc.id
  answers[data.questionId] = data
});
store.results.set(results);
};

export const submitResults  = async (results ) => {
  const db = getFirestore();
    setDoc(doc(db, "results", results.uid), results, { merge: true })
      .then((d) => {
      })
      .catch((error) => {
        console.log("resultsNotSubmitted", error.message);
        throw error 
      });
  };

