import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // create user for singup
  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Set display name and photo URL
        return updateProfile(userCredential.user, {
          displayName,
          photoURL,
        }).then(() => {
          return userCredential;
        });
      }
    );
  };

  // sing in user
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sing in
  const googleSigIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  sing out
  const logOut = () => {
    return signOut(auth);
  };

  // ovserve user auth state
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // stop observbing while unmounting
      return () => {
        return unsubsribe();
      };
    });
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    googleSigIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProviders;
