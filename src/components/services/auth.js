import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../../store";

export const signup = ({ names, email, password, phonenumber, address }, onSuccess, onFailure) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, names, email, password, phonenumber, address)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: names + " ",
      })
      console.log("userSignedInSuccessfully")
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("userDidNotSigninSuccessfully")
      if (onFailure) {
        onFailure(error.message);
      }
      // ..
    });
}

export const Signin = ({ Names, password }, onSuccess, onFailure) => {
  const auth = getAuth(auth, Names, password);
  signInWithEmailAndPassword(auth, Names, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("userSignedInSuccessfully")
      store.user.set({ fullName: user.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated: true, uid:user.uid })
      if (onSuccess) {
        onSuccess();

      }
    })
    .catch((error) => {
      if (onFailure) {
        onFailure(error.message);
      }
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Invalid Email or Password")
    });
}

export const resetpassword = (email, onSuccess, onFailure) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      if (onSuccess) {
        onSuccess();
      }
    })

    .catch((error) => {
      if (onFailure) {
        onFailure(error.message);
      }
      const errorCode = error.code;
      const errorMessage = error.message;

    });
}