// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

//   useEffect(() => {
//     async function redirectResultFunction() {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await getUserDocumentFromAuth(response.user);
//       }
//     }
//     redirectResultFunction();
//   }, []);

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign-In with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
