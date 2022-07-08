import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup, 
  createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/authentication/authentication.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
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