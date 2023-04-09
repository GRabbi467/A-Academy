import react,{createContext,useEffect,useState } from "react";
import app from "../../firebase.init";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext  =  createContext();
const auth = getAuth(app);

 const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);

    const providerLogin =(provider)=>{
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log(currentUser)
            setUser(currentUser);
            if(currentUser){
                const uid = user.uid;
            }
            else{
                console.log('User logged out');
            }
        });
        return()=>{
            unsubscribe();
        }

    },[])


    const logOut=()=>{
        return signOut(auth);
    }


    return (
        <AuthContext.Provider value ={{providerLogin,logOut,}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;