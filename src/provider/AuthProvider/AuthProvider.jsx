import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { getDataFromLS, setDataToLS } from "../../tools/tools";



const auth = getAuth(app)

export const AuthContext = createContext();

 
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
    const subscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
    })
        
    return () => {
        return subscribe()
    }
    }, [])
    
    // theme switch 
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : 'cupcake'
      );
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
    
      const handleToggle = (e) => {
        if (!e.target.checked) {
          setTheme('cupcake');
        } else {
          setTheme("synthwave");
        }
    };

    // handle localStorage

    const [toys, setToys] = useState([]);
    const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://toy-market-server-drab.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toys]);

    
    useEffect(() => {
        const storedCart = getDataFromLS();
        const saveCart = [];

        for (const id in storedCart) {
            const addedToy = toys.find(toy => toy._id === id)
            if (addedToy) {
                const quantity = storedCart[id];
                addedToy.quantity = quantity;
                saveCart.push(addedToy);
            }
        }
        setCart(saveCart);
    },[toys])


    const handleCart = (toy) => {
        // console.log(id);
        let newCart = [];
        const exists = cart.find(t => t.id == toy._id);
        if (!exists) {
            toy.quantity = 1;
            newCart = [...cart, toy];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(t => t.id !== toy._id);
            newCart = [...remaining, exists];
        }
        setCart(newCart)
        setDataToLS(toy.id)
    }
    
    
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        logOut,
        handleToggle,
        theme,
        handleCart,
        toys,
        cart
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;