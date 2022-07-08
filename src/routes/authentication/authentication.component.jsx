import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-in-form/sign-in-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }


  return (
    <>
      <h1>Sign In Page</h1>
      
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>

      <SignUpForm />
    </>
  )
}

export default SignIn