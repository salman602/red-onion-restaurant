import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => setError(error.message))
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch(err => setError(err.message))
    };

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;