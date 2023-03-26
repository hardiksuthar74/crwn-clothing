import {
  signInWithGooglePopup,
  getUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    getUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Hello SignIn</h1>
      <button onClick={logGoogleUser}>Sign-In with Google</button>
    </div>
  );
};

export default SignIn;
