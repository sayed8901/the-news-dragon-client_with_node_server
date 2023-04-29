/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // to update user data to firebase auth
    const updateUserData = (name, imgThumb) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: imgThumb})
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // to observe the state of currently logged_in user
    useEffect( () => {
        const unmount = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change:', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {unmount()};
    } ,[])

    const authInfo = {user, loading, createUser, userLogin, updateUserData, logOut, }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;