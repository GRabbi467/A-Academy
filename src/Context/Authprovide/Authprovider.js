import react,{createContext,useEffect,useState } from "react";
import app from "../../firebase.init";
import { createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged, 
     signInWithEmailAndPassword, 
     signInWithPopup, signOut } from "firebase/auth";


export const AuthContext  =  createContext();
const auth = getAuth(app);

 const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user);

    const providerLogin =(provider)=>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            if(currentUser){
                const user_id = currentUser.uid;
            }
            else{
                window.alert('User logged out');
            }
        });
        return()=>{
            unsubscribe();
        }

    },[])


    const logOut=()=>{
        return signOut(auth);
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
    }


    return (
        <AuthContext.Provider value ={{user,providerLogin,logOut,createUser,signIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;