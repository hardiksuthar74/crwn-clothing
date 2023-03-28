// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

//   useEffect(() => {
//     async function redirectResultFunction() {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await getUserDocumentFromAuth(response.user);
//       }
//     }
//     redirectResultFunction();
//   }, []);

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Hello SignIn</h1>
      <button onClick={logGoogleUser}>Sign-In with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign-In with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
