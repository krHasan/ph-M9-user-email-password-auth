import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="mx-auto">
            <div className="mx-auto w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 border py-2 px-4" type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input className="mb-4 w-3/4 border py-2 px-4" type="password" name="password" id="" placeholder="Password" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;