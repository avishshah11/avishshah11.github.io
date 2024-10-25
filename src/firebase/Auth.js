import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const SignIn = async () => {
    const email = process.env.REACT_APP_EMAIL_ID;
    const password = process.env.REACT_APP_PASSWORD;
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        throw error
    }
};

export default SignIn;
