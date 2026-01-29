import React, { createContext, useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { onAuthStateChanged, User, signOut as firebaseSignOut, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signOut: async () => { },
    signInWithGoogle: async () => { throw new Error("Not implemented") },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signOut = useCallback(async () => {
        try {
            await firebaseSignOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }, []);

    const signInWithGoogle = useCallback(async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider);
    }, []);

    const value = useMemo(() => ({ user, loading, signOut, signInWithGoogle }), [user, loading, signOut, signInWithGoogle]);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
