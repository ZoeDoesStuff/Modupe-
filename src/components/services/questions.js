import { collection, doc, query, where, getDoc, getFirestore, getDocs } from "firebase/firestore"
import store from "../../store";


export const getListOfQuestions = async () => {
    const db = getFirestore();
    const q = query(collection(db, "questions") );
    

    const querySnapshot = await getDocs(q);
    const questions=[]    
    querySnapshot.forEach((doc) => {
        questions.push(doc.data())
    });
    store.questions.set(questions)
}